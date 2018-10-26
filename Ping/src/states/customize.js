Ping.customizeState = function(game) {

}
//Color por defecto
var color= 'assets/images/raqueta.png';
Ping.customizeState.prototype = {

    preload: function() {

    },

    create: function() {
    	var text = "Color";
    	var style = { font: "50px Arial", fill: "#ffffff", align: "center" };
    	var color_texto = game.add.text(340, 225, text, style);
        var jugar_boton = game.add.button(515, 500, 'jugar', this.levelOnClick, this, 1, 0, 0);
        var volver_boton = game.add.button(115, 500, 'volver', this.menuOnClick, this, 1, 0, 0);
        //Dependiendo en cual clickes asi sera tu raqueta
        var button = game.add.button(215 ,game.world.centerY, 'blue' , this.blue, this, 2, 1, 0);
        var button = game.add.button(315, game.world.centerY, 'red' , this.red, this, 2, 1, 0);
        var button = game.add.button(415, game.world.centerY, 'yellow' , this.yellow, this, 2, 1, 0);
        var button = game.add.button(515, game.world.centerY, 'green' , this.green, this, 2, 1, 0);

        palas = game.add.sprite(game.world.centerX - game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas2 = game.add.sprite(game.world.centerX + game.world.centerX*0.83, game.world.centerY, 'raqueta');
        palas.scale.setTo(0.5, 0.5);
        palas.anchor.setTo(0.5, 0.5);
        palas2.scale.setTo(0.5, 0.5);
        palas2.anchor.setTo(0.5, 0.5);
    },

    update: function() {

    },
    menuOnClick: function() {

        game.state.start('menuState')
 
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