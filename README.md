# Documentación

# Título
### Manipulacion y gestión del DOM
#### Alumna: Beloqui Melina
# Descripción del proyecto
Este proyecto trata de una mini-aplicación web que puede crear, editar y eliminar tarjetas (“cards”) de producto dinámicamente manipulando el DOM con JavaScript.
# Instrucciones de instalación
1) Cloná o descargá el repositorio.
2) Asegurate de mantener la estructura de carpetas tal como está (index.html, css/style.css, js/app.js, assets/coca_cola.webp, fanta.webp, jugo.webp, sprite.jpg).
3) Abrí el archivo index.html en cualquier navegador (no se requiere servidor local ni instalación adicional)
# Uso 
## Crear tarjetas
1) Hacé clic en el ícono de "+" (círculo con signo más) para mostrar un formulario de nueva tarjeta
2) Completá los campos de imagen, título y descripción.
3) Presioná "Guardar" para agregar la tarjeta o "Cancelar" para descartarla.
## Editar tarjetas
1) Podés hacer doble clic sobre el título o la descripción para editarlos en línea.
2) También podés hacer clic en el ícono de lápiz de la tarjeta para abrir un formulario completo de edición
## Eliminar tarjetas
1) Hacé clic en el ícono de papelera para eliminar la tarjeta seleccionada.

# Estructura del proyecto (carpetas y archivos principales)
(dom-manipulation-beloqui)
├── index.html              
├── js/
│   └── app.js              
├── css/
│   └── style.css           
│── assets/
│   ├── coca_cola.webp
│   ├── fanta.webp
│   ├── jugo.webp
│   └── sprite.jpg

# Tecnologías utilizadas
- HTML5: Para la structura de la aplicación
- CSS3: Para el diseño y estilos visuales
- Javascript: Para la lógica de la aplicación y gestión del DOM
- Font Awesome: Utilizado para los iconos de las acciones: editar, eliminar y agregar.
# Decisiones de diseño
La manipulación del DOM se maneja completamente con JavaScript puro (sin frameworks). Algunas de las decisiones clave incluyen:

- addEventListener("DOMContentLoaded"): asegura que el script se ejecute una vez que el DOM esté completamente cargado.
- Modificación inline de texto mediante el reemplazo de elementos con input, y guardado automático al perder el foco o al presionar Enter.
- Uso de localStorage para persistir las tarjetas, con ayuda de JSON.stringify() y JSON.parse() para manejar los datos.
## Métodos clave utilizados:
- document.createElement() para generar dinámicamente tarjetas y formularios.
- element.replaceWith() para el modo de edición rápida
- cards.splice(i, 1) para eliminar tarjetas del array original.
- localStorage.setItem() y getItem() para persistencia local.
# Retos y aprendizajes
Uno de los principales desafíos fue implementar la edicion de varios campos en una tarjeta. Por lo tanto opté por un doble enfoque: edición inline rápida y edición mediante formulario completo. Esto implicó manejar eventos como blur (cuando se hace clic fuera de ese campo, o presionás Tab para pasar a otro, el input pierde el foco) y keypress (al apretar "enter") para asegurar que los datos se guardaran correctamente sin requerir demasiada interacción del usuario.
Además, trabajar con localStorage supuso aprender cómo almacenar y recuperar datos complejos en formato JSON. Fue importante garantizar que cada acción sobre las tarjetas (crear, editar, eliminar) se sincronizara correctamente con el almacenamiento local y que la función renderizar() siempre reflejara el estado actualizado del array.
# Capturas de pantalla o GIFs
