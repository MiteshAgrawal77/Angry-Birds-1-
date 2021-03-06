const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground, box1, box2
var pig1, log1

var box3,box4;
var pig2, log2;

var box5,log3,log4

var bird

var bg, platform;
var gameState = "onSling" // the other possible game state is launched

var score=0;
var count=5;

function preload(){   
   getTime()
}

function setup() {
  createCanvas(1200,400);
 
  myengine = Engine.create();
  myworld = myengine.world;
  
   

  ground  = new Ground(600,390,1200,30)

  platform = new Ground(150,350,300,200)
  
  box1 = new Box(width-300,300,70,70)
  box2 = new Box(width-500,300,70,70);
  box3 = new Box(width-300,180,70,70)
  box4 = new Box(width-500,180,70,70) 
  box5 = new Box(width-400,50,70,70);
  
  pig1 = new Pig(width-400,300)
  pig2 = new Pig(width-400,180)
  //360 = 2PI
  //PI = 360/2
  //PI = 180

  log1 = new Log(width-400,250,300,PI)
  log2 = new Log(width-400,100,300,PI)

 log3 = new Log(width-460,20,150,-PI/5)
 log4 = new Log(width-400,20,150,PI/5)
  //1200 - 380 = 820, 

  console.log(bird)
  bird = new Bird(200,70)

  sling = new slingshot(bird.body,{x:200,y:70})
  blueBird = new  Bbird(width-325,300)
  
}

function draw() {
  Engine.update(myengine)
  // bg is the variable where we are loading the image, hour and this again is a time taking 
  if(bg){
    background(bg); 
  }
  else{
    background("cyan")
  }

 // bird.body.position.x = mouseX
 // bird.body.position.y = mouseY
  text("SCORE:" + score , 1000,50)
  ground.display()

  box1.display()
  box2.display()
  box4.display()
  box3.display()
  box5.display()

  pig1.display()
  pig2.display()
  
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  
  bird.display() 
  platform.display()
  sling.display()

  if(count===0){
    gameState = "end"
    text(" GAME OVER!! ", width/2-100, height/2)
  } 
  blueBird.display()
  //x1,y1
 // line(bird.body.position.x,bird.body.position.y,cLog.body.position.x,cLog.body.position.y)
}


function mouseDragged(){
  if(gameState === "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  if(gameState === "onSling"){
    sling.fly()
    gameState = "launched"
    count= count-1
  }
}

function keyPressed(){
  if(keyCode===32 && gameState==="launched" ){
    Matter.Body.setPosition(bird.body,{x:200,y:10})
    sling.attach(bird.body)
    gameState = "onSling"
    bird.trajectory = []
  }
 
}

async function getTime(){
  //Make API
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

  var responseJSON = await response.json()
  var hour = responseJSON["datetime"].slice(11,13)
  //console.log(hour)
  if(hour > 18 && hour < 6){
    bg = loadImage("sprites/bg2.jpg")
  }else{
    bg = loadImage("sprites/bg.png")
  } 

}
