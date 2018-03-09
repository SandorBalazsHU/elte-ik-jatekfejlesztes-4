var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;

var xs = 5;
var ys = 5;

var rectWidth = 140;
var rectHeight = 185;

var anim = 1;

var img = document.createElement('img');
img.width = rectWidth;
img.height = rectHeight;
img.src='sprite_sheet.png';
img.onload = function() {
    setInterval(function(){

        //Billentyűkezelés
        if ((Key.isDown(Key.UP)    || Key.isDown(Key.W)) && (y > 0)                          ) y-=ys;
        if ((Key.isDown(Key.LEFT)  || Key.isDown(Key.A)) && (x > 0)                          ) x-=xs; 
        if ((Key.isDown(Key.DOWN)  || Key.isDown(Key.S)) && (y < canvas.height-rectHeight) ) y+=ys;
        if ((Key.isDown(Key.RIGHT) || Key.isDown(Key.D)) && (x < canvas.width-rectWidth)   ) x+=xs;
        
        //Animálás
        if (Key.isDown(Key.Q)) anim =2;

        //Rajzolás
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 40+rectWidth*anim, 30, 40+rectWidth, 30+rectHeight, x, y, rectWidth, rectHeight);


    }, 1000/60);
}

var Key = {
    _pressed: {},

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    Q: 81,

    isDown: function(keyCode) {
        return this._pressed[keyCode];
    },

    onKeydown: function(event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyup: function(event) {
        delete this._pressed[event.keyCode];
    }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);