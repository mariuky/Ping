Ping.preloadState = function(game) {

}

Ping.preloadState.prototype = {

    preload: function() {
        background = game.add.sprite(0, 0, 'fondo');
        //Se crea la animación de la pantalla de carga 
        this.loading = this.add.sprite(175, 550, 'loading');
        this.loading.anchor.set(0.5, 0.5);
        this.loading.animations.add('loadGame');
        this.loading.animations.play('loadGame', 3, true);
        this.load.setPreloadSprite(this.loading);
        
        //Se cargan los demás assets
        game.load.image('textoGanador', 'assets/images/ganador_texto.png');
        game.load.image('textoGanador2', 'assets/images/ganador_.png');
        game.load.image('textoColor', 'assets/images/color_texto.png');
        game.load.image('nombres', 'assets/images/nombres_creditos.png');
        game.load.image('titulo', 'assets/images/titulo_menu.png');
        game.load.image('raqueta', 'assets/images/raqueta.png');
        game.load.image('raquetaBlue', 'assets/images/raqueta_azul.png');
        game.load.image('raquetaYellow', 'assets/images/raqueta_amarilla.png');
        game.load.image('raquetaRed', 'assets/images/raqueta_roja.png');
        game.load.image('raquetaGreen', 'assets/images/raqueta_verde.png');
        game.load.image('bg', 'assets/images/bg.png');
        game.load.image('pelota', 'assets/images/pelota.png');
        game.load.image('porteria', 'assets/images/porteria.png');
        game.load.image('powerUp0', 'assets/images/PWUP_barraGrande.png');
        game.load.image('powerUp1', 'assets/images/PWUP_barraPequeña.png');
        game.load.image('powerUp2', 'assets/images/PWUP_bolaDoble.png');
        game.load.image('powerUp3', 'assets/images/PWUP_velocidadBola.png');
        game.load.image('powerUp4', 'assets/images/PWUP_cambioDireccion.png');
        game.load.image('powerUp5', 'assets/images/PWUP_escudo.png');
        game.load.spritesheet('countdown', 'assets/images/countdown_spritesheet.png', 200, 200);
        game.load.spritesheet('jugar', 'assets/images/jugar_spritesheet.png', 300, 71);
        game.load.spritesheet('creditos', 'assets/images/creditos_spritesheet.png', 300, 71);
        game.load.spritesheet('salir', 'assets/images/salir_spritesheet.png', 200, 71);
        game.load.spritesheet('volver', 'assets/images/volver_spritesheet.png', 300, 71);
        game.load.spritesheet('fullscreen', 'assets/images/fullscreen_spritesheet.png', 71, 71);
        game.load.spritesheet('blue', 'assets/images/button_blue.png', 70, 70);
        game.load.spritesheet('yellow', 'assets/images/button_yellow.png', 70, 70);
        game.load.spritesheet('red', 'assets/images/button_red.png', 70, 70);
        game.load.spritesheet('green', 'assets/images/button_green.png', 70, 70);
        game.load.audio('music','assets/sounds/pingmusic.mp3');
    	game.load.audio('loop1','assets/sounds/loop1.mp3');
    	game.load.audio('loop2','assets/sounds/loop2.mp3');
    },

    create: function() {
    	
    	game.state.start('menuState')
    },

    update: function() {

    }
}