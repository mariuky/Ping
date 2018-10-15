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

   }
}