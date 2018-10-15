Ping.player = function(game){
   
        var id;
        var mysprite;
        var dir;
}

Ping.player.prototype =  {

preload: function() {

    game.load.image('catcher', 'assets/images/catcher.png');

},

 create: function(_id,_sprite){
    this.id = _id;
    //el sprite se crearia en el menu de eleccion de color de personaje
    this.mysprite = game.add.sprite(game.world.centerX, game.world.centerY, 'catcher');
    //this.sprite = _sprite;
    if (this.id = 1){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
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

}