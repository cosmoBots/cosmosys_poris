# cosmoSys PORIS

Plugin Redmine que integra modelos PORIS con
[cosmoSys](https://github.com/cosmoBots/cosmoSys). No depende de
`cosmosys_req`.

> **EXPERIMENTAL:** El plugin está en validación. Su integración en deploy es
> provisional, a la espera de una estrategia más modular; esta etiqueta no
> implica una limitación funcional conocida.

El perfil `poris` usa trackers PORIS con perfiles de ítem propios. Los
contenedores (`prSys`, `prParam`) usan la jerarquía de cosmoSys; los modos
(`prMode`) expresan alternativas mediante relaciones `precedes` hacia otros modos
o valores. `prValue` usa un solo tracker y `pr_value_kind` diferencia valores
enumerados (opción discreta), numéricos y de texto. Las etiquetas por ámbito se guardan como asociaciones, no
como campos personalizados.

El contrato PORIS sólo ofrece `Unknown` al usuario en la raíz real del modelo;
los descendientes conservan el modo
activo si sigue siendo elegible, eligen la primera alternativa elegible si no,
y pasan a `Unknown` si no hay alternativas. Para valores discretos se aplica la
misma regla de conservación/primera alternativa/sin selección; para rangos
numéricos se conserva el dato si es válido y, si no, se usa el default del rango
activo. `Unknown` es el modo predeterminado de arranque y representa
inactividad lógica, no un mecanismo físico. La referencia normativa está en
`docs/poris_unknown_mode_semantics.md` del workspace csys.

Las relaciones `precedes` habilitan modos y valores PORIS; su `delay` es una
prioridad, no días de retraso: el valor más alto se ofrece primero y los
empates se resuelven por `csposition`, posición del árbol e ID. La migración
`002` convierte a `precedes` con prioridad cero sólo las relaciones `blocks`
entre dos item profiles PORIS, y elimina las fechas de planificación de los
items PORIS. Las relaciones de otros perfiles quedan intactas. Los snapshots preservan
el `delay`; el ODS genérico de cosmoSys también lo conserva como
`CSID (prioridad)` dentro de `precedent_items` cuando no es cero. Los CSID sin
sufijo siguen representando prioridad cero.

## Requisitos e instalación

- Redmine 7.0.1.
- cosmoSys 0.1.6 o posterior.
- El bundle JavaScript de `porisViewer`, incluido en este repositorio.

Instala el repositorio como `plugins/cosmosys_poris`, instala las dependencias
de Redmine y ejecuta la migración del plugin:

```sh
git clone https://github.com/cosmoBots/cosmosys_poris.git plugins/cosmosys_poris
bundle install
RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=cosmosys_poris
```

Después, reinicia Redmine. El perfil de proyecto `poris` registra sus trackers
y perfiles durante la carga del plugin.

La primera visualización con porisViewer ya está disponible en el menú PORIS y
en `/projects/:identifier/poris`. Consume un XML generado desde el modelo de
Redmine. La formación del universo visible del XML usa
`Cosmosys::ViewAudienceSelector`; `CosmosysPoris::ModelSelector` aplica después
las reglas específicas del árbol PORIS (modos activados, valores y comandos).
El exportador XML serializa ese resultado y conserva la estructura del contrato
actual. En el alcance de proyecto, `Commit` envía la configuración actual al
runtime Ruby PORIS, y muestra tanto el estado efectivo de cada sistema y
parámetro como las llamadas `setMode`/`setValue` realizadas. Los botones de
`prCmd` envían en esa misma secuencia el estado actual y una operación
`invoke_command`; la llamada se valida contra el comando hijo del contenedor,
se registra como una invocación de una sola vez y no se guarda ni se reproduce
al restaurar la sesión. No ejecuta todavía una acción física: esa conducta no
está definida en el modelo. Cada sesión tiene
su propia configuración: se conserva en el estado de sesión de Rails, no en la
base de datos del proyecto ni en un objeto global compartido. En cada petición
se reconstruye el runtime desde el modelo PORIS y se reproducen las operaciones
anteriores antes de aplicar las nuevas. El endpoint también admite operaciones
individuales, por lo que no depende de que el cliente sea porisViewer. El
editor asistido de subárboles y las configuraciones compartidas persistentes
quedan para fases futuras.

Un modo puede activar varios `prValue` de cualquier tipo. Si hay más de un
candidato, porisViewer muestra un selector del valor activo; el tipo de ese
`prValue` determina el editor y su validador (por ejemplo, el rango flotante).
Con un único candidato, no muestra selector adicional.

En el alcance de proyecto, la pestaña PORIS presenta el visor a la izquierda y
el diagrama combinado de cosmoSys a la derecha; en pantallas estrechas se apilan.

### Vistas previas de requisitos y validación

En la ficha de cada ítem PORIS se muestran dos vistas previas Markdown: los
fragmentos de requisitos y de validación que aporta ese elemento PORIS. Un
sistema (`prSys`) expone los sistemas y parámetros que contiene y llega hasta
los modos de esos parámetros; no incluye sus valores internos. La vista de un
parámetro (`prParam`) se titula «Información del parámetro <nombre>» y puede
continuar hasta sus valores y rangos. Su información es una lista plana, sin
encabezados por modo. Sus requisitos separan disponibilidad de modos, definición
de valores y efectos de los modos. Los valores enumerados se documentan en una
tabla con el valor posible, su significado y su valor predeterminado; los dos
últimos se representan con `csDatum` si aún no están definidos. Los tipos de
`prValue` comparten las claves `default` y `meaning` para facilitar una
conversión futura de representación. El requisito solo
establece que el valor posible esté disponible para el parámetro. Los valores
flotantes se describen como rangos de valores, con intervalo, unidad, resolución
y default. Las claves `csDatum` nombran la propiedad sin repetir el tipo ya
determinado por el nodo (`tolerance`, `constraints`, `meaning`). Para modos,
valores y comandos se incorpora el contexto PORIS inmediato. Las relaciones
`precedes` acotan los destinos descritos y su prioridad ordena las alternativas.
En la ficha, los paneles se ordenan como combinado, dependencias y jerárquico;
las vistas previas de requisitos y validación aparecen después de esos
diagramas. En alcance `node`, el formulario de un `prSys` omite los `prValue`
internos de sus parámetros para mantener el mismo límite de interfaz que el
preview de requisitos. Si se selecciona un `prMode` o un `prValue`, tanto en
alcance `node` como `node_down`, el visor parte del contenedor inmediato y
recorta el modelo a la rama que mantiene visible el elemento seleccionado;
los modos de esa rama quedan preseleccionados y no se ofrecen alternativas que
lo oculten. `project` conserva el modelo completo.

Cada vista empieza por un listado común de candidatos `csDatum`, deduplicado
por clave semántica, para que requisitos y validación puedan referirse al mismo
dato pendiente. Los IDs `R-XXXX` y `V-XXXX` son provisionales y se calculan para
la vista; no son IDs persistidos. Las vistas se generan síncronamente al abrir
la ficha y todavía son experimentales. Las claves son compatibles con el
diccionario cosmoSys: `POR-0008.purpose` se representa como
`POR_0008_purpose` y la referencia es `${POR_0008_purpose.value}`.

La vista de proyecto PORIS se organiza en pestañas: configuración (viewer,
runtime de sesión y diagrama), requisitos, plan de validación, constructor Ruby
y comandos de validación automatizada. Los previews de requisitos y validación
agregan las raíces PORIS del proyecto y sus descendientes. Si
`cosmosys_req` o `cosmosys_val` están instalados, aparecen botones de
generación/sincronización con un ACK; esas operaciones aún no crean los
proyectos correspondientes. El botón de `csDatum` sí abre un preflight y crea
solo las definiciones que faltan. El destino se elige entre proyectos del mismo
árbol que tengan habilitado `csDatum` y donde el usuario pueda añadir ítems.
Los valores existentes se conservan y los nuevos empiezan como `TBD`.
La validación agrupa sus pasos en casos de prueba por alcance PORIS; cada caso
usa referencias `csDatum` TBD para `tpPreconditions` y `tpPostconditions`, y
cada paso muestra por separado título, estímulos y resultado esperado, con la
estructura de `tpStep` de `cosmosys_val`. Los estímulos son acciones/comandos;
los resultados esperados son consultas al estado resultante. Los rangos flotantes generan pasos
individuales para el valor predeterminado, ambos límites, puntos interiores
(`mínimo + tolerancia`, `máximo - tolerancia`) y exteriores (`mínimo -
tolerancia`, `máximo + tolerancia`). Cada estímulo del plan es una solicitud al
sistema y cada resultado indica si el sistema la acepta o rechaza; no se
presupone una interfaz gráfica ni una acción de «seleccionar». Los pasos que
esperan un rechazo (opciones bloqueadas o entradas numéricas exteriores al
rango) se muestran en rojo y describen la respuesta del sistema. Para
contenedores con modos, el plan recorre
las opciones con búsqueda en profundidad y retroceso: en cada estado prueba
primero las opciones bloqueadas de la frontera inmediata, explora después cada
opción habilitada y vuelve al nivel más cercano para continuar por la siguiente
rama. No desciende por ramas bloqueadas. En el preview agregado del proyecto,
la validación se genera desde las raíces para evitar repetir pasos en previews
por parámetro; los requisitos siguen incluyendo esos alcances detallados. La
estrategia está detallada en `docs/poris_spec_validation_generator_design.md`.
Las plantillas Markdown están en los ficheros de locale inglés y español y se
resuelven con el idioma configurado en el proyecto, no con el idioma de
interfaz del usuario. Admiten interpolaciones nombradas de I18n para los
nombres PORIS, referencias, límites y demás contenido generado.

En la vista de proyecto sólo se solicita el fragmento de la pestaña visible;
los previews y el constructor se calculan en esa petición asíncrona, no al
renderizar el shell ni para pestañas ocultas. El bundle de porisViewer se carga
dinámicamente al abrir Configuración. Si al cambiar un modo padre un subnodo
queda sin modos elegibles, pasa a `Unknown`, sus valores se limpian y desaparece
del formulario inmediatamente. La visibilidad se deriva de los destinos del
modo activo, para que una lista de modos elegibles obsoleta no mantenga el
subnodo visible. Los modos sin destinos (como `Single`) se interpretan como
una lista vacía durante la reconciliación: sus subnodos quedan en `Unknown` y
se retiran del formulario.

La pestaña de código produce una vista del constructor Ruby con accesos
`sys<Name>`, `pr<Name>`, `md<Param>Mode_<Mode>` y `vl<Param>_<Value>`.
Las llamadas generadas pasan las referencias a modos y valores mediante esos
accesores, no mediante sus nombres como cadenas.
`Run`, en la pestaña de comandos de validación, ejecuta secuencialmente cada
estímulo contra el runtime PORIS de la sesión, a razón de dos pasos por segundo;
consulta el resultado esperado tras cada acción y muestra el resultado en una
columna a la derecha. Tanto el código Ruby generado como `Run` consumen el
misma secuencia estructurada de pasos que genera el plan del proyecto, incluidos
los mismos IDs y títulos. Los pasos sin una operación ejecutable o cuya
expectativa depende de un `csDatum` TBD se muestran con un `NotImplementedError`
y quedan no verificables; `Run` continúa con los siguientes sin contarlos como
aprobados. Los fallos
verificados sí detienen el recorrido. El plan se muestra en
una sola tabla: código de cada paso, log de ejecución y check. El runtime se
presenta en un sidebar y se actualiza en cada paso. El recorrido se detiene ante el
primer fallo y marca el resto de pasos como no ejecutados. El estado final se
conserva en la sesión y aparece al volver a Configuración. Esta ejecución
comprueba el contrato del runtime Ruby ligero del plugin; no invoca
hardware ni persiste estado en la base de datos. El constructor
marca como pendiente el registro de comandos porque el núcleo `rbPORIS` de
referencia aún no define `PORISCmd`.

Los propósitos no definidos se presentan como notas informativas con una
referencia de valor compatible con el diccionario, por ejemplo
`${POR_0008_purpose.value}`, no con un `TBD` literal.
Las notas se organizan en
capítulos Markdown sin numeración, como anticipo de futuros `csInfo`. En las
vistas de `prSys` y `prParam` aparecen en una lista plana bajo «Información del
sistema <nombre>» o «Información del parámetro <nombre>»; las referencias a
parámetros y modos incluyen el contenedor para desambiguarlas. La vista de
requisitos de un `prSys` incluye una
descripción general y capítulos «Parámetros» y «Modos de funcionamiento». Los
requisitos son atómicos: para cada parámetro solo se requieren los modos
enlazados desde los modos del sistema; cada modo consumido se declara
individualmente bajo un subcapítulo del parámetro. En «Modos de funcionamiento»
se indica primero la disponibilidad de cada modo y después sus efectos. Así,
añadir un modo no cambia una lista normativa ya aprobada ni obliga a subsistemas
reutilizados a ofrecer modos que el sistema no consume. Los detalles internos
de los valores de los parámetros quedan fuera de ese alcance. Los fragmentos
generados son requisitos independientes y no condicionan su validez a que
PORIS siga presente.

Para un `prMode`, la vista de requisitos declara primero el modo que ofrece su
contenedor. Si el modo habilita modos de parámetros hijos, genera una
obligación por parámetro indicando el modo seleccionado, sin expandir los
valores numéricos descendientes. El propósito que falte se presenta como nota
informativa ligada a un candidato `csDatum`, no como requisito.

### Runtime por sesión y realce del diagrama

El viewer ya mantiene en memoria el grafo PORIS parseado y el estado reactivo
de cada parámetro: modo actual, `prValue` activo y dato editable. Ese estado
se traduce a operaciones ordenadas desde la raíz hacia las hojas. El servidor
reconstruye un runtime Ruby PORIS de vida corta a partir del modelo vigente,
restaura el estado de la sesión y aplica cada `setMode`/`setValue`; los modos
inválidos se rechazan, y los cambios de supramodo reconcilian los descendientes
con las alternativas elegibles. La configuración resultante se conserva por
sesión mediante el `CookieStore` de Rails (sólo IDs y datos seleccionados), no
como instancia Ruby que permanezca viva entre peticiones ni como estado
compartido del proyecto. El runtime es una implementación acotada
del contrato PORIS; la integración de las clases `rbPORIS` originales se deja
para una fase posterior.

La evolución propuesta es:

1. Añadir al SVG del diagrama combinado identificadores estables que permitan
   asociar cada nodo gráfico con su elemento PORIS. El estado activo podría
   realzarse en el cliente sin regenerar Graphviz si el SVG se carga como DOM
   accesible (no como `<img>`); actualmente se muestra como imagen y no se puede
   modificar su DOM desde la página.
2. Si la manipulación local del SVG resulta frágil o insuficiente, pedir al
   servidor un SVG actualizado con la selección activa y volver a dibujarlo.
   El POST de selección ya existe para ejecutar el runtime de sesión; el realce
   visual por sí solo no necesita modificar ese contrato.

3. Como mejora futura del plan de validación, al seleccionar un paso de prueba
   realzar en el diagrama los nodos PORIS que intervienen en ese paso. Para ello
   cada paso necesitará conservar los CSID involucrados y el SVG deberá exponer
   una identidad estable asociada a cada nodo. Esto es independiente del
   recorrido DFS ya generado y todavía no está implementado.

La configuración de sesión utiliza IDs de los items y modos del modelo vigente;
si la estructura cambia entre peticiones, el runtime vuelve a validar y
reconciliar el estado guardado. El siguiente identificador estable que debe
definirse es el compartido entre XML del modelo y SVG para realce interactivo.

Desde la ficha de un ítem PORIS se puede abrir el visor en tres alcances: el
nodo contenedor más cercano dentro del proyecto actual, el proyecto y sus
subproyectos, o ese nodo y sus descendientes incluyendo subproyectos. Los
enlaces aparecen en el lateral de Redmine y también en la página del visor.
Esta integración usa los hooks nativos de Redmine y no requiere Additionals.

En la ficha del ítem, los enlaces del lateral cambian el modelo mostrado allí
mismo, sin navegar a la página completa del visor. Los `prCmd` definidos
directamente bajo un `prSys` o `prParam` aparecen como botones en la esquina
superior derecha de su contenedor. Por ahora son demostrativos: al pulsarlos
muestran `We launched <contenedor>.<comando>` y no ejecutan ninguna acción
externa; el aviso desaparece al siguiente clic o pulsación de tecla dentro del
formulario.

Los diagramas de cosmoSys usan las formas y colores PORIS: sistemas en blanco,
parámetros en cajas azul muy claro, modos en cápsula ámbar claro, valores en caja
`record` celeste y comandos en óvalo verde. En jerarquía y combinado se
muestran los nombres PORIS sin CSID ni nombre del padre. En los tres tipos de
diagrama, los valores usan
una caja `record` con el nombre y, si están definidos, mínimo, predeterminado y
máximo para flotantes; los valores de texto muestran su contenido predeterminado
cuando existe. En dependencias se añade el nombre del padre, como en el
Graphviz PORIS anterior. Los modos separan padre y modo en campos `record` en
los diagramas de dependencias y usan un margen interno moderado. En jerarquía y
combinado, el fondo azul muy claro cubre toda la caja de los parámetros
contenedores. En el jerárquico, los modos quedan encima de los valores y de los
contenedores hijos `prSys`/`prParam`, y los comandos comparten fila con los
modos, sin mostrar flechas: son anclas y restricciones de layout invisibles de
Graphviz, no relaciones del modelo.

En los diagramas de dependencias y combinados, las relaciones `precedes` PORIS
se dibujan en naranja (`#FF9900`), con trazo continuo y punta abierta en V
(`vee`), siguiendo el estilo de GraphML. Las relaciones de otros perfiles
conservan el estilo general de cosmoSys.

`porisViewer` es un proyecto reutilizable e independiente de este plugin. En el
workspace de desarrollo `csys` está disponible como submódulo hermano; no se
incluye aquí para evitar anidar un componente que otros proyectos también
utilizan. Este repositorio sí contiene el bundle compilado para que una
instalación del plugin sea autónoma. Para actualizarlo desde el workspace
`csys`, compila el bundle con:

```sh
./cosmosys_poris/scripts/build_viewer.sh
```

El comando lee el código fuente desde `csys/porisViewer/` y genera los bundles
en `cosmosys_poris/assets/javascripts/poris_viewer/`, junto con un fichero de
procedencia que registra el SHA exacto de `porisViewer`. Los assets generados
se versionan con el plugin y así el deploy puede fijar una única revisión
inmutable de `cosmosys_poris` sin instalar Node ni compilar durante el build de
Redmine.

## Licencia y contacto

Licencia: GNU GPL v3, coherente con cosmoSys (consulta [`LICENSE`](LICENSE)).

Contacto: [cosmosys@elporis.com](mailto:cosmosys@elporis.com).
