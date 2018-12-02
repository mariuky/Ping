/*   Antes de cerrar la página, comprobamos en qué estado de Phaser
 *  se encuentra el juego actualmente.
 *  Si se encuentra en matching o level, debemos eliminar del servidor
 *  su correspondiente usuario.
 */
window.onbeforeunload = function(){
    if(game.state.current === 'matchingState'){
        if(Ping.player != undefined){ deletePlayer(Ping.player.id); delete Ping.player; }
        if(Ping.ball != undefined){ deleteBall(Ping.ball.id); delete Ping.ball; }
    }
    if(game.state.current === 'levelState'){
        if(Ping.player != undefined){
            deletePlayer(Ping.player.id); delete Ping.player;
        }
        if(Ping.ball != undefined){
            deleteBall(Ping.ball.id); delete Ping.ball;
        }
    }
}

/*
 * ADMINISTRACIÓN PETICIONES JUGADOR
 */

function createPlayer(callback, player) {
    $.ajax({
        method: "POST",
        url: '/game',
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
        url: '/game',
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
        url: '/game/' + id,
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (player) {
        console.log("Player Received" + JSON.stringify(player));
        callback(player);
    })
}

function updatePlayer(player) {
    $.ajax({
        method: 'PUT',
        url: '/game/' + player.id,
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
        url: '/game/' + playerId
    }).done(function (player) {
        console.log("Deleted player " + playerId)
    })
}


function createBall(callback, ball) {
    $.ajax({
        method: "POST",
        url: '/balls',
        data: JSON.stringify(ball),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Ball created: " + JSON.stringify(ball));
        callback(ball);
    })
}

function numberBall(callback){
    $.ajax({
        method: "GET",
        url: '/balls',
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (numBalls) {
        console.log("Info Received" + JSON.stringify(numBalls));
        callback(numBalls);
    })
}

function getBall(callback, id){
    $.ajax({
        method: "GET",
        url: '/balls/' + id,
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Ball Received" + JSON.stringify(ball));
        callback(ball);
    })
}

function updateBall(ball) {
    $.ajax({
        method: 'PUT',
        url: '/balls/' + ball.id,
        data: JSON.stringify(ball),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (ball) {
        console.log("Updated ball: " + JSON.stringify(ball))
    })
}

function deleteBall(ballId) {
    $.ajax({
        method: 'DELETE',
        url: '/balls/' + ballId
    }).done(function (ball) {
        console.log("Deleted ball " + ballId)
    })
}

function createEstado(callback, estado) {
    $.ajax({
        method: "POST",
        url: '/estado',
        data: JSON.stringify(estado),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (estado) {
        console.log("Estado created: " + JSON.stringify(estado));
        callback(estado);
    })
}

function getEstado(callback, id){
    $.ajax({
        method: "GET",
        url: '/estado/' + id,
        //data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (estado) {
        console.log("Estado Received" + JSON.stringify(estado));
        callback(estado);
    })
}

function updateEstado(estado) {
    $.ajax({
        method: 'PUT',
        url: '/estado/' + estado.id,
        data: JSON.stringify(estado),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (estado) {
        console.log("Updated estado: " + JSON.stringify(estado))
    })
}

function deleteEstado(estadoId) {
    $.ajax({
        method: 'DELETE',
        url: '/estado/' + estadoId
    }).done(function (estado) {
        console.log("Deleted Estado " + estadoId)
    })
}