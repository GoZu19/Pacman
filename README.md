# Pacman

# Puntos tratados en el texto y su implementación en el juego Pac-Man

## Uso de funciones de temporización para la animación del juego
En el juego Pac-Man se utilizan las funciones `setInterval()` y `clearInterval()` para controlar la animación del movimiento del fantasma y la transición al estado "asustado".

## Implementación de promesas
Para llevar el control de la puntuación del jugador, se utiliza una promesa que se resuelve cuando el Pac-Man come una pieza de comida y se suma el puntaje correspondiente.

## Uso de almacenamiento
El juego Pac-Man guarda la puntuación del jugador y el nivel actual en el almacenamiento local del navegador, utilizando la interfaz `localStorage`.

## Manejo de eventos
Para controlar el movimiento del personaje y permitir al usuario pausar el juego, se utilizan eventos y el método `stopPropagation()` para evitar que la pulsación de la tecla Esc afecte a otros elementos de la página.

## Mensaje al finalizar el juego
Al finalizar el juego Pac-Man, se muestra un mensaje al usuario informándole de su puntuación final y permitiéndole iniciar una nueva partida.