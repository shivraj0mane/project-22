
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_option={
		restitution:0.95
	  }
	  ball=Bodies.circle(100,200,20,ball_option)
	  World.add(world,ball)

	  ground =new Ground(400,700,800,20);
	  wall = new Ground(750,615,20,150);
	  wall1 = new Ground(600,615,20,150);
	  wall2 = new Ground(790,400,20,750);
	  wall3 = new Ground(10,400,20,750);
	  wall4 = new Ground(400,10,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(30);
  fill("blue")
  text("click on space to through the ball",200,500);

  
  ellipse(ball.position.x,ball.position.y,40)
  ground.show();
  wall.show();
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  Engine.update(engine);
  drawSprites();
 
  if((touches.length > 0 || keyDown("SPACE")) ) {
	Force()
	
  }


}

function Force()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:+0.01,y:-0.02});
}

