//array de jugadores
var pjs = [];
//array de power ups
var powerUps = [];
var lastTouchId=0;
var upgradeTimer;
//VAriable para el sestado del juego
var gameState;
//array de pelotas
var balls = [];
//velocidad inicial de la bola
var velBolaX;

//array de porterias
var porterias = [];

//Puntucion
var puntos_pj1 = "0";
var puntos_pj2 = "0";
//tipo de letra
var style = { font: "30px Arial", fill: "#ffffff", align: "center" };
//Que bola ha tocado el power up
var cualBola = 0;
var velocidadx = 0;
var velocidady = 0;
var music;
var resetear=0;
var sounds;

var winner;


//prototipo porteria
function porteria(_id) {
    this.escudo = false;
    //Porteria del jugador 1 o 2
    if (_id == 0) {
        this.mySprite = game.add.sprite(-10, 0, 'porteria');
    } else if (_id == 1) {
        this.mySprite = game.add.sprite(740, 0, 'porteria');
    }
    game.physics.enable(this.mySprite, Phaser.Physics.ARCADE);
    this.mySprite.enableBody = true;
    this.mySprite.body.immovable = true;
    this.mySprite.visible = false;
}
//Definimos los identificadores de los distintos power ups del juego y les asignamos un sprite
function powerUp(_id) {
    this.pjAfected = lastTouchId;
    //Para saber si hay algun power up activo
    this.active = false;
    this.id = _id;
    if (this.id == 0){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp0');
    }
    else if (this.id == 1){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp1');
    }
    else if (this.id == 2){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp2');
    }
    else if (this.id == 3){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp3');
    }
    else if (this.id == 4){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp4');
    }
    else if (this.id == 5){
        this.mySprite = game.add.sprite(game.rnd.integerInRange(150, 650), game.rnd.integerInRange(100, 500), 'powerUp5');
    }
    this.mySprite.scale.setTo(0.38, 0.38);
    game.physics.enable(this.mySprite, Phaser.Physics.ARCADE);

}

//Definimos las mecánicas de los distintos power ups segín su identificador (id)
powerUp.prototype.activate = function () {

    this.active = true;
    this.pjAfected = lastTouchId;
    if (this.id == 0) { //Power up 0: dobla tamaño vertical del jugador que lo coge
        pjs[this.pjAfected].mySprite.scale.setTo(0.5, 1);
        pjs[this.pjAfected].halfSpritePlayer = 125; //para las colisiones

        //desactivar a los 15 segundos
        game.time.events.add(Phaser.Timer.SECOND * 15, this.deActivate, this);
    }
    if (this.id == 1) { //Power up 1: disminuye verticalmente a la mitad al jugador contrario al que lo coge
        if (lastTouchId == 0)
            this.pjAfected = 1;
        if (lastTouchId == 1)
            this.pjAfected = 0;
        pjs[this.pjAfected].mySprite.scale.setTo(0.5, 0.25);
        pjs[this.pjAfected].halfSpritePlayer = 31.25; //para las colisiones
        //desactivar a los 15 segundos
        game.time.events.add(Phaser.Timer.SECOND * 15, this.deActivate, this);
    }
    if (this.id == 2) { //Power up 2: añade una segunda bola al escenario
        addBall();
        velocidadx = balls[cualBola].mySprite.body.velocity.x;
        velocidady = balls[cualBola].mySprite.body.velocity.y;
        balls[balls.length - 1].mySprite.body.velocity.setTo(velocidadx, velocidady);
    }
    if (this.id == 3) { //Power up 3: la(s) bola(s) va(n) el doble de rápido
        if (balls[cualBola].fastball == false) {
            balls[cualBola].fastball = true;
            balls[cualBola].mySprite.body.velocity.x *= 2;
            balls[cualBola].mySprite.body.velocity.y *= 2;
        }
    }
    if (this.id == 4) { //Power up 4: La bola cambia su dirección vertical
        balls[cualBola].mySprite.body.velocity.y = -balls[cualBola].mySprite.body.velocity.y;
    }
    if (this.id == 5) { //Power up 5: Añade un escudo en la portería del jugador que lo coge y le da una oportunidad extra
        porterias[this.pjAfected].escudo = true;
        porterias[this.pjAfected].mySprite.visible = true;
        game.time.events.add(Phaser.Timer.SECOND * 40, this.deActivate, this);
    }
}
//Desactiva los Power ups activos actualmente
powerUp.prototype.deActivate = function () {
    if ((this.id == 0) || (this.id == 1)) {
        pjs[this.pjAfected].mySprite.scale.setTo(0.5, 0.5);
        pjs[this.pjAfected].halfSpritePlayer = 62.5; //para las colisiones
        this.active = false;
    }
    if (this.id == 5) {
        porterias[this.pjAfected].escudo = false;
        porterias[this.pjAfected].mySprite.visible = false;
    }
}

