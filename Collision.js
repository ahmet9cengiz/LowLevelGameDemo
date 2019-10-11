function CircleCollision(x, y, width, height){
    var wOver2 = width/2;           //sprite's width over 2
    var hOver2 = height/2;          //sprite's height over 2

    var topLeftX = x - wOver2;      //X coordinate of the top left corner of the sprite
    var topLeftY = y - hOver2;      //Y coordinate of the top left corner of the sprite

    var topRightX = x + wOver2;     //X coordinate of the top right corner of the sprite
    var topRightY = y - hOver2;     //Y coordinate of the top right corner of the sprite

    var downLeftX = x - wOver2;     //X coordinate of the down left corner of the sprite
    var downLeftY = y + hOver2;     //Y coordinate of the down left corner of the sprite

    var downRightX = x + wOver2;    //X coordinate of the down right corner of the sprite
    var downRightY = y + hOver2;    //Y coordinate of the down right corner of the sprite

    this.distanceFromCenterToTopLeft = distanceBetweenDots(x, y, topLeftX, topLeftY);
    this.distanceFromCenterToTopRight = distanceBetweenDots(x, y, topRightX, topRightY);
    this.distanceFromCenterToDownLeft = distanceBetweenDots(x, y, downLeftX, downLeftY);
    this.distanceFromCenterToDownRight = distanceBetweenDots(x, y, downRightX, downRightY);

    this.rightWall = x - wOver2;
    this.leftWall = x - wOver2;
    this.upWall = y - hOver2;
    this.downWall = y + hOver2;

    this.radius = Math.max(wOver2, hOver2);
}

function BoxCollision(x, y, width, height){
    var wOver2 = width/2;           //sprite's width over 2
    var hOver2 = height/2;          //sprite's height over 2

    var topLeftX = x - wOver2;      //X coordinate of the top left corner of the sprite
    var topLeftY = y - hOver2;      //Y coordinate of the top left corner of the sprite

    var topRightX = x + wOver2;     //X coordinate of the top right corner of the sprite
    var topRightY = y - hOver2;     //Y coordinate of the top right corner of the sprite

    var downLeftX = x - wOver2;     //X coordinate of the down left corner of the sprite
    var downLeftY = y + hOver2;     //Y coordinate of the down left corner of the sprite

    var downRightX = x + wOver2;    //X coordinate of the down right corner of the sprite
    var downRightY = y + hOver2;    //Y coordinate of the down right corner of the sprite

    this.distanceFromCenterToTopLeft = distanceBetweenDots(x, y, topLeftX, topLeftY);
    this.distanceFromCenterToTopRight = distanceBetweenDots(x, y, topRightX, topRightY);
    this.distanceFromCenterToDownLeft = distanceBetweenDots(x, y, downLeftX, downLeftY);
    this.distanceFromCenterToDownRight = distanceBetweenDots(x, y, downRightX, downRightY);

    this.rightWall = x - wOver2;
    this.leftWall = x - wOver2;
    this.upWall = y - hOver2;
    this.downWall = y + hOver2;
}