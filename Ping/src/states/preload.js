Ping.preloadState = function(game) {

}

Ping.preloadState.prototype = {

    preload: function() {
        game.load.image('bg', 'assets/images/bg.png');
    	game.load.image('cat', 'assets/images/cat.png');
        game.load.image('catcher', 'assets/images/catcher.png');
        game.load.image('pelota', 'assets/images/pelota.png');
        game.load.image('porteria', 'assets/images/porteria.png');
        game.load.spritesheet('jugar', 'assets/images/jugar_spritesheet.png', 300, 71);
        game.load.spritesheet('creditos', 'assets/images/creditos_spritesheet.png', 300, 71);
        game.load.spritesheet('salir', 'assets/images/salir_spritesheet.png', 200, 71);
        game.load.spritesheet('volver', 'assets/images/volver_spritesheet.png', 300, 71);
        game.load.spritesheet('blue', 'assets/images/button_blue.png', 70, 70);
        game.load.spritesheet('yellow', 'assets/images/button_yellow.png', 70, 70);
        game.load.spritesheet('red', 'assets/images/button_red.png', 70, 70);
        game.load.spritesheet('green', 'assets/images/button_green.png', 70, 70);
        game.load.audio('music','assets/sounds/pingmusic.mp3');
    	game.load.audio('loop1','assets/sounds/loop1.mp3');
    	game.load.audio('loop2','assets/sounds/loop2.mp3');
    },

    create: function() {
    	var text = "Loading";
    	var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    	

    	var t = game.add.text(game.world.centerX -150, 250, text, style);
    	game.state.start('menuState')
    },

    update: function() {

    }
}