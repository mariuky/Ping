<<<<<<< HEAD
var Ping = {}

=======

var Ping = {}

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
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