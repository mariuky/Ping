# PING
 *El 29 de Noviembre de 1972 salió al mercado el videojuego "Pong", diseñado por Allan Alcorn y distribuido por Atari. Considerado por muchos el primer videojuego de la historia, el Pong,ha llegado hasta nuestros días con exáctamente el mismo diseño que tuvo cuando fue concebido. Con "Ping" pretendemos reconceptualizar este clásico de la industria para adaptarlo a la actualidad sin perder la esencia del mismo.*
# Introducción

1. **Concepto del juego**  
  El juego se sustenta sobre las mismas bases que el Pong, dos jugadores compiten por sobrepasar el límite lateral del oponente golpeando la pelota con sus palas, las cuales se sitúan en los extremos limítrofes del campo de juego con un rango de movimiento vertical. El juego se va complicando conforme avanza la partida debido a la velocidad en incremento de la pelota así como a los handicaps que se pueden atribuir al oponente para dificultarle el control mediante efectos como cambios de tamaño de las palas, aparición de otra bola o utilización de escudos que te den otra oportunidad extra. 

2. **Género**  
  Arcade para 2 jugadores

3. **Publico objetivo**  
  Ping está dirigido a todos los jugadores que busquen redescubrir uno de los juegos más emblemáticos de la historia con un toque de  modernización con el que ampliar los horizontes jugables del Pong.
  


# Mecánicas de juego

1. **Jugabilidad**  
  Respecto a la jugabilidad del juego, nos basaremos en el juego original. Los dos jugadores podrán moverse hacia arriba y hacia abajo con el fin de golpear a la bola para que pase al campo enemigo. El jugador que consiga que la bola atraviese la pared lateral donde se encuentre su oponente, recibirá un punto. Quien alcance una puntuación de 10 puntos ganará la partida.  
Los jugadores tendrán forma de rectángulo al igual que en el Pong, y contarán con varios power-ups, los cuales aparecerán en el campo. Los jugadores podrán cogerlos para facilitar la partida a su favor. En resumen, la jugabilidad sería similar a la del juego base pero añadiendo una serie de novedades que queremos que lo haga más atractivo y divertido. En principio el juego contará con una sola pantalla y será 1 jugador contra 1 jugador.

2. **Flujo de juego**  
  * Introducción al juego  
       Lo primero que se verá al abrir el juego será un menú en el que habrá varios botones:  
     Si el jugador pulsa "Jugar", le llevará a una pantalla de personalización donde podrá elegir el color de la pala, en esta pantalla      habrá dos botones, uno para volver al menú y otro para empezar la partida.  
     Si el jugador pulsa "Créditos", el juego mostrará los nombres completos de las personas encargadas de su desarrollo. Habrá un botón      para volver al menú principal.  
     Si el jugador pulsa "Salir", la ventana en la que está el juego se cerrará.  
  * Jugando  
       Para iniciar una partida, el jugador tendrá que pulsar el botón Jugar, acto seguido el juego esperará a que ambos jugadores estén      listos. Cuando ámbos jugadores estén preparados, el juego dará comienzo.  
     La partida comenzará tras un breve tiempo en el que ámbos jugadores podrán prepararse, después podrán jugar con normalidad.  
     La bola comenzará a moverse en una dirección aleatoria y podrá rebotar solo en las paredes superior e inferior, ya que en las            laterales, al colisionar, se sumarán puntos al jugador correspondiente. Tras colisionar con las paredes laterales, la bola se            trasladará al centro del campo y acto seguido comenzará a moverse en una dirección aleatoria.  
  * Fin de partida  
       La partida finalizará cuando un jugador logre vencer al otro, lo cual se dará después de que alguien logre alcanzar 10 puntos. La        música parará y aparecerá una pantalla en la que se indica qué jugador ha ganado, solo habrá un botón para salir del juego de            momento.  

3. **Control de jugador**  
  El movimiento de los personajes, al igual que el juego original, está limitado a moverse hacia arriba o hacia abajo. Para ello se utilizarán dos teclas (flechas de dirección arriba y abajo) las cuales servirán para mover al jugador arriba y abajo respectivamente.  

4. **Interacción entre elementos**  
  Las colisiones se producirán de la siguiente manera:  
 * Jugador-Bola: La bola se moverá según la posición en la que ha colisionado con el jugador.  
 * Jugador-PowerUp: Al colisionar, el powerup desaparece y su efecto se verá reflejado en el jugador.  
 * Jugador-Escenario: El jugador no puede atravesar las paredes superior e inferior, así que al colisionar con ellas se frenará.  
 * Bola-Escenario: La bola, al colisionar con las paredes superior e inferior, rebotará. Al hacerlo con las paredes laterales               desaparecerá y aparecerá en el centro del campo.  
5. **Power Ups**  
Los Power Ups aparecen de manera aleatoria en el campo de juego, quedan afectados físicamente por el impacto de la bola y cuentan con un tiempo X que al llegar a 0 hace efectivo el power up para el jugador que haya conseguido acercarlo más al límite del oponente (si acaba en el campo derecho quien recibirá la ventaja será el jugador izquierdo).Todos los Power Ups duran un tiempo limitado.  

   Tipos de Power Ups:

   * Aumento del tamaño de la barra.
   * Escudo: aparece un escudo detrás del jugador que lo haya cogido y hace que este tenga una oportunidad más, ya que al chocar la bola    con el escudo rebotará una vez como si fuera una pared cualquiera.
   * Disminución del tamaño de la barra para el jugador contrario.
   * Aumento de la velocidad de la(s) bola(s).
   * Cambio de dirección vertical de la(s) bola(s).
  
