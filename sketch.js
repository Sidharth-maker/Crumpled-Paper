
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1
var rect2
var rect3
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

    ball = new Ball(50,300,10);

	rect1 = new Rect(600,650,200,20);
	rect2 = new Rect(700,620,20,100);
	rect3 = new Rect(500,620,20,100);

	ground = new Ground(width/2, height-35, width,20)
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	Engine.update(engine);
  
	rect1.display();
	rect2.display();
	rect3.display();

	ball.display();

	ground.display();

	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-25})
	}
}