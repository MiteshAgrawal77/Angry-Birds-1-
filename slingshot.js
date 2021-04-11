class slingshot {

  constructor(b1, p2){
  
      var options = {
          bodyA: b1,
          pointB: p2,
          length:10,
          stiffness:0.07
        }
      this.sling = Constraint.create(options)
      World.add(myworld, this.sling)  
      this.sling1=loadImage("sprites/sling1.png")
      this.sling2=loadImage("sprites/sling2.png")
      this.sling3=loadImage("sprites/sling3.png")
      
  }
  
  display(){
    image(this.sling1,200,50) 
    image(this.sling2,170,50)
      if(this.sling.bodyA!=null){
        var posA = this.sling.bodyA.position
        var posB = this.sling.pointB
        push()
        if(posA.x<200){
         strokeWeight(8)
        }else{
          strokeWeight(6)
        }
        stroke(48,22,8)
       // line(posA.x,posA.y,posB.x,posB.y)
       line(posA.x,posA.y,posB.x-20,posB.y+5)
       line(posA.x,posA.y,posB.x+20,posB.y+5)
        pop()
      }
     
  
  }
  
  
  fly(){
      this.sling.bodyA=null
  }
  
  attach(body){
     this.sling.bodyA= body
  }
  
  }
  
  