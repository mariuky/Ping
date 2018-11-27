
var Ping = {}

Ping.bootState = function(game) {

}

Ping.bootState.prototype = {

    preload: function() {
        //Cargamos estas dos cosas en el boot para que aparezcan durante la pantalla de carga
        game.load.spritesheet('loading', 'assets/images/loading_spritesheet.png', 300, 200, 3);
        game.load.image('fondo', 'assets/images/background.png');
    },

    create: function() {
         game.physics.startSystem(Phaser.Physics.ARCADE);
    	 game.state.start('preloadState')
    },

    update: function() {

    }
}