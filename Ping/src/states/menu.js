Ping.menuState = function(game) {

}

Ping.menuState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'CatCatcher', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'Press w to play', {font: '25px Arial', fill: '#ffffff'});
    	var wkey=game.input.keyboard.addKey(Phaser.Keyboard.W);

    	wkey.onDown.addOnce(this.start, this);
    	
    },
    start: function(){
    	game.state.start('levelState')
    },
    update: function() {

    }
}