Ping.menuState = function(game) {
}
var hacerCreate=0;
var entrarJuego=0;
Ping.menuState.prototype = {

    preload: function() {
        
    },

    create: function() {
        background = game.add.tileSprite(0, 0, 800, 600, 'fondo');
        var titulo= game.add.sprite(250, 20, 'titulo');
        //var startLabel=game.add.text(80, game.world.height-80, 'y tal', {font: '25px Arial', fill: '#ffffff'});
        var jugar_boton = game.add.button(325, 180, 'jugar', this.customizeOnClick, this, 1, 0, 0);
        var creditos_boton = game.add.button(285, 280, 'creditos', this.creditosOnClick, this, 1, 0, 0);
        var salir_boton = game.add.button(325, 380, 'salir', this.salirOnClick, this, 1, 0, 0);
        var fullscreen_boton = game.add.button(760, 560, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        fullscreen_boton.scale.setTo(0.5, 0.5);

        palas = game.add.sprite(game.world.centerX - game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas2 = game.add.sprite(game.world.centerX + game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas.scale.setTo(0.5, 0.5);
        palas.anchor.setTo(0.5, 0.5);
        palas2.scale.setTo(0.5, 0.5);
        palas2.anchor.setTo(0.5, 0.5);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        
    },
    
    update: function() {
        background.tilePosition.x += 1;
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

}

