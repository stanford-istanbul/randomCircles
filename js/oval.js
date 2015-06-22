function GOval() {
    this.oval = document.createElement('div');
    this.oval.style.position = 'absolute';
    this.oval.style.backgroundColor = 'transparent';
    this.oval.style.borderRadius = '50%';
    this.oval.style.borderStyle = 'solid';
    this.oval.style.borderWidth = '1px';
    this.isFilled = false;
}

GOval.prototype = {
   setFilled: function(fill) {
       this.isFilled = fill;
       if (this.isFilled) {
           this.oval.style.backgroundColor = this.oval.style.borderColor;
       } else {
           this.oval.style.bordercolor = 'transparent';
       }
   },
   setColor: function(color) {
       this.oval.style.borderColor = color;
       if (this.isFilled) {
           this.oval.style.backgroundColor = color;
       } else {
           this.oval.style.backgroundColor = 'transparent';
       }
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
