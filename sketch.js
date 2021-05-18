
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1, rubber1, floor

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
    
    hammer1 = new Hammer(200,200,100,20);
    rubber1 = new Rubber(200,200,50,50);
    floor = new Ground(400,700,800,20);
    stone1 = new Stone(200,200,50,50);

	console.log("test")
  
	//Create the Bodies Here.
console.log("a"+hammer1.body.position.x);
console.log("b"+rubber1.body.position.x);

	
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  hammer1.display()
  floor.display()
  rubber1.display()
  stone1.display()
}



