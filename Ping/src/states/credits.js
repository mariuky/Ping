Ping.creditsState = function(game) {
}

Ping.creditsState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Cosas', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'y tal', {font: '25px Arial', fill: '#ffffff'});
        var button = game.add.button(game.world.centerX - 95, 400, 'button', this.menuOnClick, this, 2, 1, 0);
    	
    },
    
    update: function() {

    },
    menuOnClick: function() {

        game.state.start('menuState')
 
    },
    

}