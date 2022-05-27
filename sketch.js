
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;
  	


	
	//Create the Bodies Here.

ball = Bodies.circle(200,200,15,options)
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ellipseMode(RADIUS);
  	World.add(world,ball)
	ground = new Ground(500,750,1000,20)
	groundL = new Ground(600,690,20,120)
	groundR = new Ground(850,690,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ellipse(ball.position.x,ball.position.y,15,15)
  ground.display()
  groundL.display()
  groundR.display()

  
}
 function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.03,y:-0.03})

	}
 }




