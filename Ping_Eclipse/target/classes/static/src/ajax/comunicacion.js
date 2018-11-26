/*   Antes de cerrar la página, comprobamos en qué estado de Phaser
 *  se encuentra el juego actualmente.
 *  Si se encuentra en matching o level, debemos eliminar del servidor
 *  su correspondiente usuario.
 */
window.onbeforeunload = function(){
    if(game.state.current === 'matchingState'){
        if(Ping.player != undefined){ deletePlayer(Ping.player.id); delete Ping.player; }
    }
    if(game.state.current === 'levelState'){
        if(Ping.player != undefined){
            deletePlayer(Ping.player.id); delete Ping.player;
        }
    }
}

/*
 * ADMINISTRACIÓN PETICIONES JUGADOR
 */

function createPlayer(callback, player) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/game',
        data: JSON.stringify(player),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (player) {
        console.log("Player created: " + JSON.stringify(player));
        callback(player);
    })
}

function numberPlayers(callback){
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/game',
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (numPlayers) {
        console.log("Info Received" + JSON.stringify(numPlayers));
        callback(numPlayers);
    })
}

function getPlayer(callback, id){
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/game/' + id,
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (player) {
        console.log("Info Received" + JSON.stringify(player));
        callback(player);
    })
}

function updatePlayer(player) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/game/' + player.id,
        data: JSON.stringify(player),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (player) {
        console.log("Updated player: " + JSON.stringify(player))
    })
}

function deletePlayer(playerId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/game/' + playerId
    }).done(function (player) {
        console.log("Deleted player " + playerId)
    })
}