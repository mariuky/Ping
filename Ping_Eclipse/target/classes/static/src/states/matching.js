/*
Ping.matchingState = function(game){
    
}

//var user;
var n_jugadores;
Ping.matchingState.prototype = {
    init: function () {
        this.numberPlayers(function (numPlayers) {
            if (numPlayers.length > 1) {
                console.log ('==========================================================');
                console.log ('= El servidor está lleno. Vuelve a intentarlo más tarde. =');
                console.log ('==========================================================');
                game.state.start('menuState');
            }
        });
    },
    preload: function() {
    },

    create: function() {
        text = "Esperando jugadores..\nJugadores en lobby: "
        style = { font: "20px Times New Roman", fill: "#FFFFFF", align: "center" };
        spr_text = game.add.text(game.world.centerX-100, 50, text, style);
        
        Ping.player = {
                id: 0
        };
        
        if (Ping.player != undefined) {
            createPlayer(function(playerId){
                Ping.player.id = playerId;
            }, Ping.player);
        } 
    },

    update: function() {
        if(n_jugadores){n_jugadores.destroy();}
        numberPlayers(function(numero_usuarios){
            text = numero_usuarios;
        });
        style = { font: "20px Times New Roman", fill: "#FFFFFF", align: "center" };
        n_jugadores = game.add.text(game.world.centerX+80, 78, text, style);
        
        this.numberPlayers(function (numero_usuarios) {
            if (numero_usuarios.length === 2) {
                console.log ('##### COMIENZA EL JUEGO #####');
                game.state.start('levelState');
            }
        });
        
    }
}
*/
//#################################################################################################################################

Ping.matchingState = function (game) {

}

Ping.matchingState.prototype = {
    
    // Obtenemos el número de jugadores creados con this.getNumPlayers. Si ya hay 
    // suficientes jugadores, echa al menú al jugador para que lo vuelva a intentar.
    init: function () {
        this.getNumPlayers(function (numPlayers) {
            if (numPlayers.length > 1) {
                console.log ('==========================================================');
                console.log ('= El servidor está lleno. Vuelve a intentarlo más tarde. =');
                console.log ('==========================================================');
                game.state.start('menuState');
            }
        });
    },
        
    preload: function () {
        text = "Esperando jugadores..\nJugadores en lobby: "
        style = { font: "20px Times New Roman", fill: "#FFFFFF", align: "center" };
        spr_text = game.add.text(game.world.centerX-100, 50, text, style);
    },

    // en CREATE, a pesar de estar bastante lejos de INIT, puede dar tiempo a que se cree el jugador
    // ya que this.getNumPlayers puede haberse ejecutado en su totalidad (a falta del DONE) y Phaser
    // sigue con la ejecución de PRELOAD y de CREATE. ¡¡¡ Esa es una de las claves.!!!
    create: function () {
        text = "Esperando jugadores..\nJugadores en lobby: "
        style = { font: "20px Times New Roman", fill: "#FFFFFF", align: "center" };
        spr_text = game.add.text(game.world.centerX-100, 50, text, style);
        
        Ping.player = {
                id: 0,
        };
        
        if (Ping.player != undefined) {
            createPlayer(function(playerId){
                Ping.player.id = playerId;
            }, Ping.player);
        } 
    },

    // Una vez hay suficientes jugadores, se pasa a levelState. El problema de no hacer en INIT
    // el this.createPlayer, haciendo un ELSE de si puede crear jugadores, es que va tan rápido,
    // que antes de haber comprobado si más de 1 jugador ya conectado, llega aquí y te dice que hay ya 2.
    // Por eso el comprobador de >1 y que en el MENÚ revise si hay un jugador sobrante creado para eliminar.
    update: function () {
        this.getNumPlayers(function (numPlayers) {
            if(entrarJuego===0){
                if (numPlayers === 2) {
                    console.log ('##### COMIENZA EL JUEGO #####');
                    entrarJuego=1;
                    game.state.start('levelState');
                }
           }
        });
    }, 
    
    getNumPlayers: function (callback) {
        $.ajax({
            url: '/game',
        }).done(function (data) {
            callback(data);
        })
    },
    
    
}
