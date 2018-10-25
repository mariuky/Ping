//array de jugadores
var pjs = [];
var powerUps = [];
var lastTouchId;
    
//array de pelotas
var balls = [];
    
//array de porterias
var porterias = [];

//Puntucion
var puntos_pj1 = "0";
var puntos_pj2 = "0";
//tipo de letra
var style = { font: "30px Arial", fill: "#ff0044", align: "center" };
//Que bola ha tocado el power up
var cualBola = 0;
var velocidadx = 0;
var velocidady = 0;





//prototipo porteria
function porteria (_id){
    this.escudo=false;
    //Porteria del jugador 1 o 2
    if(_id == 0){
        this.mySprite = game.add.sprite(0,0, 'porteria');
    }else if(_id == 1){
        this.mySprite = game.add.sprite(730,0, 'porteria');
    }
    game.physics.enable(this.mySprite,Phaser.Physics.ARCADE);
    this.mySprite.enableBody = true;
    this.mySprite.body.immovable = true;
    //Invisible
    this.mySprite.visible = false;
}
function powerUp(_id){
    	this.pjAfected = lastTouchId;
        //Para saber si hay algun power up activo
        this.active = false;
        this.id = _id;
    	if (this.id == 0)
    	   this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
        if(this.id == 1)
           this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
        if(this.id == 2)
           this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
       if(this.id == 3)
           this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
       if(this.id == 4)
           this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
       if(this.id == 5)
           this.mySprite = game.add.sprite(game.rnd.integerInRange(100, 700) ,game.rnd.integerInRange(100, 500), 'cat');
        game.physics.enable(this.mySprite,Phaser.Physics.ARCADE);
        
    }
powerUp.prototype.activate = function(){
    this.active=true;
    this.pjAfected = lastTouchId;
    if (this.id == 0){
    	pjs[this.pjAfected].mySprite.scale.setTo(0.5,1);
        //desactivar a los 15 segundos
        game.time.events.add(Phaser.Timer.SECOND * 15, this.deActivate, this);
    }
    if (this.id == 1){
        if(lastTouchId == 0)
            this.pjAfected=1;
        if(lastTouchId == 1)
            this.pjAfected = 0;
        pjs[this.pjAfected].mySprite.scale.setTo(0.5,0.25);
        //desactivar a los 15 segundos
        game.time.events.add(Phaser.Timer.SECOND * 15, this.deActivate, this);
    }
    if (this.id == 2){
        addBall();
        velocidadx = balls[cualBola].mySprite.body.velocity.x;
        velocidady = balls[cualBola].mySprite.body.velocity.y;
        balls[balls.length-1].mySprite.body.velocity.setTo(velocidadx, velocidady);
    }
    if (this.id == 3){
        if(balls[cualBola].fastball==false){
            balls[cualBola].fastball=true;
            balls[cualBola].mySprite.body.velocity.x *= 2;
            balls[cualBola].mySprite.body.velocity.y *= 2;    
        }
    }
    if (this.id == 4){
        balls[cualBola].mySprite.body.velocity.y = -balls[cualBola].mySprite.body.velocity.y; 
    }
    if (this.id == 5){
        porterias[this.pjAfected].escudo = true;
        porterias[this.pjAfected].mySprite.visible = true;
        game.time.events.add(Phaser.Timer.SECOND * 40, this.deActivate, this); 
    }
}
powerUp.prototype.deActivate = function(){
    if ((this.id == 0) || (this.id == 1)){
    	pjs[this.pjAfected].mySprite.scale.setTo(0.5,0.5);
        this.active=false;
    }
    if(this.id == 5){
        porterias[this.pjAfected].escudo=false;
        porterias[this.pjAfected].mySprite.visible=false; 
    }
}

//prototipo bola
function ball (){
    this.fastball = false;
        	
    //ball.mySprite es el sprite de phaser, como siempre es el mismo lo determinamos desde aqui y añadimos las caracteristicas fisicas
	this.mySprite = game.add.sprite(game.world.centerX,game.world.centerY, 'pelota');
    this.mySprite.scale.setTo(0.5, 0.5);
    game.physics.enable(this.mySprite,Phaser.Physics.ARCADE);
    
    this.mySprite.body.setCircle(25);
    this.mySprite.body.collideWorldBounds = true;
    this.mySprite.body.bounce.setTo(1, 1);
}

	//prototipo jugador
