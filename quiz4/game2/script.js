var backgroundColor = color(119, 89, 189);

var setup = () => {
    fullScreen();
    background(backgroundColor);
};

var draw = () => {
    background(backgroundColor);
    rect(100, mouseY, 40, 80);
    rect(maxWidth - 100 - 40, mouseY, 40, 80);
};

var mouseClicked = () => {
    backgroundColor = randomGoldenRatioColor();
};

var pongBall = () => {
    circle();
};


/* Need a two reclangles that will follow the cursor
A circle that bounces off the rectangle when it makes contact
Have the circle bounce off at an angle
Scores on each side of the screen
When the ball goes past one of the rectangles the other side gets a point */