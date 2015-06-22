const MIN_BALL_DIAMETER = 20;
const MAX_BALL_DIAMETER = 150;

// Adds a single random circle to the canvas
function addRandomCircle() {
    var ball = new GOval();
    var diameter = randomInt(MIN_BALL_DIAMETER, MAX_BALL_DIAMETER);
    ball.setColor(randomColor());
    ball.setFilled(true);
    ball.setSize(diameter, diameter);
    var randomX = randomInt(0, canvas.offsetWidth-diameter);
    var randomY =  randomInt(0, canvas.offsetHeight-diameter);
    ball.setLocation(randomX, randomY);
    canvas.add(ball);
}
