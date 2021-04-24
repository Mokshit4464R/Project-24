
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1, ground, stone1, rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(1500,600);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(100,100);
	ground = new Ground(600,height,1800,20);
	stone1 = new Stone(700,320,70,70);
	rubber1 = new Rubber(700,320,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  drawSprites();
 
}