6. **Matchmaking**  
   Respecto al algoritmo de matchmaking de nuestro juego, al entrar el primer jugador a la sala de espera, permanecerá allí hasta que un segundo jugador entre al juego y les lleve a ambos a la pantalla de juego donde empezará la partida.


# Interfaz
  Aquí se explican las distintas pantallas que aparecen en "Ping", explicando cada elemento que aparece en la GUI. Se agregan los bocetos de las diferentes pantallas. Estos estan abiertos a cambios si se considera necesario.
1. **Diagrama de flujo de pantallas**

      Aquí se muestran las pantallas y transiciones de "Ping".
![diagrama_fase2](https://user-images.githubusercontent.com/43405665/47620693-57cda780-daed-11e8-9cef-e1a509ef86d7.png)

2. **Menú principal**

   Pantalla del menú principal:
   ![menuprincipal](https://user-images.githubusercontent.com/43405665/48983421-e0406780-f0ee-11e8-86c9-2488be9c9767.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Botón de jugar, al pulsarlo te lleva al menú de personalización.
    * Botón de créditos, al pulsarlo te lleva a la pantalla de créditos
    * Botón de salir, al pulsarlo te lleva al sistema operativo.
    * Botón de pantalla completa, si no estaba a pantalla completa se agrandará y viceversa.
  
3. **Menú de personalización**

   Pantalla de personalización:
   ![personalizacion](https://user-images.githubusercontent.com/43405665/48983459-72487000-f0ef-11e8-9599-4669342e9b09.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Color, para elegir el color de la raqueta del jugador.
    * Botón de jugar, al pulsarlo te lleva la pantalla de juego.
    * Botón de volver, al pulsarlo te lleva la pantalla del menú principal.
    * Botón de pantalla completa, si no estaba a pantalla completa se agrandará y viceversa.
    
4. **Interfaz de usuario durante partida**

   Interfaz durante el juego:
   ![juego](https://user-images.githubusercontent.com/43405665/48983483-da975180-f0ef-11e8-9b10-9b0a828aa30b.png)
   Durante el desarrollo de la partida se podrán encontrar los siguientes elementos en pantalla:
    1. Raqueta del jugador 1.
    2. Raqueta del jugador 2.
    3. Power-ups.
    4. Puntuación (extremos superiores de la pantalla).
    5. Pelota.


5. **Interfaz de fin de partida**

   Pantalla de fin de partida:
   ![finpartida](https://user-images.githubusercontent.com/43405665/48983480-c5babe00-f0ef-11e8-836a-62d2250bf8d6.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Botón de salir, al pulsarlo te sales del juego.
6. **Creditos**

   Pantalla de creditos:
   ![creditos](https://user-images.githubusercontent.com/43405665/48983469-93a95c00-f0ef-11e8-9096-e3a932aa0928.png)
   En esta pantalla se encuentran los siguientes elementos:
    * Panel, con los nombres de los desarrolladores.
    * Botón de volver, al pulsarlo te lleva la pantalla del menú principal.
    * Botón de pantalla completa, si no estaba a pantalla completa se agrandará y viceversa.

6. **Sistema de comunicación (sin implementar todavía)**

   Hemos decidido que no incluiremos chat, ya que en un juego tan frenético como Ping, los jugadores no tendrían tiempo para chatear        entre sí durante la partida, lo cual le restaría importancia a esta función. Sin embargo vamos a incluir un sistema de comunicación      por emoticonos predefinidos, los cuales son más dinámicos y visuales. Los emoticonos aparecerán entre la puntuación y el nombre del      jugador, y cada jugador los podrá activar, en principio, mediante el teclado.

# Diagrama de clases de la aplicación (API Rest)
![diagramaclases](https://user-images.githubusercontent.com/43405665/49343396-bcd66900-f668-11e8-8007-8d6ddb383292.png)

# Instrucciones de ejecución de la aplicación
* Abrir la aplicación Spring Tool Suite y abrir el proyecto en la misma.
* Click derecho en App.java y elegir “Run as Java Application”.
* Si todo ha ido bien, lo siguiente es abrir el navegador Google Chrome y escribir en la URL “localhost:8080” y debería abrirse el juego.

# Arte  
El estilo artístico evoca a los clásicos arcade como Arkanoid. Sobrio y bidimensional pero con una identidad
definida dando la información necesaria a los jugadores sin llegar a enturbiar el entorno de juego. 

# Sonido  
La música pertenece al género chiptune, característico de las consolas de la década de los 90, en concordancia con el nostálgico estilo visual. Se ha incluido un tema original que se reproducirá al empezar la partida y parará cuando haya ganado algún jugador.

# Autoría
Mario Peña Jiménez m.penaj.2018@alumnos.urjc.es  
Rafael Sauceda Velasco  r.sauceda.2016@alumnos.urjc.es  
Jaime Bárzano Enrique j.barzano.2016@alumnos.urjc.es
