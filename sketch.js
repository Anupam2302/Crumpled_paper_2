const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new dustbin(1030,387);
	ground = new Ground(600,height,1200,20);
    ball1= new Ball (100,380);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  dustbin1.display();
 
  ground.display();
  ball1.display();

  dustbin1.display();

  drawSprites();
 }

 function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:280,y:-280});
	}
 }
