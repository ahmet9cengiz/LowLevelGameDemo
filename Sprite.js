/**=========================================================
 * @author              ahcengiz
 * @fileName            sprite.js
 *
 * @param imageUrl      image url of the sprite
 * @param width         width of the sprite
 * @param height        height of the sprite
 *========================================================*/

function Sprite(imageUrl, width, height, canvasW, canvasH){
    this.image = new Image();
    this.image.src = imageUrl;
    this.width = width;
    this.height = height;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.imageAngle = 0;
    this.x = 0;
    this.y = 0;
    this.dx = 5;
    this.dy = 3;
    this.visible = true;
    this.boundaryStyle = WRAP;

    this.setImageSize = function (width, height) {
        this.width = width;
        this.height = height;
    };

    this.setImage = function (imageUrl) {
        this.image.src = imageUrl;
    };

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };

    this.setX = function (x) {
        this.x = x;
    };

    this.setY = function (y) {
        this.y = y;
    };

    this.setDx = function (dx) {
        this.dx = dx;
    };

    this.setDy = function (dy) {
        this.dy = dy;
    };

    this.updatePosition = function(){
        this.x += this.dx;
        this.y += this.dy;
    };

    this.hide = function(){
        this.visible = false;
    };

    this.show = function(){
        this.visible = true;
    };

    this.boundaryCheck = function(){
        //boolean variables to show if the sprite pass any of the walls
        var passRight = false;
        var passLeft = false;
        var passUp = false;
        var passDown = false;

        if(this.x > this.canvasW){
            passRight = true;
        }
        if(this.x < 0){
            passLeft = true;
        }
        if(this.y < 0){
            passUp = true;
        }
        if(this.y > this.canvasH){
            passDown = true;
        }

        if(this.boundaryStyle === WRAP){
            this.WRAP(passRight, passLeft, passUp, passDown);
        }
        else if (this.boundaryStyle === DIE) {
            this.DIE(passRight, passLeft, passUp, passDown);
        }
        else if (this.boundaryStyle === BOUNCE) {
            this.BOUNCE(passRight, passLeft, passUp, passDown);
        }
        else if (this.boundaryStyle === CONTINUE) {
            //DO NOTHING
        }
        else if (this.boundaryStyle === STOP) {
            this.STOP(passRight, passLeft, passUp, passDown);
        }
        else {
            //IF ANYTHING ELSE CONTINUE
        }

        /*
        //update speed and movement angle since dx and dy might be changed
        this.calculateSpeedAndMovementAngle();
        //update the imageAngle as it is connected to the movementAngle
        this.setImageAngleByMovement();
        */
    };

    this.WRAP = function(passRight, passLeft, passUp, passDown){
        if(passRight){
            this.x = 0;
        }
        else if(passLeft){
            this.x = this.canvasW;
        }
        if(passDown){
            this.y = 0;
        }
        else if(passUp){
            this.y = this.canvasH;
        }
    };

    this.BOUNCE = function(passRight, passLeft, passUp, passDown){
        if(this.dx !== 0) {
            if (passRight || passLeft) {
                //reverse the direction of the sprite along the x axis
                this.dx *= -1;
            }
            if (passUp || passDown) {
                //reverse the direction of the sprite along the y axis
                this.dy *= -1
            }
        }
        else{ //calls the stop boundaryStyle
            this.STOP(passRight, passLeft, passUp, passDown);
        }
    };

    this.STOP = function(passRight, passLeft, passUp, passDown){
        //make the sprite stay at the same place, I don't simply do dx(or dy) = 0
        //because dx might be equal to 0 anyways. That doesn't guarantee to stop.
        //if there is dx(or dy) the sprite will force its way but will only slide on
        //that edge
        if(passRight){
            this.x = this.canvasW;
        }
        else if(passLeft){
            this.x = 0;
        }
        if(passUp){
            this.y = 0;
        }
        else if(passDown){
            this.y = this.canvasH;
        }
    };

    this.DIE = function(passRight, passLeft, passUp, passDown){
        if (passRight || passLeft || passUp || passDown) {
            this.hide();
        }
    };



}