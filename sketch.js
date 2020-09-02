
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	
var b1,b2,b3,b4,p;

function setup() {
	createCanvas(800, 700);
 p =new Paper(30,360,50,PI/3);
 b1 = new Dustbin(300,360,200,20);
 b2 = new Dustbin(200,380,800,20);
 b3 = new Dustbin(350,360,20,200);
 b4 = new Dustbin(250,360,20,200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  b1.display();
  b3.display();
  b4.display();
  p.display();
  b2.display();
  if(keyCode===UP_ARROW){
   p.keypressed;
  }
 drawSprites();
 keypressed();
  
}
function keypressed (){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(pObject.body,pObject.body.position,{x:85,y:-85});
	}
}


