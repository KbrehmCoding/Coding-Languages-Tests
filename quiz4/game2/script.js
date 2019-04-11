var backgroundColor = color(119, 89, 189);
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;


var setup = () => {
    fullScreen();
    background(backgroundColor);
};

var draw = () => {
    background(backgroundColor);
    pongBall();
    rect(100, mouseY, 30, 80);
    rect(maxWidth - 100 - 30, mouseY, 30, 80);
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
};

var mouseClicked = () => {
    backgroundColor = randomGoldenRatioColor();
};

var pongBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};


/* Define the edges of the feild so circle bounces off sides (done)
Need a two reclangles that will follow the cursor (done)
Make a moving circle
A circle that bounces off the rectangle when it makes contact
Have the circle bounce off at an angle
Scores on each side of the screen
When the circle goes past one of the rectangles the other side gets a point */