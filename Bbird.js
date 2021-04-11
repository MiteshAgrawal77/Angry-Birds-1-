class Bbird extends BaseClass{
    constructor(x,y){
          super(x,y,20,20)
          //Matter.Body.setDensity(this.body,1.5)
          this.image = loadImage("sprites/BirdCage.jpg")
          //this.image2 = loadImage("sprites/smoke.png")
        
        }
        display(){
            super.display()
            if(this.body.speed>5){
                
                this.image = loadImage("sprites/FlyingBird.jpg")
            }
        }
     
}
