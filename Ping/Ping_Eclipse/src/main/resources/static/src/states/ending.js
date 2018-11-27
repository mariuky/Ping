Ping.endingState = function(game) {

}

Ping.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
        if(winner == 1){
            var textoGanador= game.add.text(140, 280, 'GANA EL JUGADOR 1', {font: '50px Arial', fill: '#ffffff'});
        }
        else if(winner == 2){
            var textoGanador= game.add.text(140, 280, 'GANA EL JUGADOR 2', {font: '50px Arial', fill: '#ffffff'});
        }
    	
        //var volver_boton = game.add.button(115, 500, 'volver', this.menuOnClick, this, 1, 0, 0);
        var salir_boton = game.add.button(115, 500, 'salir', this.salirOnClick, this, 1, 0, 0);
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