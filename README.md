# Pacman

# Puntos tratados en el texto y su implementación en el juego Pac-Man

## Uso de funciones de temporización para la animación del juego
En el juego Pac-Man se utilizan las funciones `setInterval()` y `clearInterval()` para controlar la animación del movimiento del fantasma, para que vaya moviendose cada cierto tiempo también se ha puesto como nivel de dificultad dependiendo el tiempo del intervalo.

## Implementación de promesas
Para llevar el control de la puntuación del jugador, se utiliza una promesa que se resuelve cuando el Pac-Man come una pieza de comida y se suma el puntaje correspondiente y además para mostrar el historial ya que tiene que consultar al localstorage la puntuación y es entonces utilizo promesas para que vayan a consultarlo sin que haya problema la carga de la página y lograr así una carga buena de datos sobre el historial de puntuación.

## Uso de almacenamiento
El juego Pac-Man guarda la puntuación del jugador y el nivel actual en el almacenamiento local del navegador, utilizando la interfaz `localStorage` se ha utilizado para guardar los datos de la puntuación pero también la fecha de la puntuación para que se vea mucho más bonito está en el ficheor donde dice `localstoratge`.

## Manejo de eventos
Para controlar el movimiento del personaje y permitir al usuario pausar el juego, se utilizan eventos y el método `stopPropagation()` para evitar que la pulsación de la tecla Esc afecte a otros elementos de la página también se utiliza eventos sobre el documento para saber si hizo click sobre el canvas para para que no permita el uso de scroll con un  `defaultPrevent()` y luego un `stopPropagation()`.

## Mensaje al finalizar el juego
Al finalizar el juego Pac-Man, se muestra un mensaje al usuario informándole de su puntuación final y permitiéndole iniciar una nueva partida o también para regresar el menú, también se ha implementado un `menu de pausa` donde se pregunta si quiere reanudar la partida o quiere salir al menú principal si sale se guardará automáticamente la partida y además preguntará al usuario con un toast si quiere de verdad salir del juego `(el uso del toast y los menús y casí todo el juego a nivel grafico es utilizando boostrap para hacerlo mucho más visual excepto el canvas)`.