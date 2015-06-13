$(document).ready(function() {
    tuval = document.getElementById('field');
    tuval.add = function(element) {
        tuval.appendChild(element.oval);
    }
    makeRandomCircles(tuval);
});