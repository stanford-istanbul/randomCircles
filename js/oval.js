function Oval() {
    var newElem = document.createElement('div');
    newElem.className = 'ball';
    this.oval = newElem;
}

Oval.prototype = {
   setColor: function(color) {
       this.oval.style.backgroundColor = color;
   },
   setLocation: function(x,y) {
       this.oval.style.left = x;
       this.oval.style.top = y;
   },
   setSize: function(width, height) {
       this.oval.style.width = width;
       this.oval.style.height = height;
   }
};
