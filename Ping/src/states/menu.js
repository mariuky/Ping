Ping.menuState = function(game) {
}

Ping.menuState.prototype = {

    preload: function() {
        
    },

    create: function() {
        var nameLabel= game.add.text(80, 80, 'Ping', {font: '25px Arial', fill: '#ffffff'});
        var startLabel=game.add.text(80, game.world.height-80, 'y tal', {font: '25px Arial', fill: '#ffffff'});
        var button = game.add.button(game.world.centerX , 300, 'jugar', this.customizeOnClick, this, 1, 0, 0);
        var button = game.add.button(game.world.centerX , 400, 'creditos', this.creditosOnClick, this, 1, 0, 0);
        var button = game.add.button(game.world.centerX, 500, 'salir', this.salirOnClick, this, 1, 0, 0);
        
    },
    
    update: function() {

    },
    customizeOnClick: function() {

        game.state.start('customizeState')
 
    },
    creditosOnClick: function() {

        game.state.start('creditsState')
 
    },
    salirOnClick: function() {

        game.destroy()
 
    },

}

