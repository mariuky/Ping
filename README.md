# PING
 *El 29 de Noviembre de 1972 salió al mercado el videojuego "Pong", diseñado por Allan Alcorn y distribuido por Atari. Considerado por muchos el primer videojuego de la historia, el Pong,ha llegado hasta nuestros días con exáctamente el mismo diseño que tuvo cuando fue concebido. Con "Ping" pretendemos reconceptualizar este clásico de la industria para adaptarlo a la actualidad sin perder la esencia del mismo.*
# Introduccion

1. **Concepto del juego**  
  El juego se sustenta sobre las mismas bases que el Pong, dos jugadores compiten por sobrepasar el límite lateral del oponente golpeando la pelota con sus palas, las cuales se sitúan en los extremos limítrofes del campo de juego con un rango de movimiento vertical. El juego se va complicando conforme avanza la partida debido a la velocidad en incremento de la pelota así como a los handicaps que se pueden atribuir al oponente para dificultarle el control mediante efectos como controles invertidos, pala rotatoria o tamaño reducido de la misma entre otros. 

2. **Género**  
  Arcade para 2 jugadores

3. **Publico objetivo**  
  Ping está dirigido a todos los jugadores que busquen redescubrir uno de los juegos más emblemáticos de la historia con un toque de  modernización con el que ampliar los horizontes jugables del Pong.
  


# Mecánicas de juego

1. **Jugabilidad**  
  Respecto a la jugabilidad del juego, nos basaremos en el juego original. Los dos jugadores podrán moverse hacia arriba y hacia abajo con el fin de golpear a la bola para que pase al campo enemigo. El jugador que consiga que la bola atraviese la pared lateral donde se encuentre su oponente, recibirá una puntuación. Quien alcance una puntuación concreta ganará la partida.  
Los jugadores tendrán forma de rectángulo al igual que en el Pong, y contarán con varios power-ups, los cuales aparecerán en el campo. Los jugadores podrán cogerlos para facilitar la partida a su favor. En resumen, la jugabilidad sería similar a la del juego base pero añadiendo una serie de novedades que queremos que lo haga más atractivo y divertido. En principio el juego contará con una sola pantalla y será 1 jugador contra 1 jugador.  

2. **Flujo de juego**  
  * Introducción al juego  
       Lo primero que se verá nada más abrir el juego será un menú en el que habrá varios botones:  
     Si el jugador pulsa "Jugar", el juego empezará a gestionar la partida para su inicio.  
     Si el jugador pulsa "Créditos", el juego mostrará los nombres completos de las personas encargadas de su desarrollo. Habrá un botón      para volver al menú principal.  
     Si el jugador pulsa "Salir", la ventana en la que está el juego se cerrará.  
  * Jugando  
       Para iniciar una partida, el jugador tendrá que pulsar el botón Jugar, acto seguido el juego esperará a que ambos jugadores estén      listos. Cuando ámbos jugadores estén preparados, el juego dará comienzo.  
     La partida comenzará tras un breve tiempo en el que ámbos jugadores podrán prepararse, después podrán jugar con normalidad.  
     La bola comenzará a moverse en una dirección aleatoria y podrá rebotar solo en las paredes superior e inferior, ya que en las            laterales, al colisionar, se sumarán puntos al jugador correspondiente. Tras colisionar con las paredes laterales, la bola se            trasladará al centro del campo y acto seguido comenzará a moverse en una dirección aleatoria.  
  * Fin de partida  
       La partida finalizará cuando un jugador logre vencer al otro, lo cual se dará después de que alguien logre alcanzar una                puntuación determinada. La música parará y aparecerán unos botones para volver al menú principal y para volver a jugar.  

3. **Control de jugador**  
  El movimiento de los personajes, al igual que el juego original, está limitado a moverse hacia arriba o hacia abajo. Para ello se utilizarán dos teclas (en principio W, S) las cuales servirán para mover al jugador arriba y abajo respectivamente.  

4. **Interacción entre elementos**  
  Las colisiones se producirán de la siguiente manera:  
 * Jugador-Bola: La bola se moverá según la posición en la que ha colisionado con el jugador.  
 * Jugador-PowerUp: Al colisionar, el powerup desaparece y su efecto se verá reflejado en el jugador.  
 * Jugador-Escenario: El jugador no puede atravesar las paredes superior e inferior, así que al colisionar con ellas se frenará.  
 * Bola-Escenario: La bola, al colisionar con las paredes superior e inferior, rebotará. Al hacerlo con las paredes laterales               desaparecerá y aparecerá en el centro del campo.  
