Ping.customizeState = function(game) {

}
//Color por defecto
var color= 'assets/images/raqueta.png';
Ping.customizeState.prototype = {

    preload: function() {

    },

    create: function() {
    	var text = "customizar";
    	var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    	var t = game.add.text(game.world.centerX -150, 250, text, style);
        var button = game.add.button(game.world.centerX - 95, 400, 'jugar', this.levelOnClick, this, 1, 0, 0);
        //Dependiendo en cual clickes asi sera tu raqueta
        var button = game.add.button(400 ,game.world.centerY, 'blue' , this.blue, this, 2, 1, 0);
        var button = game.add.button(500, game.world.centerY, 'red' , this.red, this, 2, 1, 0);
        var button = game.add.button(600, game.world.centerY, 'yellow' , this.yellow, this, 2, 1, 0);
        var button = game.add.button(700, game.world.centerY, 'green' , this.green, this, 2, 1, 0);
    	
    },

    update: function() {

    },
    levelOnClick: function() {

        game.state.start('levelState')
 
    },
    blue: function(){          
            color='assets/images/raqueta_azul.png'
    },
    red: function(){
            color='assets/images/raqueta_roja.png'
    }, 
    yellow: function(){
            color='assets/images/raqueta_amarilla.png'
    },     
    green: function(){
            color='assets/images/raqueta_verde.png'
    }, 

}