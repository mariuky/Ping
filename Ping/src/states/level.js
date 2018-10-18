    var pj1;
    var pj2;
    var ball;
Ping.levelState = function(game) {
    
	var gm;


}

Ping.levelState.prototype = {

    
    preload: function() {
        
    },
    
    create: function() {
       /* gm = new gameManager(game,1);           
        pj = new player(game,'catcher',0);
        console.log(pj);
        gm.addPlayer(pj);*/
        //game.physics.startSystem(Phaser.Physics.ARCADE);

            this.up1Key = game.input.keyboard.addKey(Phaser.Keyboard.W);
            this.down1Key = game.input.keyboard.addKey(Phaser.Keyboard.S);
            this.up2Key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.down2Key = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        pj1 = game.add.sprite(game.world.centerX - game.world.centerX*0.8,game.world.centerY, 'catcher');
        console.log(pj1);
        pj2 = game.add.sprite(game.world.centerX + game.world.centerX*0.8,game.world.centerY, 'catcher');
        ball = game.add.sprite(game.world.centerX - game.world.centerX*0.5,game.world.centerY, 'cat');
        game.physics.enable(ball,Phaser.Physics.ARCADE);
        game.physics.enable(pj1,Phaser.Physics.ARCADE);
        game.physics.enable(pj2,Phaser.Physics.ARCADE);

        ball.body.setCircle(25);
        ball.body.velocity.setTo(200, 100);
        ball.body.collideWorldBounds = true; //para que colisione con el mundo
        pj1.enableBody = true;
        pj2.enableBody = true;
        pj1.body.collideWorldBounds = true;
        pj2.body.collideWorldBounds = true;

        ball.body.bounce.setTo(1, 1); //rozamiento al colisionar, (1, 1) es sin rozamiento

        //gm.addPelota();
        //game.add.sprite(0,0,'bg');
        //game.add.sprite(32,32,'cat');
        game.stage.backgroundColor = "#000000";
        
    },

    update: function() {

    game.physics.arcade.collide(pj1,ball);
    game.physics.arcade.collide(pj2,ball);
    


        

        pj1.body.velocity.x = 0;
        pj1.body.velocity.y = 0;
         if (this.up1Key.isDown)
            pj1.body.velocity.y = -200;
         if (this.down1Key.isDown)
            pj1.body.velocity.y = 200;

        pj2.body.velocity.y = 0;
        pj2.body.velocity.x = 0;
         if (this.up2Key.isDown)
            pj2.body.velocity.y = -200;
         if (this.down2Key.isDown)
            pj2.body.velocity.y = 200;

       }
    
}












/*



ball = function(game){

    Phaser.Sprite.call(this,game,game.world.centerX,game.world.centerY,'pelota',0);
    this.scale.setTo(0.8, 0.8); //escala el sprite pelota (por debajo de 1, si no se ve borrosa)
    //Fisicas pelota:
    game.physics.enable(this,Phaser.Physics.ARCADE);
    this.body.setCircle(25);
    this.body.velocity.setTo(200, 100);
    this.body.collideWorldBounds = true; //para que colisione con el mundo
    this.body.bounce.setTo(1, 1); //rozamiento al colisionar, (1, 1) es sin rozamiento
}

ball.prototype = Object.create(Phaser.Sprite.prototype);

ball.constructor = ball;


gameManager = function(game, _numplayers) {
    var myGame = game;
    var numplayers = _numplayers;
    var myplayers = [];
    var pelota;
}

gameManager.constructor = gameManager;

gameManager.prototype = {
    
    addPlayer: function(_player) {

        this.myplayers.push(_player);
   

    },
    addPelota: function(){
        pelota = new ball(this.myGame)

    },
   update: function() {
                var i;
    for (i = 0; i < this.numplayers; i++) 
        this.myplayers[i].handleEvents();
    }    

}

player = function(game,sprite,_id){

   	Phaser.Sprite.call(this,game,_id*game.world.width,game.world.centerY,sprite,0);
    game.physics.enable(this,Phaser.Physics.ARCADE);
    
    var id = _id;
    var dir;
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    this.body.enable = true;
    this.body.gravity.x = 0;
    this.body.gravity.y = 0;

    if (this.id = 0){
    upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downKey = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
                    }
    if (this.id = 1){
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
          this.dir = NONE;
    
     if(rightKey.isDown)
          this.dir = NONE;

      this.move();
}

player.prototype.move = function () {

        if (this.dir = UP)
            this.sprite.body.velocity.y = 500;
        if (this.dir = DOWN)
            this.sprite.body.velocity.y = -500;
        if (this.dir = NONE)
            this.sprite.body.velocity.y = 0;
    }*/