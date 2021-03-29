class BaseClass{
    constructor(x,y,w,h){
        var options = {
            density:1,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.rectangle(x,y,w,h,options)
          World.add(myworld, this.body)
          this.w = w
          this.h = h
          this.image = loadImage("sprites/base.png")
    }

    display(){
        
        push()
        imageMode(CENTER)
        fill("orange")
        strokeWeight(4)
        stroke("white")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,this.w,this.h)
        pop()
    
    }
      
}