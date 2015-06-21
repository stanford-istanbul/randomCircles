function randomColor() {
   return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function randomInt(min, max) {
    var max = max+1;
    return Math.floor(Math.random()*(max-min)+min);
}
