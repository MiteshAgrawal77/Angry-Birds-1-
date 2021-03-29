class Bird extends BaseClass{
    constructor(x,y){
          super(x,y,50,50)
          //Matter.Body.setDensity(this.body,1.5)
          this.image = loadImage("sprites/bird.png")
          this.image2 = loadImage("sprites/smoke.png")
          this.trajectory = [];
        }
      display(){
        super.display()
        var pos = this.body.position
        console.log(this.body)
        if(this.body.position.x > 200){
          this.trajectory.push([pos.x,pos.y])
        }
//          console.log(this.trajectory)
        for(var i = 0; i <this.trajectory.length; i=i+1){
            // this.trajectory is 2d array
            // this.trajectory[i] = x,y   only x this.trajectory[i][0]
            //only y this.trajectory[i][1]
            image(this.image2, this.trajectory[i][0],this.trajectory[i][1])

        }

      }
}
