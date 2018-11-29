Ping.endingState = function(game) {

}

Ping.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
        background = game.add.sprite(0, 0, 'fondo');
        var salir_boton = game.add.button(115, 500, 'salir', this.salirOnClick, this, 1, 0, 0);
        if(winner == 1){
            var textoGanador = game.add.sprite(50, 200, 'textoGanador');
        }
        else if(winner == 2){
            var textoGanador = game.add.sprite(45, 200, 'textoGanador2');
        }
        //var volver_boton = game.add.button(115, 500, 'volver', this.menuOnClick, this, 1, 0, 0);
    },

    update: function() {

    },/*
    menuOnClick: function() {

        game.state.start('menuState')
 
    },*/
    salirOnClick: function() {

        game.destroy()
 
    },

}