5. **Power Ups!**  
Los Power Ups aparecen de manera aleatoria en el campo de juego, quedan afectados físicamente por el impacto de la bola y cuentan con un tiempo X que al llegar a 0 hace efectivo el power up para el jugador que haya conseguido acercarlo más al límite del oponente (si acaba en el campo derecho quien recibirá la ventaja será el jugador izquierdo).Todos los Power Ups duran un tiempo limitado.  

Tipos de Power Ups:

 **Positivos**
 * Aumento del tamaño de la barra.
 * "Disparo congelante": Tras una cuenta atrás de 5 segundos se dispara un proyectil desde el centro de la raqueta que si impacta al     jugador rival deja su raqueta inmovil durante 1 segundo.

 **Negativos**
 * Controles invertidos
 * Velocidad de barra menor
 * Barra giratoria.
 * Visión reducida de la seccion del campo del rival.
 * Obstáculos en el campo de juego.



# Interfaz
  Aquí se explican las distintas pantallas que aparecen en "Ping", explicando cada elemento que aparece en la GUI. Se agregan los bocetos de las diferentes pantallas. Estos estan abiertos a cambios si se considera necesario.
1. **Diagrama de flujo de pantallas**

      Aquí se muestran las pantallas y transiciones de "Ping".
![diagrama](https://user-images.githubusercontent.com/43405647/45929656-1af21c00-bf55-11e8-8300-f0f32e789c5b.png)

2. **Menú principal**

   Boceto del menú principal:
   ![menu](https://user-images.githubusercontent.com/43405647/45929865-e338a380-bf57-11e8-903b-911c6ef1d29a.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Botón de jugar, al pulsarlo te lleva al menú de jugador.
    * Botón de créditos, al pulsarlo te lleva a la pantalla de créditos
    * Botón de salir, al pulsarlo te lleva al sistema operativo.
  
3. **Menú del nombre del jugador**

   Boceto del menú del jugador:
   ![jugador](https://user-images.githubusercontent.com/43405647/45929876-fb102780-bf57-11e8-9c6f-0929157dcd1e.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Espacio para texto, para introducir el nombre del jugador
    * Color, para elegir el color de la raqueta del jugador.
    * Botón de jugar, al pulsarlo te lleva la pantalla de juego.
    * Botón de volver, al pulsarlo te lleva la pantalla del menú principal.
    
4. **Interfaz de usuario durante partida**

   Boceto del la interfaz durante el juego:
   ![pong](https://user-images.githubusercontent.com/43405647/45929981-4b3bb980-bf59-11e8-9fac-06adec54a390.png)
   En esta pantalla se encuentran los siguientes elementos:
    1. Nombre del jugador 1.
    2. Nombre del jugador 2.
    3. Power-ups del jugador 1.
    4. Power-ups del jugador 2.
    5. Puntuación.
    6. Raqueta del jugador 1.
    7. Raqueta del jugador 2.
    8. Power-up.
    9. Pelota.


5. **Interfaz de fin de partida**

   Boceto de la pantalla de fin de partida:
   ![fin](https://user-images.githubusercontent.com/43405647/45929886-2135c780-bf58-11e8-85eb-e22c3f12d175.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Botón de volver a jugar, al pulsarlo te lleva la pantalla de juego.
    * Botón de menú principal, al pulsarlo te lleva la pantalla del menú principal.
6. **Creditos**

   Boceto de la pantalla de creditos:
   ![creditos](https://user-images.githubusercontent.com/43405647/45929882-1418d880-bf58-11e8-98d8-f328adcee8d2.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Panel, con los nombres del los desarrolladores.
    * Botón de vovler, al pulsarlo te lleva la pantalla del menú principal.


# Arte  
El estilo artístico evoca a los clásicos arcade como Arkanoid. Sobrio y bidimensional pero con una identidad
definida dando la información necesaria a los jugadores sin llegar a enturbiar el entorno de juego. 

# Sonido  
Tanto música como efectos de sonido pertenecen al género chiptune, característico de las consolas de la década de los 90, en concordancia con el nostálgico estilo visual.

# Autoría
Mario Peña Jiménez m.penaj.2018@alumnos.urjc.es  
Rafael Sauceda Velasco  r.sauceda.2016@alumnos.urjc.es  
Jaime Bárzano Enrique j.barzano.2016@alumnos.urjc.es

