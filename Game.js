/**=========================================================
 * @author              ahcengiz
 * @fileName            Game.js
 *========================================================*/

function Game(){
    this.canvas = document.createElement("canvas");
    this.canvas.width = 700;
    this.canvas.height = 600;
    this.canvas.style.backgroundColor = "lightblue";
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);


    this.spriteArray = [];

    this.addSprite = function(sprite){
        this.spriteArray.push(sprite);
    };

    this.drawSprites = function(){
        this.context.save();
        for(var i=0; i<this.spriteArray.length; i++){
            if(this.spriteArray[i].visible){
                //TODO Ask Andy
                //this.context.translate(this.spriteArray[i].x, this.spriteArray[i].y);
                //this.context.rotate(this.spriteArray[i].imageAngle);
                this.context.drawImage(this.spriteArray[i].image,
                    this.spriteArray[i].x - this.spriteArray[i].width/2,
                    this.spriteArray[i].y - this.spriteArray[i].height/2,
                    this.spriteArray[i].width, this.spriteArray[i].height);
            }
        }
        this.context.restore();
    };

    this.clear = function(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    };

    this.start = function(){
        document.onkeydown = this.keysUpdate;
        document.onkeyup = this.keysClear;
        this.intervalID = setInterval(update,30);
    };

    this.stop = function(){
        clearInterval(this.intervalID);
    };

    this.keysUpdate = function(e){
        keysPressed[e.keyCode] = true;
        console.log(e.keyCode);
    };

    this.keysClear = function(e){
        keysPressed[e.keyCode] = false;
    };

    this.updateSprites = function(){
        this.boundaryCheckForSprites();
        for(var i=0; i<this.spriteArray.length; i++){
            if(this.spriteArray[i].visible){
                this.spriteArray[i].updatePosition();
            }
        }
        this.checkSpriteCollisions();
        this.drawSprites();
    };

    this.boundaryCheckForSprites = function(){
        for(var i=0; i<this.spriteArray.length; i++){
            if(this.spriteArray[i].visible){
                this.spriteArray[i].boundaryCheck();
            }
        }
    };

    this.checkCollisionBetween = function(sprite1, sprite2){
        var collision = false;
        if(sprite1.visible && sprite2.visible) {
            if (sprite1.collisionStyle === CIRCLE && sprite2.collisionStyle === CIRCLE) {
                var distanceBetweenCenters = distanceBetweenDots(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
                if (distanceBetweenCenters < (sprite1.collision.radius + sprite2.collision.radius)) {
                    console.log(distanceBetweenCenters);
                    console.log(sprite1.collision.radius);
                    console.log(sprite2.collision.radius);
                    collision = true;
                }
            }
            else{   //if one of them is not circle, we treat them both as boxes. Circles also have wall properties
                collision = true;
                if ((sprite1.collision.downWall < sprite2.collision.upWall) ||
                    (sprite1.collision.upWall > sprite2.collision.downWall) ||
                    (sprite1.collision.rightWall < sprite2.collision.leftWall) ||
                    (sprite1.collision.leftWall > sprite2.collision.rightWall)) {
                    console.log("not collision");
                    collision = false;
                }
            }
            return collision;
        }
        else{
            return false;
        }
    };

    this.checkSpriteCollisions = function(){
        for(var i=1; i<this.spriteArray.length; i++){
            if(this.checkCollisionBetween(this.spriteArray[0], this.spriteArray[i])){
                console.log("COLLIDE");
            }
        }
    }


}