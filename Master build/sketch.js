//"use strict";
//declare an array with 4 ghosts
var ghosts = new Array(4);
//Declare player object
var player;
// Variable used for restarting the game after there are no lives left
var start = true;
//Check if the game just launched
var first = true;
// Logo image
var gameoverImg;
//Time
var oldTime;
var newTime;
// variable used for setInterval
var move
var foodCount = 0;
var grid = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            , [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]
            , [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
            , [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
            , [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
            , [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
            , [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            , [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]
            , [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1]
            , [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
            , [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]
            , [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1]
            , [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]
            , [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1]
            , [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1]
            , [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
            , [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1]
            , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
var food;

function setFood() {
    food = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
              , [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]
              , [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
              , [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
              , [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
              , [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
              , [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
              , [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]
              , [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1]
              , [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
              , [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]
              , [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1]
              , [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]
              , [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1]
              , [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1]
              , [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
              , [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1]
              , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
}
//sounds
var beginningSound;
var chompSound;
var superFoodSound
var eatGhostSound;
var deathSound;
class Actor {
    constructor(row, col, img) {
        this.row = row;
        this.col = col;
        this.img = img;
    }
    drawSelf() {
        image(this.img, this.col * 32 + 4, this.row * 32 + 4)
    }
}
class Ghost extends Actor {
    constructor(row, col, img) {
            super(row, col, img);
            this.xdir = 0;
            this.ydir = 0;
        }
        // change direction of pacman
    moveRight() {
        this.xdir = 1;
        this.ydir = 0;
    }
    moveLeft() {
        this.xdir = -1;
        this.ydir = 0;
    }
    moveUp() {
        this.xdir = 0;
        this.ydir = -1;
    }
    moveDown() {
            this.xdir = 0;
            this.ydir = 1;
        }
        // move pacman
    move() {
        this.chooseDirection();
        this.tempRow = this.row + this.ydir;
        this.tempCol = this.col + this.xdir;
        if (grid[this.tempRow][this.tempCol] == 1) {
            this.ydir = 0;
            this.xdir = 0;
        }
        else {
            var colliding = false;
            for (var i = 0; i < 4; i++) {
                if (ghosts[i].row == this.tempRow && ghosts[i].col == this.tempCol) {
                    colliding = true;
                }
            }
            if (!colliding) {
                this.row += this.ydir;
                this.col += this.xdir;
                if (this.row == player.row && this.col == player.col) {
                    player.getHit();
                }
                console.log("moving" + this.xdir + this.ydir);
            }
        }
    }
    chooseDirection() {
        if (player.row < this.row && grid[this.row - 1][this.col] == 0) {
            this.moveUp();
        }
        else if (player.col > this.col && grid[this.row][this.col + 1] == 0) {
            this.moveRight();
        }
        else if (player.col < this.col && grid[this.row][this.col - 1] == 0) {
            this.moveLeft();
        }
        else if (player.col > this.row && grid[this.row + 1][this.col] == 0) {
            this.moveDown();
        }
    }
    getHit() {
        //player eats the ghost
    }
}
class Player extends Actor {
    constructor(row, col, img) {
            super(row, col, img);
            this.xdir = 0;
            this.ydir = 0;
            this.score = 0;
            this.lives = 3;
            this.direction = "right";
            this.xoffset = 0;
            this.yoffset = 0;
        }
        // change direction of pacman
    moveRight() {
        this.xdir = 1;
        this.ydir = 0;
    }
    moveLeft() {
        this.xdir = -1;
        this.ydir = 0;
    }
    moveUp() {
        this.xdir = 0;
        this.ydir = -1;
    }
    moveDown() {
            this.xdir = 0;
            this.ydir = 1;
        }
        // move pacman
    move() {
        this.tempRow = this.row + this.ydir;
        this.tempCol = this.col + this.xdir;
        if (grid[this.tempRow][this.tempCol] == 1) {
            this.ydir = 0;
            this.xdir = 0;
        }
        else {
            this.row += this.ydir;
            this.col += this.xdir;
            if (food[this.row][this.col] == 0) {
                this.eat();
                food[this.row][this.col] = 1;
            }
        }
        if (isColliding()) {
            this.getHit();
        }
    }
    eat() {
        this.score += 10;
        foodCount -= 1;
        if (foodCount == 0) {
            start = !start;
        }
    }
    canPlay() {
        return this.lives > 0;
    }
    getHit() {
            this.lives -= 1;
            //check if there are lives left
            console.log(this.lives);
            //move pacman
            this.row = 16;
            this.col = 12;
            //make pacman still
            this.xdir = 0;
            this.ydir = 0;
            if (!this.canPlay()) {
                gameOver();
            }
        }
        //rotate and draw pacman
    drawSelf() {
            this.manageDirection()
            push();
            translate(this.col * 32 + this.xoffset, this.row * 32 + this.yoffset);
            rotate(radians(this.rotation));
            image(this.img, 0, 0);
            pop();
        }
        //Change rotation and offset
    manageDirection() {
        if (this.direction == "left") {
            this.rotation = 180;
            this.yoffset = 28;
            this.xoffset = 28;
        }
        else if (this.direction == "right") {
            this.rotation = 0;
            this.xoffset = 4;
            this.yoffset = 4;
        }
        else if (this.direction == "up") {
            this.rotation = -90;
            this.xoffset = 4;
            this.yoffset = 28;
        }
        else if (this.direction == "down") {
            this.rotation = 90;
            this.xoffset = 28;
            this.yoffset = 4;
        }
    }
}
//runs once at the beggining
function setup() {
    createCanvas(800, 900);
    background(0, 0, 0);
    frameRate(5);
    //initliseArray();
    //Initialse 4 ghosts
    for (var i = 0; i < 4; i++) {
        ghosts[i] = new Ghost(9, i + 10, loadImage("Img/ghost" + i.toString() + ".png"));
    }
    player = new Player(16, 12, loadImage("Img/pacman.png"));
    gameoverImg = loadImage("Img/pacman-logo.png");
    setFood();
    initialiseFoodCount();
    oldTime = getTime();
}
//draw loop for redrawing a game
function draw() {
    if (!start) {
        drawBoard();
        drawFood();
        for (var i = 0; i < 4; i++) {
            ghosts[i].move();
            ghosts[i].drawSelf();
        }
        //player.move();
        player.drawSelf();
        text("Score: " + player.score, 10, 850);
        newTime = getTime();
        var time = newTime - oldTime;
        text("Time: " + time, 450, 850);
        console.log("drawing");
    }
    else {
        if (!first) {
            gameOverScreen();
        }
        else {
            startScreen();
        }
    }
}

function initialiseFoodCount() {
    for (var row = 0; row < 25; row++) {
        for (var col = 0; col < 25; col++) {
            if (food[row][col] == 0) {
                foodCount++;
            }
        }
    }
}
//Draw Board
// Each cell will have different string value depending on which wall it represents
function drawBoard() {
    fill(0);
    rect(0, 0, 800, 900);
    for (var row = 0; row < 25; row++) {
        for (var col = 0; col < 25; col++) {
            if (grid[row][col] == 1) {
                stroke('blue');
                fill('black');
                strokeWeight(1);
                rect(col * 32, row * 32, 31, 31);
            }
            if (grid[row][col] == 0) {
                document.body.style.backgroundColor = "Black";
                fill('black');
                noStroke();
                rect(20, 20, 60, 60);
                rect(col * 32, row * 66, 31, 31);
            }
        }
    }
    // Quick fix for the 2 rectangle that do not appear
    fill('black');
    strokeWeight(1);
    rect(0, 0, 31, 31);
    rect(0, 32, 31, 31);
    rect(0, 64, 31, 31);
    rect(32, 0, 31, 31);
    rect(64, 0, 31, 31);
}

function drawFood() {
    for (var row = 0; row < 25; row++) {
        for (var col = 0; col < 25; col++) {
            if (food[row][col] == 0) {
                fill('white');
                stroke('white');
                strokeWeight(0.1);
                ellipse(col * 32 + 15, row * 32 + 15, 10);
            }
        }
    }
}
// detect if pacman is on the same square as ghost
function isColliding() {
    var collide = false;
    for (var i = 0; i < 4; i++) {
        if ((ghosts[i].row == player.row) && (ghosts[i].col == player.col)) {
            collide = true;
        }
    }
    return collide;
}
// detect arrow keys + enter
document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 13:
        start = false;
        first = false;
        move = setInterval(function () {
            player.move();
        }, 200);
        player.lives = 3;
        player.score = 0;
        oldTime = getTime();
        setFood();
        initialiseFoodCount();
        resetGhosts()
        break;
    case 37:
        player.direction = "left";
        player.moveLeft();
        break;
    case 38:
        player.direction = "up";
        player.moveUp();
        break;
    case 39:
        player.direction = "right";
        player.moveRight();
        break;
    case 40:
        player.direction = "down";
        player.moveDown();
        break;
    }
};
//Draw game over screen
function gameOverScreen() {
    fill(0);
    rect(0, 0, 800, 800);
    image(gameoverImg, 50, 50);
    textSize(112);
    fill(255)
    noStroke();
    text("Game Over", 100, 500);
    textSize(60);
    text("Press enter to start", 125, 650);
    console.log("showing logo");
}
// Finish game
function gameOver() {
    start = true;
    clearInterval(move);
}

function startScreen() {
    fill(0);
    rect(0, 0, 800, 800);
    image(gameoverImg, 50, 50);
    textSize(60);
    fill(255)
    noStroke();
    text("Press enter to start", 125, 650);
}

function resetGhosts() {
    for (var i = 0; i < 4; i++) {
        ghosts[i].row = 9;
        ghosts[i].col = i + 10;
    }
}

function getTime() {
    return second() + minute() * 60 + hour() * 3600;
}