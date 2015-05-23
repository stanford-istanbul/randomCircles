function randomCircles() {
    const MIN_BALL_DIAMETER = 20;
    for (var i=0; i < 10; ++i) {
        var elem = document.getElementById('field');
        var newElem = document.createElement('div');
        newElem.className = 'ball';
        var diameter = Math.random()*150+MIN_BALL_DIAMETER;
        newElem.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        newElem.style.width = newElem.style.height = diameter;
        newElem.style.top = Math.random()*(elem.offsetHeight-diameter)+elem.style.top;
        newElem.style.left = Math.random()*(elem.offsetWidth-diameter)+elem.style.left;
        elem.appendChild(newElem);
    }
}