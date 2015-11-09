
FinalStand .Game = function() {
    var enemyHP = 100;
}

FinalStand.Game.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.player = this.add.sprite(100, -this.world.height, 'player');
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.anchor.setTo(0.5, 1);
        this.weapons= new gun.AK(this.game);

        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.spawnEnemy();
        
        this.shoot = this.input.keyboard.addKey(Phaser.Keyboard.L);
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
        if (this.shoot.isDown) {
            this.weapons.fire(this.player);
        }

    },
    
    spawnEnemy: function() {
        this.enemy = this.game.add.sprite(540, 150, 'enemy');
        this.game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
        this.walk = this.enemy.animations.add('walk');
        this.enemy.body.collideWorldBounds = true;
        this.enemy.body.fixedRotation = false;
        this.enemyText = this.game.add.text(this.enemy.body.x, this.enemy.body.y - 30, this.enemyHP);
        this.enemy.animations.play('walk', 30, true);
    }
}

