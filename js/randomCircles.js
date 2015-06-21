const MIN_BALL_DIAMETER = 20;
const MAX_BALL_DIAMETER = 150;

function randomCircles_v1() {
    var ball = new Oval();
    var diameter = randomInt(MIN_BALL_DIAMETER, MAX_BALL_DIAMETER);
    ball.setColor(randomColor());
    ball.setSize(diameter, diameter);
    var randomX = randomInt(0, tuval.offsetWidth-diameter);
    var randomY =  randomInt(0, tuval.offsetHeight-diameter);
    ball.setLocation(randomX, randomY);
    tuval.add(ball);
}
