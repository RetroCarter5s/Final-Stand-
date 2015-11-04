FinalStand.Preload = function (){};

FinalStand.Preload.prototype = {
    preload: function() {

        this.load.image('background', 'assets/images/background.png');
    
        
        this.load.image('dk' ,'assets/images/dk.png');
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY+ 128, 'preloadBar');
        this.preloadBar = this.preloadBar.anchor.setTo(0.5);
        this.add.text(16, 16, "State: preload", { font: "16px Arial", fill: "#ffffff" }); 
    },
    
    create: function() {
        this.state.start('MainMenu');
        
    
   
    }
}

