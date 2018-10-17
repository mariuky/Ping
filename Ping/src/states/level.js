Ping.levelState = function(game) {

}

var pelota;

Ping.levelState.prototype = {

    
    preload: function() {
        
    },
    
    create: function() {
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
}