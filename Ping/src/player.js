var player = {
id: 0,
paddle,
dir
};

function create (_id){
id = _id;
dir = 0;
paddle = game.add.sprite(game.world.centerX, 500, 'Ping', 'paddle.png');
paddle.anchor.setTo(game.width - 20,game.height / 2);
game.physics.enable(paddle, Phaser.Physics.ARCADE);
paddle.body.collideWorldBounds = true;
paddle.body.bounce.set(1);
paddle.body.immovable = true;
}

function update (){
if (paddle.y < 24)
       paddle.y = 24;
else if (paddle.y > game.height - 24)
       paddle.y = game.height - 24;
  
}