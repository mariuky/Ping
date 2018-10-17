


function preload() {

    game.load.image('catcher', 'assets/images/catcher.png');

}

function create() {

    var paddle = game.add.sprite(game.world.centerX, game.world.centerY, 'catcher');
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);

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