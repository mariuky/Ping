
Ping.levelState = function(game) {
	var gm;
	var pj;

}
ball = function(game){

    Phaser.Sprite.call(this,game,game.world.width,game.world.centerY,'pelota',0);
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

Ping.levelState.prototype = {

    
    preload: function() {
        
    },
    
    create: function() {
        gm = new gameManager(game,1);           
        pj = new player(game,'catcher',0);
        gm.addPlayer(pj);
        //game.add.sprite(0,0,'bg');
        //game.add.sprite(32,32,'cat');
        game.stage.backgroundColor = "#ffff00";
        
    },

    update: function() {
        
    }
    
}

gameManager = function(game, _numplayers) {
    var myGame = game;
    var numplayers = _numplayers;
    var myplayers = new Array();
    myplayers = [];
    var pelota;
}
gameManager.constructor = gameManager;

gameManager.prototype = {
    
    addPlayer: function(_player) {
        this.myplayers.push(_player);
   

    },
    addPelota: function(){
        pelota = new ball(myGame)

    }
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
    }