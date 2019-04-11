let backgroundColor = color(119, 89, 189);
let x = canvas.width/2;
let y = canvas.height-30;
let ballRadius = 10;
let xVelosity = yVeolosity = 4;
let xBall = yBall = 50;
const ballDimention = 6;
let score1 = score2 = 0;
const paddles1y = paddles2y = 40;
const paddlesThickness = 10;
const paddlesHeight = 80;


let setup = () => {
    fullScreen();
    background(backgroundColor);
};

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background(backgroundColor);
    pongBall();
    if(x + dx > canvas.height - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
};

setInterval(draw, 10)

let mouseClicked = () => {
};

let pongBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#F8BD32";
    ctx.fill();
    ctx.closePath();
};

let paddles = () => {
    rect(100, mouseY, 30, 80);
    rect(maxWidth - 100 - 30, mouseY, 30, 80);
}



function reset() {
    xBall = canvas.width/2;
    yBall = canvas.height/2;
    xVelosity = -xVelosity;
    yVeolosity = 3;

}

let update = () => {
    xBall += xVelosity;
    yBall += yVelosity;

    if (yBall < 0 && yVeolosity < 0) {
        yVeolosity = -yVeolosity;
    }
    if (yBall < canvas.height && yVeolosity < 0) {
        yVeolosity = -yVeolosity;
    }
    if (xBall < 0 ) {
        if (yBall > paddles1y && yBall < paddles1y + ph) {
            xVelosity = -xVelosity
            dy = yBall - (paddles1y + paddles.height/2);
            yVeolosity = dy*0.3;
        } else {
            score2 ++;
            reset();
        }
    }
    if (xBall > canvas.width ) {
        if (yBall > paddles2y && yBall < paddles2y + paddles.height) {
            xVelosity = -xVelosity
            dy = yBall - (paddles2y + paddlesHeight/2);
            yVeolosity = dy*0.3;
        } else {
            score1 ++;
            reset();
        }
    }
    cc.fillText(score1, 100, 100);
    cc.fillText(score2, canvas.width - 100, 100);

}

/* Define the edges of the feild so circle bounces off sides (done)
Need a two reclangles that will follow the cursor (done)
Make a moving circle
A circle that bounces off the rectangle when it makes contact
Have the circle bounce off at an angle
Scores on each side of the screen
When the circle goes past one of the rectangles the other side gets a point */