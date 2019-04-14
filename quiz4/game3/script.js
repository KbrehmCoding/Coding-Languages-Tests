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

function Paddle(isPaddle) {
    this.width = 30;
    this.height = 80;

    this.draw = function () {
        rect(isPaddle ? maxWidth - 100 - 30 : 100, mouseY, this.width, this.height);
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
        if (this.y > c.H - this.radius || this.y < this.radius) {
            this.ySpeed *= -1;
        }
        if (this.x > c.W - this.radius || this.x < this.radius) {
            this.active = false;
        }
        if (this.shouldBounceOffLeftPaddle() || this.shouldBounceOffRightPaddle()) {
            this.xSpeed *= -1;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    this.draw = function () {
        circle(this.x, this.y, this.radius);
    };

    this.shouldBounceOffLeftPaddle = function () {
        const rightEdgeOfPaddle = 130;
        if (this.y > mouseY && this.y < mouseY + 80 && this.x >= rightEdgeOfPaddle - 1 && this.x <= rightEdgeOfPaddle + 1) {
            return true;
        }
        return false;
    };

    this.shouldBounceOffRightPaddle = function () {
        const leftEdgeOfPaddle = maxWidth - 100 - 30;
        if (this.y > mouseY && this.y < mouseY + 80 && this.x >= leftEdgeOfPaddle - 1 && this.x <= leftEdgeOfPaddle + 1) {
            return true;
        }
        return false;
    };
}

/* need to switch it so the edge that stops the ball is the bottom edge
Have only one paddle  and move it to the bottom
Will need to switch the height and width of the paddles to get it right for the new orientation
Have the paddle only move on the x axis instead of the y axis*/