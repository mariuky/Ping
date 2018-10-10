Ping.levelState = function(game) {

}

Ping.levelState.prototype = {



    preload: function() {
        
    },

    create: function() {

    	game.add.sprite(0,0,'bg');
    	game.add.sprite(16,16,'catcher');
    	game.add.sprite(32,32,'cat');
		
    },

    update: function() {
<<<<<<< HEAD

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
=======
    	
>>>>>>> b9a57135a45ba120069587da47c15cf81a1429a3
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