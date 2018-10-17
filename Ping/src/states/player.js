Ping.player = function(game){
   
        var id;
        var mysprite;
        var dir;
}

<<<<<<< HEAD
<<<<<<< HEAD


function preload() {

    game.load.image('catcher', 'assets/images/catcher.png');

}

function create() {

    var paddle = game.add.sprite(game.world.centerX, game.world.centerY, 'catcher');
=======
function player(game,sprite,_id){
=======
Ping.player.prototype =  {
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido

preload: function() {

    game.load.image('catcher', 'assets/images/catcher.png');

},

 create: function(_id,_sprite){
    this.id = _id;
    //el sprite se crearia en el menu de eleccion de color de personaje
    this.mysprite = game.add.sprite(game.world.centerX, game.world.centerY, 'catcher');
    //this.sprite = _sprite;
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
},

 update: function(){

        if (this.dir = UP)
            this.sprite.body.velocity.y = 500;
        if (this.dir = DOWN)
            this.sprite.body.velocity.y = -500;
        if (this.dir = NONE)
            this.sprite.body.velocity.y = 0;

},
    handleEvents: function(){
    this.dir = NONE;
    if(upKey.isDown)
          this.dir = UP;
    
     if(downKey.isDown)
          this.dir = DOWN;
    
    if(leftKey.isDown)
          this.dir = LEFT;
    
     if(rightKey.isDown)
          this.dir = RIGHT;
    
    }

<<<<<<< HEAD
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
=======
}
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
