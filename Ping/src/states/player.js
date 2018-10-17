
<<<<<<< HEAD


function preload() {

    game.load.image('catcher', 'assets/images/catcher.png');

}

function create() {

    var paddle = game.add.sprite(game.world.centerX, game.world.centerY, 'catcher');
=======
function player(game,sprite,_id){

   	Phaser.Sprite.call(this,game,_id*game.world.width,game.world.centerY,sprite,0);
    game.phisycs.arcade.enable(this);
    
    var id = _id;
    var dir;
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    this.body.enable = true;
    this.body.gravity.x = 0;
    this.body.gravity.y = 0;

    if (this.id = 1){
>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
<<<<<<< HEAD

}

function update() {

    if(upKey.isDown)
    {
        player.y = player.y - 3;
    }
    else if(downKey.isDown)
    {
        player.y = player.y + 3;
    }

    if(leftKey.isDown)
    {
        player.x = player.x - 3;
    }
    else if(rightKey.isDown)
    {
        player.x = player.x + 3;
    }

}
=======
                    }
    if (this.id = 2){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
					}
}
player.prototype = Object.create(Phaser.Sprite.prototype);
player.constructor = player;

player.prototype.handleEvents = function(){

    this.dir = NONE;
    if(upKey.isDown)
          this.dir = UP;
    
     if(downKey.isDown)
          this.dir = DOWN;
    
    if(leftKey.isDown)
          this.dir = LEFT;
    
     if(rightKey.isDown)
          this.dir = RIGHT;

      this.move();
}

player.prototype.move = function () {

        if (this.dir = UP)
            this.sprite.body.velocity.y = 500;
        if (this.dir = DOWN)
            this.sprite.body.velocity.y = -500;
        if (this.dir = NONE)
            this.sprite.body.velocity.y = 0;

}
module.exports = player;
>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
