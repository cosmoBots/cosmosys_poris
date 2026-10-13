# cosmoSys PORIS

Plugin Redmine que integra modelos PORIS con
[cosmoSys](https://github.com/cosmoBots/cosmoSys). No depende de
`cosmosys_req`.

> **EXPERIMENTAL:** El plugin está en validación. Su integración en deploy es
> provisional, a la espera de una estrategia más modular; esta etiqueta no
> implica una limitación funcional conocida.

El perfil `poris` usa trackers PORIS con perfiles de ítem propios. Los
contenedores (`prSys`, `prParam`) usan la jerarquía de cosmoSys; los modos
(`prMode`) expresan alternativas mediante relaciones `blocks` hacia otros modos
o valores. `prValue` usa un solo tracker y `pr_value_kind` diferencia valores
enumerados (opción discreta), numéricos y de texto. Las etiquetas por ámbito se guardan como asociaciones, no
como campos personalizados.

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
Redmine; por ahora permite inspeccionar y ejercitar el modelo, pero no persiste
selecciones como una instancia PORIS. El editor asistido de subárboles y la
persistencia de instancias quedan para fases futuras.

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
`blocks` acotan los destinos descritos.

Cada vista empieza por un listado común de candidatos `csDatum`, deduplicado
por clave semántica, para que requisitos y validación puedan referirse al mismo
dato pendiente. Los IDs `R-XXXX` y `V-XXXX` son provisionales y se calculan para
la vista; no son IDs persistidos. Las vistas se generan síncronamente al abrir
la ficha, no escriben en Redmine y todavía son experimentales.

Los propósitos no definidos se presentan como notas informativas con su
referencia de valor `${poris.<CSID>.purpose.value}`, no con un `TBD` literal.
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

### Evolución prevista: configuración PORIS y realce del diagrama

El viewer ya mantiene en memoria el grafo PORIS parseado y el estado reactivo
de cada parámetro: modo actual, `prValue` activo y dato editable. Ese estado
permite ejercitar el modelo, pero todavía está distribuido entre los nodos
`PorisNode` y el store; no es una instancia PORIS canónica ni se persiste.

La evolución propuesta es:

1. Definir una representación serializable de configuración PORIS desde la
   raíz hasta las hojas. Debe identificar contenedores, modos elegidos,
   `prValue` activo y dato tipado, usando identidad PORIS estable y sin depender
   de etiquetas o del layout del diagrama.
2. Hacer que el formulario derive esa representación a partir del estado
   existente y comprobar los casos de cambio de modo, valores mixtos y rangos.
   En esta fase puede permanecer enteramente en el cliente.
3. Añadir al SVG del diagrama combinado identificadores estables que permitan
   asociar cada nodo gráfico con su elemento PORIS. El estado activo podría
   realzarse en el cliente sin regenerar Graphviz si el SVG se carga como DOM
   accesible (no como `<img>`); actualmente se muestra como imagen y no se puede
   modificar su DOM desde la página.
4. Si la manipulación local del SVG resulta frágil o insuficiente, pedir al
   servidor un SVG actualizado con la selección activa y volver a dibujarlo.
   El POST de la configuración completa se reserva para cuando haya un
   consumidor servidor o persistencia que lo justifique; el realce visual por
   sí solo no requiere enviarlo.

Antes de implementar la API se decidirá el identificador estable compartido
entre XML del modelo, configuración serializada y SVG, así como el momento de
envío y el tratamiento de configuraciones parciales. Esto no forma parte de la
integración actual ni del despliegue inmediato de PORIS.

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

Contacto: [txinto@elporis.com](mailto:txinto@elporis.com).
