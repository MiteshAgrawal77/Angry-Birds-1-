class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png")
        this.visibility = 255
       // this.score = 0
    }
     
    display(){
        //console.log(this.body.speed)
        // score of 100
        // 255 and reduces with 5 in every frame, 255/5 = 51 
        // every frame can have score incremented by 2
        if(this.body.speed>5){
            World.remove(myworld, this.body) 
            push()           
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
            pop()
            this.visibility = this.visibility - 5
            if(this.visibility > 0)
               // this.score = this.score + 2
               score = score + 2
            //console.log(this.score)
        }else{
            super.display()
        }
    }
}