var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var wallSize = 50;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
const entities = [];

fw.load([Hero.image, Wall.image], function() {
    setInterval(update, 16);
});



for (i = 0; i < canvasHeight/wallSize; i++) { 
    entities.push(new Wall(0, i*wallSize, wallSize, wallSize));
    entities.push(new Wall(canvasWidth-wallSize, i*wallSize, wallSize, wallSize));
}

for (i = 0; i < (canvasWidth/wallSize)-2; i++) { 
    entities.push(new Wall((i*wallSize)+wallSize, 0, wallSize, wallSize));
    entities.push(new Wall((i*wallSize)+wallSize, canvas.height-wallSize, wallSize, wallSize));
}

var index = fw.createIndex(entities, wallSize);
entities.push(new Hero(100, 100, index));

function update() {
   for (const entity of entities) {
       entity.update();
   }

   ctx.clearRect(0, 0, canvas.width, canvas.height);

   for (const entity of entities) {
      entity.draw(ctx);
   }
}