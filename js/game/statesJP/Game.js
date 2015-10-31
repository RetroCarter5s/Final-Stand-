FinalStand .Game = function() {}

FinalStand.Game.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.add.text(16, 16, "Current State: Game.", { font: "16px Arial", fill: "#ffffff" });
        this.spawnEnemy();
    },
    
    spawnEnemy: function() {
        this.enemy = this.game.add.sprite(540, 150, 'dk');
        this.game.Physics.enable(this.enemy, Phaser.Physics.ARCADE);
        this.enemy.body.gravity.y = true;
        this.enemy.body.fixedRotation = true;
        this.enemy.frame = 1;
        this.enemyText = this.game.add.text(this.enemy.body.x, this.enemy.body.y - 30, this.enemyHP);
    },
//and shit
}