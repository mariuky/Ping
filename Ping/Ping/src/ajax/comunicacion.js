/*	Antes de cerrar la página, comprobamos en qué estado de Phaser
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
        url: 'http://localhost:8080/players',
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
        url: 'http://localhost:8080/players',
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
        url: 'http://localhost:8080/players/' + id,
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
        url: 'http://localhost:8080/players/' + player.id,
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
        url: 'http://localhost:8080/players/' + playerId
    }).done(function (player) {
        console.log("Deleted player " + playerId)
    })
}

/*
 * ADMINISTRACIÓN PETICIONES Ball
 */

function createBall(callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/ball',
        //data: JSON.stringify(ball),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Cat created: " + JSON.stringify(ball));
        callback(ball);
    })
}


function getBall(callback){
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/ball',
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Info Received" + JSON.stringify(ball));
        callback(ball);
    })
}

function updateBall(callback) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/ball',
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Updated ball: " + JSON.stringify(ball));
        callback(ball);
    })
}

function deleteBall() {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/ball'
    }).done(function (ball) {
        console.log("Deleted ball ")
    })
}