const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var bg

function preload(){

	bg = loadImage("BG.jpg");
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1500,300);
	launcherObject=new launcher(paperObject.body,{x:300,y:300})

	Engine.run(engine);
  
}


function draw() {
  background(bg);
  Engine.update(engine)

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcherObject.display();
}


function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcherObject.fly();
 
}
