CatCatcher.menuState = function(game) {
}

CatCatcher.menuState.prototype = {

    preload: function() {
        //game.load.spritesheet('button', 'assets/images/button_sprite_sheet.png', 193, 71);
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Ping', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'y tal', {font: '25px Arial', fill: '#ffffff'});
        var button = game.add.button(game.world.centerX - 95, 400, 'button', this.juegoOnClick, this, 2, 1, 0);
        var button = game.add.button(game.world.centerX - 95, 500, 'button', this.creditosOnClick, this, 2, 1, 0);
        var button = game.add.button(game.world.centerX, 500, 'button', this.salirOnClick, this, 2, 1, 0);
    	
    },
    
    update: function() {

    },
    juegoOnClick: function() {

        game.state.start('levelState')
 
    },
    creditosOnClick: function() {

        game.state.start('creditsState')
 
    },
    salirOnClick: function() {

        game.destroy()
 
    }

}
