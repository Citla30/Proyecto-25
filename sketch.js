
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var paper;
var b1,b2,b3;
var fondo,fondo2,f2,f3;
var bote2,bote3;
var canasta,c2,c3;
var car,carimg;
var basura,bimg,ba2,ba3,BA2,BA3;
var cbody,b1body,b2body,b3body;
var t1,t2,t3;
var T1,T2,T3;

function preload(){

fondo=loadImage("fondo.jpg");
f2=loadImage("f2.jpg");
f3=loadImage("mar.gif");
carimg=loadImage("camion.png");
bimg=loadImage("bolsa.png");
ba2=loadImage("trash.png");
ba3=loadImage("trash2.png");
t1=loadImage("texto1.png");
t2=loadImage("texto2.png");
t3=loadImage("texto3.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(100,50);
	canasta=new Canasta(500,300);
	c2=new Canasta(780,200);
	c3=new Canasta(1080,200);
	b1=new Botella(200,50);
	b2=new dustbin3(300,50);
	b3=new Pelota(20,50);
	groundObject=new ground(width/2,630,width,20);
	dustbinObj=new dustbin(1200,680);
	bote2=new Bote (900,675);
	bote3=new dustbin2(600,690);
	
	fondo2=createSprite(800,300);
	fondo2.addImage(f2);
	fondo2.scale=2.6;
	fondo2.visible=false;

	basura=createSprite(800,300);
	basura.addImage(bimg);
	basura.scale=0.5;
	basura.visible=false;

	BA2=createSprite(800,300);
	BA2.addImage(ba2);
	BA2.scale=0.5;
	BA2.visible=false;

	BA3=createSprite(800,300);
	BA3.addImage(ba3);
	BA3.scale=0.5;
	BA3.visible=false;

	car=createSprite(-180,500);
	car.addImage(carimg);
	car.scale=1.5;
	car.visible=false;

	T1=createSprite(230,140);
	T1.addImage(t1);
	T1.scale=0.5;
	//T1.visible=false;

	b1body = Bodies.circle(150 , 250 , 5 ,{isStatic:false});
	World.add(world, b1body);

	b2body = Bodies.circle(400 , 250 , 5 ,{isStatic:false});
	World.add(world, b2body);

	b3body = Bodies.circle(600 , 250 , 5 ,{isStatic:false});
	World.add(world, b3body);

	cbody = Bodies.circle(1500, 500 , 5 ,{isStatic:false});
	World.add(world, cbody);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(fondo);

  car.x= cbody.position.x;
  car.y= cbody.position.y;

  basura.x= b1body.position.x;
  basura.y= b1body.position.y;

  BA2.x= b2body.position.x;
  BA2.y= b2body.position.y;

  BA3.x= b3body.position.x;
  BA3.y= b3body.position.y;

  //groundObject.display();

  canasta.display();
  c2.display();
  c3.display();
  paper.display();
  b1.display();
  b2.display();
  b3.display();
  dustbinObj.display();
  bote2.display();
  bote3.display();
  
  drawSprites();

  KeyPressed();
}

function KeyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-6});
	}

	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:3,y:-6});
	}

	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(b2.body,b2.body.position,{x:3,y:-6});
	}

	if(keyDown("DOWN_ARROW")){
		Matter.Body.applyForce(b3.body,b3.body.position,{x:5,y:-4});
	}

	if(keyDown("l")){
		car.x=car.x-20;
		Matter.Body.translate(cbody,{x:-20,y:0});
    }

    if(car.x<10){
	  fondo2.addImage("fondo",f3);
	  fondo2.changeImage("fondo");
	  fondo2.scale=4;

	  T1.addImage("texto1",t3);
	  T1.changeImage("texto1");
	  T1.y=300;
	  T1.x=700;
    }

	if(car.isTouching(BA3)){
		BA3.visible=false;
	}

	if(car.isTouching(BA2)){
		BA2.visible=false;
    }

	if(car.isTouching(basura)){
		basura.visible=false;
	}

	if(keyDown("M")){
		basura.visible=true;
		BA2.visible=true;
		BA3.visible=true;
		car.visible=true;
		fondo2.visible=true;

		T1.addImage("texto",t2);
		T1.changeImage("texto");
		T1.y=70;
	}

}
