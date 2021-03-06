Ping.creditsState = function(game) {
}

Ping.creditsState.prototype = {

    preload: function() {

    },

    create: function() {
        background = game.add.tileSprite(0, 0, 800, 600, 'fondo');
        var nombres= game.add.sprite(120, 170, 'nombres');
        nombres.scale.setTo(0.8, 0.8);
        var titulo= game.add.sprite(250, 20, 'titulo');
        var volver_boton = game.add.button(330, 500, 'volver', this.menuOnClick, this, 1, 0, 0);
        volver_boton.scale.setTo(0.7, 0.7);
        var fullscreen_boton = game.add.button(760, 560, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        fullscreen_boton.scale.setTo(0.5, 0.5);

        palas = game.add.sprite(game.world.centerX - game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas2 = game.add.sprite(game.world.centerX + game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas.scale.setTo(0.5, 0.5);
        palas.anchor.setTo(0.5, 0.5);
        palas2.scale.setTo(0.5, 0.5);
        palas2.anchor.setTo(0.5, 0.5);
    },
    
    update: function() {
        background.tilePosition.y += 0.75;
    },
    fullscreen: function() {
        if (game.scale.isFullScreen)
        {
            game.scale.stopFullScreen();
        }
        else
        {
            game.scale.startFullScreen(false);
        }

    },
    menuOnClick: function() {

        game.state.start('menuState')
 
    },
    

}