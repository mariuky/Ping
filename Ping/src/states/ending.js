<<<<<<< HEAD
=======

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
Ping.endingState = function(game) {

}

Ping.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Me cago en todo', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'Press w to play', {font: '25px Arial', fill: '#ffffff'});
    },

    update: function() {

    }
}