game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv')
  
<<<<<<< HEAD
game.state.add('bootState', Ping.bootState)
game.state.add('preloadState', Ping.preloadState)
game.state.add('menuState', Ping.menuState)
game.state.add('levelState', Ping.levelState)
game.state.add('endingState', Ping.endingState)
=======
game.state.add('bootState', CatCatcher.bootState)
game.state.add('preloadState', CatCatcher.preloadState)
game.state.add('menuState', CatCatcher.menuState)
game.state.add('levelState', CatCatcher.levelState)
game.state.add('endingState', CatCatcher.endingState)
game.state.add('creditsState', CatCatcher.creditsState)
>>>>>>> b9a57135a45ba120069587da47c15cf81a1429a3
  
game.state.start('bootState')
