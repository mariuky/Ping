CatCatcher.levelState = function(game) {

}

CatCatcher.levelState.prototype = {

    preload: function() {
        
    },

    create: function() {

    	game.add.sprite(0,0,'bg');
    	game.add.sprite(16,16,'catcher');
    	game.add.sprite(32,32,'cat');
		
    },

    update: function() {
    	cursors = game.input.keyboard.createCursorKeys();
		//  Reset the players velocity (movement)
    	catcher.body.velocity.y = 0;

    	//  Allow the player to jump if they are touching the ground.
    	if (cursors.up.isDown)
    	{
        	catcher.body.velocity.y = -350;
    	}
    	if (cursors.down.isDown)
    	{
        	catcher.body.velocity.y = 350;
    	}
    	if (cursors.right.isDown)
    	{
        	catcher.body.velocity.x = 350;
    	}
    	if (cursors.left.isDown)
    	{
        	catcher.body.velocity.x = -350;
    	}
    }
}