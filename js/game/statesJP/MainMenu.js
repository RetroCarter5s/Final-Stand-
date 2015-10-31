FinalStand.MainMenu = function() {}

FinalStand.MainMenu.prototype = {    
    create: function(){
        
        
        this.background = this.add.sprite(0,0,'background');
        
        this.background.scale.setTo(5);
        this.add.text(600, 300, "Current State:MainMenu.", { font: "16px Arial", fill: "#ffffff" });
        this.add.text(615, 325, "Click to Start Game.", { font: "16px Arial", fill: "#ffffff" });
        this.peach = this.add.sprite(0,0,'dk');
    },
    
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start("Game");
        }
    }
    
}

