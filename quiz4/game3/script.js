const game = new Game();

var setup = () => {
    fullScreen();
    game.setup();
};

var draw = () => {
    game.draw();
};

var mouseClicked = () => {
    if (!game.started) {
        game.startGame();
    }
};

function Game() {
    this.components = [];
    this.menuComponents = [];
    this.started = false;

    this.setup = function () {
        this.components = [
            new Background(color(119, 89, 189)),
            new Ball(),
            new Paddle(),
            new Paddle(true),
        ];
        this.menuComponents = [
            new Background(randomPastelColor()),
        ];
    };

    this.draw = function () {
        if (this.started) {
            this.components.forEach(component => {
                component.step && component.step();
                component.draw && component.draw();
            });
        } else {
            this.menuComponents.forEach(component => {
                component.step && component.step();
                component.draw && component.draw();
            });
        }
    };

    this.startGame = function () {
        this.started = true;
    };
}

function Background(backgroundColor) {
    this.backgroundColor = backgroundColor;

    this.draw = function () {
        background(this.backgroundColor);
    };
}

function Paddle() {
    this.width = 200;
    this.height = 10;

    this.draw = function () {
        rect( mouseX, maxHeight - 100 -30, this.width, this.height);
    };
}

function Ball() {
    this.x = 130;
    this.y = 300;
    this.xSpeed = 3;
    this.ySpeed = 3;
    this.radius = 10;
    this.active = true;

    this.step = function () {
        if (!this.active) {
            return;
        }
        if (this.y > c.H - this.radius) {
            this.ySpeed *= -1;
            // this.active = false;
        }
        if (this.y < this.radius) {
            this.ySpeed *= -1;
        }
        if (this.x > c.W - this.radius || this.x < this.radius) {
            this.xSpeed *= -1;
        }
        if (this.shouldBounceOffPaddle()) {
            this.xSpeed *= -1;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    this.draw = function () {
        circle(this.x, this.y, this.radius);
    };

    this.shouldBounceOffPaddle = function () {
        const topEdgeOfPaddle = 800;
        if (this.y > 800 && this.y < 800 + 80 && this.x >= topEdgeOfPaddle - 1 && this.x <= topEdgeOfPaddle + 1) {
            return true;
        }
        return false;
    };
}

/* need to switch it so the edge that stops the ball is the bottom edge
Have only one paddle  and move it to the bottom
Will need to switch the height and width of the paddles to get it right for the new orientation
Have the paddle only move on the x axis instead of the y axis*/