function pj (_id,_sprite){
    
    //el jugador tiene una direccion y un id gracias al cual se determina que input tiene
    this.dir = "NONE";
    this.id = _id;
    this.points = 0;
    //determinamos el input
	if (this.id == 0){
	    this.mySprite = game.add.sprite(game.world.centerX - game.world.centerX*0.86, game.world.centerY*0.71, _sprite);
        this.mySprite.scale.setTo(0.5, 0.5);
        this.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
        this.downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    }
    
    if (this.id == 1){
        this.mySprite = game.add.sprite(game.world.centerX + game.world.centerX*0.8, game.world.centerY*0.71, _sprite);
        this.mySprite.scale.setTo(0.5, 0.5);
        this.upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
        this.downKey = game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
    }

    //establecemos las propiedades fisicas
    game.physics.enable(this.mySprite,Phaser.Physics.ARCADE);
    this.mySprite.enableBody = true;
    this.mySprite.body.immovable = true;
    this.mySprite.body.collideWorldBounds = true;
}
    //funcion del jugador que nos determina si se ha pulsado un boton de movimiento y en funcion de eso cambia la direccion
pj.prototype.handleEvents = function(){

    this.dir = "NONE";

    if(this.upKey.isDown)
        this.dir = "UP";
    if(this.downKey.isDown)
        this.dir = "DOWN";
    
    this.move();
}
	//funcion del jugador que aplica la direccion actual para mover al mismo
pj.prototype.move = function () {

    if (this.dir == "UP")
        this.mySprite.body.velocity.y = -500;  
    if (this.dir == "DOWN")
        this.mySprite.body.velocity.y = 500;
    if (this.dir == "NONE")
        this.mySprite.body.velocity.y = 0;
    this.mySprite.body.velocity.x = 0;
}

//funcion para añadir una bola al campo de juego
addBall = function(){
	balls.push(new ball());
}

//revisamos las colisiones
reviewCollisions = function(){
	//primero revisamos la colision de la bola con el jugador para poder revisar quien ha sido el ultimo en tocar la bola
	//En caso de conseguir un powerUp se revisa el quien ha sido el ultimo jugador en tocar la pelota (el que lo consigue)
    //Tambien revisamos cuando la bola toca la porteria para añadir puntos y resetear el juego
    for(var i = 0; i<balls.length; i++){
       
        if (game.physics.arcade.collide(pjs[0].mySprite, balls[i].mySprite)){
            lastTouchId = 0;
            if(balls[i].fastball==true){
                balls[i].fastball=false;
                balls[i].mySprite.body.velocity.x /= 2;
                balls[i].mySprite.body.velocity.y /= 2;
            }
        }
        if(game.physics.arcade.collide(pjs[1].mySprite, balls[i].mySprite)){
            lastTouchId = 1;
            if(balls[i].fastball==true){
                balls[i].fastball=false;
                balls[i].mySprite.body.velocity.x /= 2;
                balls[i].mySprite.body.velocity.y /= 2;
            }
        }
        if(game.physics.arcade.collide(porterias[0].mySprite, balls[i].mySprite)){
            if(porterias[0].escudo==true){
                porterias[0].escudo=false;
                porterias[0].mySprite.visible=false;
            }else{
                pjs[1].points ++;
                reset();
                break;
            }
        }
        if(game.physics.arcade.collide(porterias[1].mySprite, balls[i].mySprite)){
            if(porterias[1].escudo==true){
                porterias[1].escudo=false;
                porterias[1].mySprite.visible=false;
            }else{
                pjs[0].points ++;
                reset();
                break;
            }
        }
        for(var e = 0; e<powerUps.length;e++){
            if(game.physics.arcade.overlap(balls[i].mySprite,powerUps[e].mySprite)){
                powerUps[e].activate();
                powerUps[e].mySprite.destroy();
                cualBola=i;
                break;
            }
        }
        
    }
}

