<<<<<<< HEAD
<<<<<<< HEAD
var Ping = {}

=======

=======
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
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