//prototipo bola
function ball() {

    this.fastball = false;
    this.halfSpriteBall = 12.5; //mitad de lo que mide en y el sprite de la bola

    //ball.mySprite es el sprite de phaser, como siempre es el mismo lo determinamos desde aqui y añadimos las caracteristicas fisicas
    this.mySprite = game.add.sprite(game.world.centerX, game.world.centerY, 'pelota');
    this.mySprite.scale.setTo(0.5, 0.5);
    this.mySprite.anchor.set(0.5);
    game.physics.enable(this.mySprite, Phaser.Physics.ARCADE);

    this.mySprite.body.setCircle(25);

    this.mySprite.body.collideWorldBounds = true;
    this.mySprite.body.bounce.setTo(1, 1);

    //Efectos de partículas de la bola
    this.particleEmitter = game.add.emitter(this.mySprite.body.x, this.mySprite.body.y, 100);
    this.particleEmitter.makeParticles('pelota');
    this.particleEmitter.setAlpha(0.6, 0, 150);
    this.particleEmitter.setSize(1, 1);
    this.particleEmitter.setScale(0.5, 0.5, 0.5, 0.5);
    this.particleEmitter.setXSpeed(0, 0);
    this.particleEmitter.setYSpeed(0, 0);
}

//prototipo jugador
function pj(_id, _sprite) {
    this.upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
    this.downKey = game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
    //el jugador tiene una direccion y un id gracias al cual se determina que input tiene
    this.dir = "NONE";
    this.id = _id;
    this.points = 5;
    this.velo = 500;
    this.halfSpritePlayer = 62.5;//mitad de lo que mide en y el sprite del jugador
    //determinamos el input
    if (this.id == 0) {
        this.mySprite = game.add.sprite(game.world.centerX - game.world.centerX * 0.83, game.world.centerY, _sprite);
        this.mySprite.scale.setTo(0.5, 0.5);
        this.mySprite.anchor.setTo(0.5, 0.5);
        
    }

    if (this.id == 1) {
        this.mySprite = game.add.sprite(game.world.centerX + game.world.centerX * 0.83, game.world.centerY, _sprite);
        this.mySprite.scale.setTo(0.5, 0.5);
        this.mySprite.anchor.setTo(0.5, 0.5);
        
    }

    //establecemos las propiedades fisicas
    game.physics.enable(this.mySprite, Phaser.Physics.ARCADE);
    this.mySprite.enableBody = true;
    this.mySprite.body.immovable = true;
    this.mySprite.body.collideWorldBounds = true;
}
//funcion del jugador que nos determina si se ha pulsado un boton de movimiento y en funcion de eso cambia la direccion
pj.prototype.handleEvents = function () {

    this.dir = "NONE";
    if(this.upKey.isDown){
        if(Ping.player.id === 1){
            pjs[0].dir= "UP";
        } else {
            pjs[1].dir= "UP";
        }       
    }
    if(this.downKey.isDown){
        if(Ping.player.id === 1){
            pjs[0].dir= "DOWN";
        } else {
            pjs[1].dir= "DOWN";
        }       
    }
    if(Ping.player.id === 1){
            pjs[0].move();
        } else {
            pjs[1].move();
        }
}
//funcion del jugador que aplica la direccion actual para mover al mismo
pj.prototype.move = function () {

    if (this.dir == "UP")
        this.mySprite.body.velocity.y = -this.velo;
    if (this.dir == "DOWN")
        this.mySprite.body.velocity.y = this.velo;
    if (this.dir == "NONE")
        this.mySprite.body.velocity.y = 0;
    this.mySprite.body.velocity.x = 0;
}

