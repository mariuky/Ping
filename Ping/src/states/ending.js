CatCatcher.endingState = function(game) {

}

CatCatcher.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Me cago en todo', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'Press w to play', {font: '25px Arial', fill: '#ffffff'});
    },

    update: function() {

    }
}