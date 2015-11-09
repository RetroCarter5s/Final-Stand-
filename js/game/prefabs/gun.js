var gun = {};

    ////////////////////////////////////////////////////
    //  A single bullet is fired in front of the ship //
    ////////////////////////////////////////////////////

    gun.AK = function (game) {

        Phaser.Group.call(this, game, game.world, 'AK', false, true, Phaser.Physics.ARCADE);

        this.nextFire = 0;
        this.bulletSpeed = 600;
        this.fireRate = 100;

        for (var i = 0; i < 64; i++)
        {
            this.add(new bullet(game, 'bullet'), true);
        }

        return this;

    };

    gun.AK.prototype = Object.create(Phaser.Group.prototype);
    gun.AK.prototype.constructor = gun.AK;

    gun.AK.prototype.fire = function (source) {
        
        if (this.game.time.time < this.nextFire) { return; }
        console.log("butch");
        if(source.scale.x==1){
            var x = source.x + 10;
            var y = source.y + 10;
        }
        else if(source.scale.x==-1){
            var x = source.x - 10;
            var y = source.y - 10;
        }
        this.getFirstExists(false).fire(x, y,0, this.bulletSpeed, 0, 0);

        this.nextFire = this.game.time.time + this.fireRate;

    };