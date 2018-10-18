Ping.endingState = function(game) {

}

Ping.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Me cago en todo', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'Press w to play', {font: '25px Arial', fill: '#ffffff'});
    	var button = game.add.button(game.world.centerX - 95, 300, 'jugar', this.levelOnClick, this, 2, 1, 0);
    	var button = game.add.button(game.world.centerX - 95, 500, 'volver', this.menuOnClick, this, 2, 1, 0);
    },

    update: function() {

    },
    levelOnClick: function() {

        game.state.start('levelState')
 
    },
    menuOnClick: function() {

        game.state.start('menuState')
 
    },

}