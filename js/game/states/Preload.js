
FinalStand.Preload = function (){};

FinalStand.Preload.prototype = {
    preload: function() {
        // here you load all the game images and what not
        //note to self you have to preload all the assets you want to use in the state before. Then you can actually use them. Cant use             them if you preload and create them in the same state.

        this.load.image('background', 'assets/images/checkerboard.png');
        this.load.image('preloadBar', 'assets/images/preloader-bar.png')

        //this.load.image('player', 'assets/images/player.png');
        this.load.image('enemy','assets/images/enemy.png');
        this.load.image('AK','assets/images/AK.png');
        this.load.image('bullet','assets/images/bullet.png');
        this.load.spritesheet('player' , 'assets/images/BadassGirl.png');
        this.load.image('enemy','assets/images/MrAss.png');
        this.load.game.load.spritesheet('enemy', 'assets/images/Zombies.png', 30, 32);

    },
    create: function() {
        this.state.start('MainMenu');
    }
   
};
