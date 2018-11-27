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
<<<<<<< HEAD
        url: '/game',
=======
        url: 'http://localhost:8080/game',
>>>>>>> a7e3d61d62d374cf39ed4745be40abe54bc58eae
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
<<<<<<< HEAD
        url: '/game',
=======
        url: 'http://localhost:8080/game',
>>>>>>> a7e3d61d62d374cf39ed4745be40abe54bc58eae
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
<<<<<<< HEAD
        url: '/game/' + id,
=======
        url: 'http://localhost:8080/game/' + id,
>>>>>>> a7e3d61d62d374cf39ed4745be40abe54bc58eae
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
<<<<<<< HEAD
        url: '/game/' + player.id,
=======
        url: 'http://localhost:8080/game/' + player.id,
>>>>>>> a7e3d61d62d374cf39ed4745be40abe54bc58eae
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
<<<<<<< HEAD
        url: '/game/' + playerId
=======
        url: 'http://localhost:8080/game/' + playerId
>>>>>>> a7e3d61d62d374cf39ed4745be40abe54bc58eae
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
        console.log("Info Received" + JSON.stringify(ball));
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

function deletePlayer(ballId) {
    $.ajax({
        method: 'DELETE',
        url: '/balls/' + ballId
    }).done(function (ball) {
        console.log("Deleted ball " + ballId)
    })
}