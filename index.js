var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var wallSize = 50;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


fw.load([Hero.image, Wall.image], function() {
    setInterval(update, 16);
});

const entities = [
    new Hero(100, 100)
];

for (i = 0; i < canvasHeight/wallSize; i++) { 
    entities.push(new Wall(0, i*wallSize, wallSize, wallSize));
}

function update() {
   for (const entity of entities) {
       entity.update();
   }

   ctx.clearRect(0, 0, canvas.width, canvas.height);

   for (const entity of entities) {
      entity.draw(ctx);
   }
}