//funcion para añadir una bola al campo de juego
addBall = function () {

    balls.push(new ball());
    balls[balls.length - 1].particleEmitter.start(false, 100, 10);
}
//Funcion para mover el emisor de particulas
updateParticles = function () {
    for (var i = 0; i < balls.length; i++) {
        balls[i].particleEmitter.x = balls[i].mySprite.body.x + (balls[i].mySprite.body.width / 2);
        balls[i].particleEmitter.y = balls[i].mySprite.body.y + (balls[i].mySprite.body.height / 2);
    }


}

//función para aumentar la velocidad
upgradeVel = function () {
    //aumentamos la velocidad de la bola
    for (var i = 0; i < balls.length; i++) {
        balls[i].mySprite.body.velocity.setTo(balls[i].mySprite.body.velocity.x * 1.2, balls[i].mySprite.body.velocity.y);
    }

    //aumentamos la velocidad de movimiento del jugador
    for (var l = 0; l < pjs.length; l++)
        pjs[l].velo += 20;
    //reseteamos el bool controlador del timer
    upgradeTimer = true;
}

//función para hacer que la cámara se agite (ocurre al marcar un punto)
function shake() {
    game.camera.shake(0.02, 200); //game.camera.shake(INTENSIDAD, TIEMPO);
}

//revisamos las colisiones
reviewCollisions = function () {
    var diff = 0; //diferencia en la coordenada "y" entre objetos que  la bola toca la porteria para añadir puntos y resetear el juego
    for (var i = 0; i < balls.length; i++) {
        if (game.physics.arcade.collide(porterias[0].mySprite, balls[i].mySprite)) {
            if (porterias[0].escudo == true) {
                porterias[0].escudo = false;
                porterias[0].mySprite.visible = false;
            } else {
                pjs[1].points++;
                shake();
                reset();
                break;
            }
        }
        if (game.physics.arcade.collide(porterias[1].mySprite, balls[i].mySprite)) {
            if (porterias[1].escudo == true) {
                porterias[1].escudo = false;
                porterias[1].mySprite.visible = false;
            } else {
                pjs[0].points++;
                shake();
                reset();
                break;
            }
        }

        //Ahora calculamos la colision de la bola con el jugador y calculamos el rebote de la bola,
        //también revisamos quien ha sido el ultimo en tocar la bola (con la variable lastTouchId)
        if (game.physics.arcade.collide(pjs[0].mySprite, balls[i].mySprite)) {

            if ((pjs[0].mySprite.body.y + pjs[0].halfSpritePlayer) < (balls[i].mySprite.body.y + balls[i].halfSpriteBall)) {
                diff = (balls[i].mySprite.body.y + balls[i].halfSpriteBall) - (pjs[0].mySprite.body.y + pjs[0].halfSpritePlayer); //diferencia de distancia en y calculada entre la pelota y el jugador
                balls[i].mySprite.body.velocity.y = (10 * diff);
            }

            else if ((pjs[0].mySprite.body.y + pjs[0].halfSpritePlayer) > (balls[i].mySprite.body.y + balls[i].halfSpriteBall)) {
                diff = (pjs[0].mySprite.body.y + pjs[0].halfSpritePlayer) - (balls[i].mySprite.body.y + balls[i].halfSpriteBall); //diferencia de distancia en y calculada entre el jugador y la pelota
                balls[i].mySprite.body.velocity.y = (-10 * diff);
            }

            lastTouchId = 0;

            if (balls[i].fastball == true) {
                balls[i].fastball = false;
                balls[i].mySprite.body.velocity.x /= 2;
                balls[i].mySprite.body.velocity.y /= 2;
            }
        }
        if (game.physics.arcade.collide(pjs[1].mySprite, balls[i].mySprite)) {

            if ((pjs[1].mySprite.body.y + pjs[1].halfSpritePlayer) < (balls[i].mySprite.body.y + balls[i].halfSpriteBall)) {
                diff = (balls[i].mySprite.body.y + balls[i].halfSpriteBall) - (pjs[1].mySprite.body.y + pjs[1].halfSpritePlayer); //diferencia de distancia en y calculada entre la pelota y el jugador
                balls[i].mySprite.body.velocity.y = (10 * diff);
            }

            else if ((pjs[1].mySprite.body.y + pjs[1].halfSpritePlayer) > (balls[i].mySprite.body.y + balls[i].halfSpriteBall)) {
                diff = (pjs[1].mySprite.body.y + pjs[1].halfSpritePlayer) - (balls[i].mySprite.body.y + balls[i].halfSpriteBall); //diferencia de distancia en y calculada entre el jugador y la pelota
                balls[i].mySprite.body.velocity.y = (-10 * diff);
            }

            lastTouchId = 1;

            if (balls[i].fastball == true) {
                balls[i].fastball = false;
                balls[i].mySprite.body.velocity.x /= 2;
                balls[i].mySprite.body.velocity.y /= 2;
            }
        }

        
        

    }
}
//Calcula la colisión de la bola con los power ups existentes en pantalla
reviewPowerUps =function(){
	for (var i = 0; i < balls.length; i++) {
		for (var e = 0; e < powerUps.length; e++) {
            if (game.physics.arcade.overlap(balls[i].mySprite, powerUps[e].mySprite)) {
                powerUps[e].activate();
                powerUps[e].mySprite.destroy();
                cualBola = i;
                break;
            }
        }
	}
}
//Función que hace que aparezcan power-ups aleatorios
spawnPowerUp = function () {
    powerUps.push(new powerUp(game.rnd.integerInRange(0, 5)));
}

