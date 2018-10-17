game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv')
  
game.state.add('bootState', Ping.bootState)
game.state.add('preloadState', Ping.preloadState)
game.state.add('menuState', Ping.menuState)
game.state.add('levelState', Ping.levelState)
game.state.add('endingState', Ping.endingState)
game.state.add('creditsState', Ping.creditsState)
<<<<<<< HEAD
  
=======

>>>>>>> f34ff71924374386c4340166c635b65a79e64ec6
game.state.start('bootState')
