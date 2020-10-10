const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies

var myEngine,myWorld,object,ball


function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var option_ball={
    isStatic:true
  }
  var option={
    restitution:0.8
  }
  
ball=Bodies.circle(200,200,20,option)

  ground=Bodies.rectangle(200,390,300,20,option_ball);
  World.add(myWorld,ground);
  World.add(myWorld,ball);
 console.log(ground.position.x) 
}



function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y , 300, 20); 
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20); 
  drawSprites();
}