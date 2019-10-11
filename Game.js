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
                this.context.rotate(this.spriteArray[i].imageAngle);
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
        this.drawSprites();
    };

    this.boundaryCheckForSprites = function(){
        for(var i=0; i<this.spriteArray.length; i++){
            if(this.spriteArray[i].visible){
                this.spriteArray[i].boundaryCheck();
            }
        }
    }



}