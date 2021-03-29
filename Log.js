class Log extends BaseClass{
    constructor(x,y,w,angle){
        /*var options = {
            density:1,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.rectangle(x,y,w,20,options)
          Matter.Body.setAngle(this.body,angle)
          World.add(myworld, this.body)
          this.w = w
          this.h = 20*/
          super(x,y,w,20)
          Matter.Body.setAngle(this.body,angle)
          this.image = loadImage('sprites/wood2.png')


    }


      
}