//Spawnear power-ups
spawnPowerUp = function(){
    powerUps.push(new powerUp(game.rnd.integerInRange(0, 5)));
}
//Resetea el juego. Lleva la bola al centro y la para
function reset() {
    cualBola=0;
    for(var a = balls.length; a>1;a--){
        balls.length;
        balls[a-1].mySprite.destroy();
        balls.pop();
        balls.length;
    }
    balls[0].mySprite.body.velocity.setTo(0, 0);
    balls[0].mySprite.position.setTo(game.world.centerX, game.world.centerY)   
    //En tres segundos va a la funcion go
    game.time.events.add(Phaser.Timer.SECOND * 3, go, this);
    //Destruir los powerUps que hay en pantalla y desactivar los activos
    for(var e = powerUps.length; e>0 ;e--){
        if(powerUps[e-1].active){
            powerUps[e-1].deActivate();
        }
        powerUps[e-1].mySprite.destroy();
        powerUps.pop();
    }
    porterias[0].escudo=false;
    porterias[1].escudo=false;
    porterias[0].mySprite.visible=false;
    porterias[1].mySprite.visible=false;
    //Se destruye el texto anterior y se crea uno nuevo
    pj1_puntos.destroy();
    pj2_puntos.destroy();
    pj1_puntos = game.add.text(10, 10, pjs[0].points, style);
    pj2_puntos = game.add.text(750, 10, pjs[1].points, style);
}
//Se pone de nuevo en movimiento la bola
function go(){
    balls[0].mySprite.body.velocity.setTo(350, game.rnd.integerInRange(-150, 150))
}



Ping.levelState = function(game) {

}

Ping.levelState.prototype = {

    
    preload: function() {
        //Dependiendo de que color hallamos elegido asi sera nuestra raqueta. Por defecto es negra.
        game.load.image('raqueta', color);
    },
    
    create: function() {
    	//añadimos a los arrays de jugador y bola sus correspondientes elementos
        pjs.push(new pj(0,'raqueta'));
        pjs.push(new pj(1,'raqueta'));
        addBall();

        //añadimos las porterias
        porterias.push(new porteria(0));
        porterias.push(new porteria(1));
        game.stage.backgroundColor = "#e39243";
        //Se crea el texto de las puntuaciones
        pj1_puntos = game.add.text(10, 10, pjs[0].points, style);
        pj2_puntos = game.add.text(750, 10, pjs[1].points, style);
        game.time.events.add(Phaser.Timer.SECOND * 3, go, this);
        //Loop que crea cada cierto tiempo un power up
        game.time.events.loop(Phaser.Timer.SECOND * game.rnd.integerInRange(10, 20), spawnPowerUp, this);
    },

    update: function() {
        //revisamos las colisiones
        reviewCollisions();
        

        
        //llamamos al update de nuestros jugadores
        pjs[0].handleEvents();
        pjs[1].handleEvents();
    
    }
}












/*



ball = function(game){

    Phaser.Sprite.call(this,game,game.world.centerX,game.world.centerY,'pelota',0);
    this.scale.setTo(0.8, 0.8); //escala el sprite pelota (por debajo de 1, si no se ve borrosa)
    //Fisicas pelota:
    game.physics.enable(this,Phaser.Physics.ARCADE);
    this.body.setCircle(25);
    this.body.velocity.setTo(200, 100);
    this.body.collideWorldBounds = true; //para que colisione con el mundo
    this.body.bounce.setTo(1, 1); //rozamiento al colisionar, (1, 1) es sin rozamiento
}

ball.prototype = Object.create(Phaser.Sprite.prototype);

ball.constructor = ball;


gameManager = function(game, _numplayers) {
    var myGame = game;
    var numplayers = _numplayers;
    var myplayers = [];
    var pelota;
}

gameManager.constructor = gameManager;

gameManager.prototype = {
    
    addPlayer: function(_player) {

        this.myplayers.push(_player);
   

    },
    addPelota: function(){
        pelota = new ball(this.myGame)

    },
   update: function() {
                var i;
    for (i = 0; i < this.numplayers; i++) 
        this.myplayers[i].handleEvents();
    }    

}

player = function(game,sprite,_id){

   	Phaser.Sprite.call(this,game,_id*game.world.width,game.world.centerY,sprite,0);
    game.physics.enable(this,Phaser.Physics.ARCADE);
    
    var id = _id;
    var dir;
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    this.body.enable = true;
    this.body.gravity.x = 0;
    this.body.gravity.y = 0;

    if (this.id = 0){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
                    }
    if (this.id = 1){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
					}
}
player.prototype = Object.create(Phaser.Sprite.prototype);

player.constructor = player;

player.prototype.handleEvents = function(){

    this.dir = NONE;

    if(upKey.isDown)
          this.dir = UP;
    
     if(downKey.isDown)
          this.dir = DOWN;
    
    if(leftKey.isDown)
          this.dir = NONE;
    
     if(rightKey.isDown)
          this.dir = NONE;

      this.move();
}

player.prototype.move = function () {

        if (this.dir = UP)
            this.sprite.body.velocity.y = 500;
        if (this.dir = DOWN)
            this.sprite.body.velocity.y = -500;
        if (this.dir = NONE)
            this.sprite.body.velocity.y = 0;
    }*/