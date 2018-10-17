<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
=======
>>>>>>> parent of f34ff71... Creado Player en levelstate hasta que podamos introducirlo desde otro js. Actualmente fallla el array de jugadores ya que no está definido
Ping.creditsState = function(game) {
}

Ping.creditsState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	var nameLabel= game.add.text(80, 80, 'Cosas', {font: '25px Arial', fill: '#ffffff'});
    	var startLabel=game.add.text(80, game.world.height-80, 'y tal', {font: '25px Arial', fill: '#ffffff'});
        var button = game.add.button(game.world.centerX - 95, 400, 'button', this.menuOnClick, this, 2, 1, 0);
    	
    },
    
    update: function() {

    },
    menuOnClick: function() {

        game.state.start('menuState')
 
    },
    

}