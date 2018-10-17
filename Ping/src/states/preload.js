<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
=======
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
Ping.preloadState = function(game) {

}

Ping.preloadState.prototype = {

    preload: function() {
        game.load.image('bg', 'assets/images/bg.png');
    	game.load.image('cat', 'assets/images/cat.png');
        game.load.image('catcher', 'assets/images/catcher.png');
        game.load.image('pelota', 'assets/images/pelota.png');
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