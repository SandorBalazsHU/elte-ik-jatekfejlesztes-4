class Wall extends fw.Entity {
    constructor(x, y,  width = 0, height = 0){
        super(x,y);
        this.width = width;
        this.height = height;
    }
    draw(ctx) {
        ctx.drawImage(Wall.image, this.x, this.y, this.width, this.height);
    }
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

Wall.image = fw.image('images/wall.jpg');