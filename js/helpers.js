function randomColor() {
    function c() {
        return ("00" + Math.floor(Math.random()*256).toString(16)).slice(-2);
    }

    return "#"+c()+c()+c();
}

function randomInt(min, max) {
    var max = max+1;
    return Math.floor(Math.random()*(max-min)+min);
}

$(window).load(function() {
    canvas = document.getElementById('field');
    canvas.add = function(element) {
        canvas.appendChild(element.oval);
    }
    run();
});
