//cargar los sonidos de pacman
//cargar el sonido de que inicia
const musicapacmanstart = new Audio();
musicapacmanstart.src ="audio/pacmanstart.mp3";
musicapacmanstart.volume = 0.1;

//cargar el sonido de muerte 
const musicapacmandead =new Audio();
musicapacmandead.src ="audio/pacmandead.mp3";//le paso la ruta donde tengo el sonido
musicapacmandead.volume = 0.1;//coloco el volumen deseado en principio lo puse así por que desde mi pc lo oigo muy fuerte, pero se puede resolver colocando un especie selector de volumen pero no me dio más tiempo para desarrollar
//los valores de los volumenes va entre 0 a 1 pero con decimales es decir 0.5 es el mitad del sonido 

//cargar el sonido de victoria 
const musicapacmanwin =new Audio();
musicapacmanwin.src ="audio/pacmanwin.mp3";
musicapacmanwin.volume = 0.1;
