var backgroundColor = color(119, 89, 189);

var setup = () => {
    fullScreen();
    background(backgroundColor);
};

var draw = () => {
    background(backgroundColor);
    circle(mouseX, mouseY, mouseIsPressed ? 200 : 20);
};

var mouseClicked = () => {
    backgroundColor = randomGoldenRatioColor();
};
