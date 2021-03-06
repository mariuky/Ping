game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv')
  
game.state.add('bootState', Ping.bootState)
game.state.add('preloadState', Ping.preloadState)
game.state.add('menuState', Ping.menuState)
game.state.add('levelState', Ping.levelState)
game.state.add('endingState', Ping.endingState)
game.state.add('creditsState', Ping.creditsState)
game.state.add('customizeState', Ping.customizeState)
game.state.add('matchingState', Ping.matchingState)
game.state.start('bootState')
