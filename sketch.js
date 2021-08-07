var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_option={
		isStatic:false,
		reatitution:0.3,
		friction:0,
		density:1.2
	}
	groundObj.display();
	groundObj=new ground(Width/2,670,Width,20);
	leftSide=new ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



