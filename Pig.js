class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png")
        this.visibility = 255
    }
     
    display(){
        //console.log(this.body.speed)
        if(this.body.speed>5){
            World.remove(myworld, this.body) 
            push()           
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
            pop()
            this.visibility = this.visibility - 5
        }else{
            super.display()
        }
    }
}