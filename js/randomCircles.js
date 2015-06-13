function makeRandomCircles (canvas) {
   canvas.onclick = randomCircles;    
}

function randomCircles() {
    const MIN_BALL_DIAMETER = 20;
    var ball = new Oval();
    var diameter = randomInt(MIN_BALL_DIAMETER, 150);
    ball.setColor(randomColor());
    ball.setSize(diameter, diameter);
    var randomX = randomInt(0, tuval.offsetWidth-diameter);
    var randomY =  randomInt(0, tuval.offsetHeight-diameter);
    ball.setPosition(randomX, randomY);
    tuval.add(ball);
}
