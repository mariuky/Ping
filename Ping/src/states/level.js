<<<<<<< HEAD
Ping.levelState = function(game) {
=======
>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6



Ping.levelState = function(game) {
	var gm;
	var pj;
}

<<<<<<< HEAD
var pelota;
=======
Ping.levelState.prototype = {


>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6

Ping.levelState.prototype = {

    
    preload: function() {
        
    },
    
    create: function() {
<<<<<<< HEAD
        game.stage.backgroundColor = "#ffff00";
        pelota = game.add.sprite(game.world.centerX, game.world.centerY, 'pelota');
        pelota.scale.setTo(0.8, 0.8); //escala el sprite pelota (por debajo de 1, si no se ve borrosa)
        //Fisicas pelota:
        game.physics.arcade.enable(pelota, true);
        pelota.body.setCircle(25);
        pelota.body.velocity.setTo(200, 100);
        pelota.body.collideWorldBounds = true; //para que colisione con el mundo
        pelota.body.bounce.setTo(1, 1); //rozamiento al colisionar, (1, 1) es sin rozamiento
    },

    update: function() {
        
    }
    
}

Ping.GameManager = function(game) {
    this.numplayers = 0;
    function player(_id,_sprite){
        
        this.id = _id;
        this.sprite = _sprite;
        this.x;
        this.y;
        this.dir;
    	
    }
    player.prototype.update = function(){
        if (this.dir = up)
            this.sprite.body.velocity.y = 500;
        if (this.dir = down)
            this.sprite.body.velocity.y = -500;
        if (this.dir = none)
            this.sprite.body.velocity.y = 0;
    }
    player.prototype.move = function(_dir){
        this.dir = _dir;
    }


}
Ping.GameManager.prototype = {
    
    
    preload: function() {
        
    },


    create: function() {
       
    },

   update: function() {
        
    },
    handleEvents: function (){

        if (this.numplayers >= 1){
            if(game.input.keyboard.isDown('S'))
            this.player1.move(down);
            else if(game.input.keyboard.isDown('W'))
            this.player1.move(up);
            else this.player1.move(none);
      }
        if (this.numplayers = 2){
         if(game.input.keyboard.isDown('DOWN'))
            this.player2.move(down);
            else if(game.input.keyboard.isDown('UP'))
            this.player2.move(up);
            else this.player2.move(none);

     }

   }
=======
    	gm = new gameManager(game,1);    		
		pj = new player(game,'catcher',0);
		gm.addPlayer(pj);
    	//game.add.sprite(0,0,'bg');
    	//game.add.sprite(32,32,'cat');
		
    },

    update: function() {
    	gm.update();

    }
}

gameManager = function(game, _numplayers) {
    var numplayers = _numplayers;
    var myplayers = new Array();
    myplayers = [];
}
gameManager.constructor = gameManager;

gameManager.prototype = {
    
    addPlayer: function(_player) {
        this.myplayers.push(_player);
   

    },

   update: function() {
                var i;
    for (i = 0; i < this.numplayers; i++) 
        this.myplayers[i].handleEvents();
    }    

}

function player(game,sprite,_id){

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

    if (this.id = 1){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
                    }
    if (this.id = 2){
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
          this.dir = LEFT;
    
     if(rightKey.isDown)
          this.dir = RIGHT;

      this.move();
}

player.prototype.move = function () {

        if (this.dir = UP)
            this.sprite.body.velocity.y = 500;
        if (this.dir = DOWN)
            this.sprite.body.velocity.y = -500;
        if (this.dir = NONE)
            this.sprite.body.velocity.y = 0;

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
}