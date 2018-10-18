    //array de jugadores
    var pjs = [];
    var powerUps = [];
    var lastTouchId;
    //array de pelotas
    var balls = [];

    //prototipo bola
    function ball (){
    	//ball.mySprite es el sprite de phaser, como siempre es el mismo lo determinamos desde aqui y añadimos las caracteristicas fisicas
		this.mySprite = game.add.sprite(game.world.centerX - game.world.centerX*0.5,game.world.centerY, 'pelota');
        this.mySprite.scale.setTo(0.8, 0.8);
        game.physics.enable(this.mySprite,Phaser.Physics.ARCADE);
        
        this.mySprite.body.setCircle(25);
        this.mySprite.body.velocity.setTo(250, 150);
        this.mySprite.body.collideWorldBounds = true;
        this.mySprite.body.bounce.setTo(1, 1);
	}

	//prototipo jugador
    function pj (_id,_sprite){
    
    //el jugador tiene una direccion y un id gracias al cual se determina que input tiene
    	this.dir = "NONE";
    	this.id = _id;
    //determinamos el input
	if (this.id == 0){
	this.mySprite = game.add.sprite(game.world.centerX - game.world.centerX*0.86, game.world.centerY*0.71, _sprite);
    this.mySprite.scale.setTo(0.5, 0.7);
    this.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    this.downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
                        }
    if (this.id == 1){
    this.mySprite = game.add.sprite(game.world.centerX + game.world.centerX*0.8, game.world.centerY*0.71, _sprite);
    this.mySprite.scale.setTo(0.5, 0.7);
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
    for(var i = 0; i<balls.length;i++){
    if (game.physics.arcade.collide(pjs[0].mySprite,balls[i].mySprite));
    lastTouchId = 0;
    if(game.physics.arcade.collide(pjs[1].mySprite,balls[i].mySprite));
    lastTouchId = 1;
    for(var e = 0; e<powerUps.length;e++){
    game.physics.arcade.collide(balls[i].mySprite,powerUps[i].mySprite);
    game.physics.arcade.collide(balls[i].mySprite,powerUps[i].mySprite);
    	}
	}
}


Ping.levelState = function(game) {

}

Ping.levelState.prototype = {

    
    preload: function() {
        
    },
    
    create: function() {
    	//añadimos a los arrays de jugador y bola sus correspondientes elementos
        pjs.push(new pj(0,'raqueta'));
        pjs.push(new pj(1,'raqueta'));
        addBall();
        console.log(balls.length);

        game.stage.backgroundColor = "#e39243";
        
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