//creating a game object
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//adding the games states that the game will have 
game.state.add('Boot', FinalStand.Boot);
game.state.add('Preload', FinalStand.Preload);
game.state.add('MainMenu',FinalStand.MainMenu);
game.state.add('Game',FinalStand.Game);
//starts the Boot game state
game.state.start('Boot');

