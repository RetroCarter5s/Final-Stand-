//Creating an global variable of the StreetBrawler object. Must only be done once
var FinalStand = function () {};

FinalStand.Boot = function () {};

FinalStand.Boot.prototype = {
    
    //adding methods to the class
    preload: function () {
        // use your own images;
        this.load.image('preloadBar', 'assets/images/preloader-bar.png');

    },
    create: function() {
        
        this.game.stage.backgroundColor = "fff";
        
        //how many fingers/ clickers you want
        this.input.maxPointers=1;
        
        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        }
        else {
            this.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 568;
            this.scale.minHeight = 600;
            this.scale.maxWidth = 2048;
            this.scale.maxHeight = 1536;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally= true;
            this.scale.setScreenSize(true);
        }
        // this a all the game configurations 
        // now begins the loading of the actual game assests
        // this command will move the game on to the next state
        this.state.start('Preload');
    }
};
