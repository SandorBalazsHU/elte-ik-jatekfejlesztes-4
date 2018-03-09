class Hero extends fw.Entity {
    constructor(x, y){
        super(x,y);
        this.anim = 0;
    }

    update(){
        this.moveIfPressed(37, -10, 0);
        this.moveIfPressed(38, 0, -10);
        this.moveIfPressed(39, 10, 0);
        this.moveIfPressed(40, 0, 10);
    }

    moveIfPressed(key, x, y){
        if(fw.isDown(key)){
            this.x+=x;
            this.y+=y;
            this.updateAnim();
        }
    }
    
    updateAnim(){
        this.anim+=0.5 ;
        if(this.anim >= 10){
            this.anim -= 10;
        }
    }

    draw(ctx){
        ctx.drawImage(Hero.image, this.getImgX(), this.getImgY(), 180, 248, this.x, this.y, 90, 124);
    }


    getImgX(){
        var column = Math.floor(this.anim) % 5;
        return column * 180;
    }

    getImgY(){
        var row = Math.floor(Math.floor(this.anim) / 5);
        return row * 248;
    }

}

Hero.image = fw.image('images/hero.png');