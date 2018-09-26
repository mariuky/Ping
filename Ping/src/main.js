var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            
        scene: {
            preload: preload,
            create: create
        }
    }
 };

var Ping = new Phaser.Game(config);

    function preload ()
    {
     
    }

    function create ()
    {
         game.physics.startSystem(Phaser.Physics.ARCADE);
         game.physics.arcade.checkCollision.down = false;
    }

    function update () {




    }

    function handleEvents(){}