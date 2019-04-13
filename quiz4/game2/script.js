
let setup = () => {
    fullScreen();
    background(backgroundColor);
    backgroundColor = color(119, 89, 189);
    x = canvas.width/2;
    y = canvas.height-30;
    ballRadius = 10;
};

let draw = () => {
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

let mouseClicked = () => {
    backgroundColor = randomGoldenRatioColor();
};

let pongBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#F8BD32";
    ctx.fill();
    ctx.closePath();
};

let lastTime = 0;

function ballMovement(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    pongBall.update(deltaTime);
    pongBall.draw(ctx);

    requestAnimationFrame(ballMovement);
}


/* Define the edges of the feild so circle bounces off sides (done)
Need a two reclangles that will follow the cursor (done)
Make a moving circle
A circle that bounces off the rectangle when it makes contact
Have the circle bounce off at an angle
Scores on each side of the screen
When the circle goes past one of the rectangles the other side gets a point */