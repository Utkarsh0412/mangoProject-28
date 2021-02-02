
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,300,30);
	mango3=new mango(1190,200,30);
	mango4=new mango(1250,250,30);
	mango5=new mango(850,280,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(250,500)
	sling=new Slingshot(stoneObj.body,{x:240,y:400});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text("Press Space to restart",200,50)
  image(boy ,200,340,200,300);
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  
  }
  function mouseReleased(){
	sling.fly();
  }
  function keyPressed(){
	  if(keyCode === 32){
	  Matter.Body.setPosition(stoneObj.body,{x:250,y:500})
	  sling.attach(stoneObj.body);
	  }
  }
  function detectollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y,)
if(distance<=Lmango.r+Lstone.r)
{
	Matter.Body.setStatic(Lmango.body,false)
}
  }
