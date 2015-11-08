
FinalStand .Game = function() {}

FinalStand.Game.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.player = this.add.sprite(100, -this.world.height, 'player');
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.anchor.setTo(0.5, 1);
        

        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
    },
// neghdshnrzjshjghaegnsgrjsgrnxfghmsmsryfghfnh
    update: function() {
        if (this.rightKey.isDown) {
            this.player.body.velocity.x = 275;
            this.player.scale.x = 1;
        }
        else if (this.leftKey.isDown) {
            this.player.body.velocity.x = -275;
            this.player.scale.x = -1
        }
        else if (this.upKey.isDown) {
            this.player.body.velocity.y = -275;
        }
        else if (this.downKey.isDown) {
            this.player.body.velocity.y = 275;
        }
        else{
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
        }
    }
}

