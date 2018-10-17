<<<<<<< HEAD
<<<<<<< HEAD
Ping.levelState = function(game) {
=======
>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6



=======
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
Ping.levelState = function(game) {

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
<<<<<<< HEAD
       
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
=======

    	game.add.sprite(0,0,'bg');
    	game.add.sprite(16,16,'catcher');
    	game.add.sprite(32,32,'cat');
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
		
    },

    update: function() {


    }
}
Ping.GameManager = function(game) {
    var numplayers;
    var players[];
  
}
Ping.GameManager.prototype = {
    
    
    preload: function() {
        
    },


    create: function() {
       this.numplayers = 0;

    },
    addPlayer: function(_player) {
        this.players[numplayers] = _player;
        this.numplayers++;    

    },


   update: function() {
                var i;
    for (i = 0; i < this.numplayers; i++) 
        this.players[i].update();
    },
    
    handleEvents: function (){
        var i;
    for (i = 0; i < this.numplayers; i++) 
        this.players[i].handleEvents();

<<<<<<< HEAD
>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
=======
   }
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
}