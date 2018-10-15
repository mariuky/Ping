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


    }
}
Ping.GameManager = function(game) {
    var numplayers = 0;
    
    function player(_id,_sprite){
        
        var id = _id;
        var sprite = _sprite;
        var x;
        var y;
        var dir;
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


    create: function(_numplayers, _player) {
       this.numplayers = _numplayers;
       if (this.numplayers = 1)
        var player1 = new player;
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