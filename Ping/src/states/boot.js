
var Ping = {}

Ping.bootState = function(game) {

}

Ping.bootState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	 game.physics.startSystem(Phaser.Physics.ARCADE);
    	 game.state.start('preloadState')
		 //Prueba Github
    },

    update: function() {

    }
}