//Resetea el juego. Lleva la bola al centro y la para
function reset() {
	if(Ping.player.id===1){
		resetear=1;
	}
    cualBola = 0;
    for (var a = balls.length; a > 1; a--) {
        balls.length;
        balls[a - 1].particleEmitter.destroy();
        balls[a - 1].mySprite.destroy();
        balls.pop();
        balls.length;
    }
    balls[0].mySprite.body.velocity.setTo(0, 0);
    balls[0].mySprite.position.setTo(game.world.centerX, game.world.centerY)
    //En tres segundos va a la funcion go
    game.time.events.add(Phaser.Timer.SECOND * 3, go, this);
    //Destruir los powerUps que hay en pantalla y desactivar los activos
    for (var e = powerUps.length; e > 0; e--) {
        if (powerUps[e - 1].active) {
            powerUps[e - 1].deActivate();
        }
        powerUps[e - 1].mySprite.destroy();
        powerUps.pop();
    }
    porterias[0].escudo = false;
    porterias[1].escudo = false;
    porterias[0].mySprite.visible = false;
    porterias[1].mySprite.visible = false;
    //Se destruye el texto anterior y se crea uno nuevo
    pj1_puntos.destroy();
    pj2_puntos.destroy();
    pj1_puntos = game.add.text(35, 20, pjs[0].points, style);
    pj2_puntos = game.add.text(750, 20, pjs[1].points, style);
}

//Función que comprueba constantemente si algín jugador ha llegado a la puntuación máxima (10 puntos)
function comprobarGanador() {
    if ((pjs[0].points == 10) || (pjs[1].points == 10)) {
        music.pause();
        if (pjs[0].points == 10) {
            winner = 1;
        }
        else if (pjs[1].points == 10) {
            winner = 2;
        }
        game.state.start('endingState');
    }
}
//Se pone de nuevo en movimiento la bola
function go(){
    direccAleatoria();
    balls[0].mySprite.body.velocity.setTo(velBolaX, game.rnd.integerInRange(-150, 150))
}

//Se calcula aleatoriamente la dirección en x de la velocidad de la bola al principio de cada punto
function direccAleatoria(){
    this.direccion = game.rnd.integerInRange(0, 1);
    if(direccion == 0){
        velBolaX = -350;
    }
    else if(direccion == 1){
        velBolaX = 350;
    }
}



Ping.levelState = function (game) {

}

