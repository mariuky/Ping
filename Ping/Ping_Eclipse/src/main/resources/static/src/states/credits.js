Ping.creditsState = function(game) {
}

Ping.creditsState.prototype = {

    preload: function() {

    },

    create: function() {
        game.stage.backgroundColor = "#000000";
    	var titulo= game.add.text(300, 20, 'Ping', {font: '100px Arial', fill: '#ffffff'});
        var nombre1=game.add.text(170, 180, 'Mario Peña Jiménez', {font: '50px Arial', fill: '#ffffff'});
        var nombre2=game.add.text(140, 280, 'Jaime Bárzano Enrique', {font: '50px Arial', fill: '#ffffff'});
        var nombre3=game.add.text(130, 380, 'Rafael Sauceda Velasco', {font: '50px Arial', fill: '#ffffff'});
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