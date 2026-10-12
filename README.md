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
- El bundle JavaScript de `porisViewer`, generado durante el empaquetado o el
  despliegue.

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
utilizan. La compilación de producción toma una revisión fijada de
`porisViewer` y genera el bundle dentro del plugin. Para desarrollo local desde
el workspace `csys`, compila el bundle con:

```sh
./cosmosys_poris/scripts/build_viewer.sh
```

El comando lee el código fuente desde `csys/porisViewer/` y genera los bundles
en `cosmosys_poris/assets/javascripts/poris_viewer/`, que se ignoran en Git.
La imagen oficial de deploy genera esos assets durante el build y fija por SHA
tanto este plugin como `porisViewer`.

## Licencia y contacto

Licencia: GNU GPL v3, coherente con cosmoSys (consulta [`LICENSE`](LICENSE)).

Contacto: [txinto@elporis.com](mailto:txinto@elporis.com).
