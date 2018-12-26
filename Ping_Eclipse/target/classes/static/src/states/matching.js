

Ping.matchingState = function (game) {

}
//Datos para el online
var ws;
var ID=-1;
console.log('Cosas')
Ping.matchingState.prototype = {
    
    // Obtenemos el número de jugadores creados con this.getNumPlayers. Si ya hay 
    // suficientes jugadores, echa al menú al jugador para que lo vuelva a intentar.
    init: function () {
       
    },
        
    preload: function () {
    },

    // en CREATE, a pesar de estar bastante lejos de INIT, puede dar tiempo a que se cree el jugador
    // ya que this.getNumPlayers puede haberse ejecutado en su totalidad (a falta del DONE) y Phaser
    // sigue con la ejecución de PRELOAD y de CREATE. ¡¡¡ Esa es una de las claves.!!!
    create: function () {
        text = "Esperando jugadores..\nJugadores en lobby: 1"
        style = { font: "20px Times New Roman", fill: "#FFFFFF", align: "center" };
        spr_text = game.add.text(game.world.centerX-100, 50, text, style);
        
        
        ws = new WebSocket('ws://192.168.1.128:8080/ping');
        console.log('Ha entrado a cosas')
        
        console.log('Paso1')
        // Un monitor de eventos que es llamado cuando un error ocurre. Esto es un evento simple llamado "error"
        ws.onerror = function (error) {
            console.log('[DEBUG-WS] Ha ocurrido un error: ' + error)
        }

        // Un monitor de eventos que atiende una llamada cuando la conexión del WebSocket cambia a un estado CERRADO (CLOSED). El monitor recibe un CloseEvent llamado "cerrado".
        ws.onclose = function (event) {

            console.log('[DEBUG-WS] Se ha cerrado la conexion.')
        
        }
        
    },

    // Una vez hay suficientes jugadores, se pasa a levelState. El problema de no hacer en INIT
    // el this.createPlayer, haciendo un ELSE de si puede crear jugadores, es que va tan rápido,
    // que antes de haber comprobado si más de 1 jugador ya conectado, llega aquí y te dice que hay ya 2.
    // Por eso el comprobador de >1 y que en el MENÚ revise si hay un jugador sobrante creado para eliminar.
    update: function () {
       console.log('update')
    ws.onopen = function (event) {
            data = {
                type: 'CREATE_PLAYER'
            }
            this.send(JSON.stringify(data))
            console.log('Creado?')
        }
    // Un monitor de eventos que es llamado cuando un mensaje es recibido desde un servidor. El monitor recibe un objeto MessageEvent llamado "mensaje".
ws.onmessage = function (message) {
	console.log('Info:'+ message)
    var msg = JSON.parse(message.data)

    console.log('INFO RECIBIDA ' + msg.type)

    switch (msg.type) {
        case "PLAYER_CREATED":
            console.log('@@@@@@ PLAYER CREATED @@@@@')
            console.log('id: ' + msg.player.id)
            ID= msg.player.id;
            console.log(ID);
            console.log('pos: ('  + msg.player.y + ')')
            break;
        case "JUGAR":
            if(ID===-1)
                ID= msg.player.id;
            console.log(ID);
           game.state.start('levelState')
            break;
        case "UPDATE_STATE":
            console.log('!!!!! GAME SENDS UPDATE !!!!!')
            break;
    }
}
    
}
}