Ping.levelState.prototype = {
    init: function() {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@2 ENTRO A LEVEL STATE");
    },
    preload: function () {
        //Dependiendo de que color hallamos elegido así será nuestra raqueta. Por defecto es blanca.
        game.load.image('raqueta', color);
    },

    create: function () {
        if(hacerCreate==0){
            background = game.add.tileSprite(0, 0, 800, 600, 'fondo');
            this.countdown = this.add.sprite(475, 200, 'countdown');
            this.countdown.anchor.set(0.5, 0.5);
            this.countdown.animations.add('countdownAnimation');
            this.countdown.animations.play('countdownAnimation', 1, false, true);
            //añadimos y configuramos el sonido
            music = game.add.audio('music', 1, true);
            music.play();

            //bool que nos ayuda a ir incrementando la dificultad del juego mediante un timer
            upgradeTimer = true;
            //añadimos a los arrays de jugador y bola sus correspondientes elementos
            pjs.push(new pj(0, 'raqueta'));
            pjs.push(new pj(1, 'raqueta'));
            addBall();
            Ping.onlineBalls = {
                id: 0
            };
            Ping.estadoOnline = {
                	id: 1,
                	lastTouch: 0,
                	resetOnline: 0,
                	punt1: 0,
                	punt2: 0
            	};
            if(Ping.player.id===1){
           		if (Ping.onlineBalls != undefined) {
                	createBall(function(ballId){
                    	Ping.onlineBalls.id = ballId;
                	}, Ping.onlineBalls);
            	}
            	
            	if (Ping.estadoOnline != undefined) {
               		createEstado(function(estadoId){
                    	Ping.estadoOnline.id = estadoId;
                    	console.log("Crear estado###################################");
                	}, Ping.estadoOnline);
            	}
        	}

            //añadimos las porterias
            porterias.push(new porteria(0));
            porterias.push(new porteria(1));
            game.stage.backgroundColor = "#000000";
            pj1_puntos = game.add.text(35, 20, pjs[0].points, style);
            pj2_puntos = game.add.text(750, 20, pjs[1].points, style);
            game.time.events.add(Phaser.Timer.SECOND * 3, go, this);
            //Loop que crea cada cierto tiempo un power up
            game.time.events.loop(Phaser.Timer.SECOND * game.rnd.integerInRange(3, 5), spawnPowerUp, this);
            //Creamos el gameState (online)
            hacerCreate=1;
            var op;
            /*var opBall;
            var opEstado;*/
        if(Ping.player.id === 1){
            Ping.player.y = pjs[0].mySprite.position.y;
            op = 2;
        } else {
            Ping.player.y = pjs[1].mySprite.position.y;
            op = 1;
        }
       /* if(Ping.onlineBalls.id === 1){
            opBall = 2;
        } else {
            opBall = 1;
        }
        if(Ping.estadoOnline.id === 1){
            opEstado = 2;
        } else {
            opEstado = 1;
        }*/


        if(Ping.player.id === 1){
            Ping.onlineBalls.posBallx = balls[0].mySprite.position.x;
            Ping.onlineBalls.posBally = balls[0].mySprite.position.y;
            Ping.onlineBalls.velBallx = balls[0].mySprite.body.velocity.x;
            Ping.onlineBalls.velBally = balls[0].mySprite.body.velocity.y;
            Ping.estadoOnline.lastTouch = lastTouchId;
            Ping.estadoOnline.punt1= pjs[0].points;
            Ping.estadoOnline.punt2= pjs[1].points;
            Ping.estadoOnline.resetOnline = 0;
            updateBall(Ping.onlineBalls);
            console.log("Casi updateadno estado###################################");
            updateEstado(Ping.estadoOnline);
            console.log("Epdate estado###################################");
        }
            
        Ping.otherPlayer = {
                id: op,
                y: 0 
        }
        /*Ping.otherBall = {
                id: opBall,
                posBallx: 400,
                posBally: 300
        }
        Ping.otherEstado = {
                id: opEstado,
                lastTouchId: 0,
                resetOnline: 0
        }*/
        
        if(Ping.player.id === 1){
            Ping.otherPlayer.y =  pjs[1].mySprite.position.y;
        } else {
            Ping.otherPlayer.y =  pjs[0].mySprite.position.y;
        }
        updatePlayer(Ping.otherPlayer);
        /*updateBall(Ping.otherBall);
        updateEstado(Ping.otherEstado);*/
        }
    },

    update: function () {
    	getBall(function(oBall){
            if(Ping.player.id === 1){  
            } else {
                balls[0].mySprite.position.x = oBall.posBallx;
                balls[0].mySprite.position.y = oBall.posBally;
                balls[0].mySprite.body.velocity.x = oBall.velBallx;
                balls[0].mySprite.body.velocity.y = oBall.velBally;
                /*Ping.onlineBalls.posBallx = oBall.posBallx;
                Ping.onlineBalls.posBally = oBall.posBally;
                Ping.onlineBalls.velBallx = oBall.velBallx;
                Ping.onlineBalls.velBally = oBall.velBally;*/
            }
        },1);
    	getEstado(function(oEstado){
            if(Ping.player.id === 1){  
            	if(resetear===0)
            		console.log("Que te follen#############################################")
                resetear = oEstado.resetOnline;
                if(resetear===0)
            		console.log("Que te follen#############################################")
                Ping.estadoOnline.resetOnline = oEstado.resetOnline;
			} else {
                lastTouchId = oEstado.lastTouch;
                resetear = oEstado.resetOnline;
                pjs[0].points = oEstado.punt1;
                pjs[1].points = oEstado.punt2;
                if(resetear===1){
                    reset();
                    resetear=0;
                }
                Ping.estadoOnline.lastTouch = oEstado.lastTouch;
                Ping.estadoOnline.resetOnline = resetear
                Ping.estadoOnline.punt1 = oEstado.punt1;
                Ping.estadoOnline.punt2 = oEstado.punt2;
                updateEstado(Ping.estadoOnline);
            }
        },1);
    	if(resetear===0)
            		console.log("Que te follen#############################################")
        background.tilePosition.x += 0.25;
        comprobarGanador();
         
        if(Ping.player.id ===1)
        	reviewCollisions();
        reviewPowerUps();
        if (upgradeTimer == true) {
            game.time.events.add(Phaser.Timer.SECOND * 5, upgradeVel, this)
            upgradeTimer = false;
        }
        updateParticles();
        //llamamos al update de nuestros jugadores
        pjs[0].handleEvents();
        pjs[1].handleEvents();
        if(Ping.player.id === 1){
                Ping.player.y =  pjs[0].mySprite.position.y;
            } else {
                Ping.player.y =  pjs[1].mySprite.position.y;
            }
            updatePlayer(Ping.player);
        //Actualizamos posicion del otro jugador y puntuacion
        getPlayer(function(oPlayer){
            if(Ping.otherPlayer.id === 1){
                pjs[0].mySprite.position.y = oPlayer.y;
                Ping.otherPlayer.y = oPlayer.y;
                
            } else {
                 pjs[1].mySprite.position.y = oPlayer.y;
                Ping.otherPlayer.y = oPlayer.y;
            }
        },Ping.otherPlayer.id);
        updatePlayer(Ping.player);
        if(resetear===0)
            		console.log("Que te follen#############################################")
        if(Ping.player.id === 1){
                Ping.onlineBalls.posBallx = balls[0].mySprite.position.x;
                Ping.onlineBalls.posBally = balls[0].mySprite.position.y;
                Ping.onlineBalls.velBallx = balls[0].mySprite.body.velocity.x;
                Ping.onlineBalls.velBally = balls[0].mySprite.body.velocity.y;
                Ping.estadoOnline.lastTouch = lastTouchId;
                Ping.estadoOnline.punt1= pjs[0].points;
            	Ping.estadoOnline.punt2= pjs[1].points;
                Ping.estadoOnline.resetOnline = resetear;
                updateBall(Ping.onlineBalls);
                updateEstado(Ping.estadoOnline);
                
        }
          
        if(resetear===0)
            		console.log("Que te follen#############################################")
        
        
        if(resetear===0)
            		console.log("Que te follen#############################################")
            
        
        
    }
}
