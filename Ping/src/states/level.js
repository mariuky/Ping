CatCatcher.levelState = function(game) {

}

CatCatcher.levelState.prototype = {

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