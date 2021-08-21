const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var myEngine, myWorld;

//Create multiple bobs, mulitple ropes varibale here
var roof;
var rope1, ball1;
var rope2, ball2;
var rope3, ball3;
var rope4, ball4;
var rope5, ball5;

function setup() {
	createCanvas(800, 600);
	//rectMode(CENTER);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	var roof_options={
		isStatic:true			
	};
	/*var render = Render.create({
		element: document.body,
		engine: myEngine,
		options:{
		  width: 800,
		  height: 600,
		  wireframes: false
		}
	  });
	  Render.run(render);*/

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(myWorld,roof);

	ball1 = Bodies.circle(420,150,15);
  	World.add(myWorld, ball1);

	
	rope1 = Constraint.create({
		pointA: {x:420,y:100},
		bodyB: ball1,
	   	pointB: {x: 0, y:0},
	   	length: 300,
	   	stiffness: 0.2
	 
	  });
	  World.add(myWorld,rope1);
	
  
	ball2 = Bodies.circle(330,150,15);
  	World.add(myWorld, ball2);

	rope2 = Constraint.create({
		pointA: {x:330,y:100},
		bodyB: ball2,
	   	pointB: {x:0,y:0},
	   	length: 300,
	   	stiffness: 0.2
	 
	  });
	  World.add(myWorld,rope2);


	  ball3 = Bodies.circle(360,150,15);
  	World.add(myWorld, ball3);

	
	rope3 = Constraint.create({
		pointA: {x:360,y:100},
		bodyB: ball3,
	   	pointB: {x:0,y:0},
	   	length: 300,
	   	stiffness: 0.2
	 
	  });
	  World.add(myWorld,rope3);


	  ball4 = Bodies.circle(390,150,15);
  	World.add(myWorld, ball4);

	rope4 = Constraint.create({
		pointA: {x:390,y:100},
		bodyB: ball4,
	   	pointB: {x:0,y:0},
	   	length: 300,
	   	stiffness: 0.2
	 
	  });
	  World.add(myWorld,rope4);


	  ball5 = Bodies.circle(450,150,15);
  	World.add(myWorld, ball5);

	rope5 = Constraint.create({
		pointA: {x:450,y:100},
		bodyB: ball5,
	   	pointB: {x:0,y:0},
	   	length: 300,
	   	stiffness: 0.2,
	  });
	  World.add(myWorld,rope5);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

	//rope1.display();
	ellipseMode(RADIUS);
	ellipse(ball1.position.x,ball1.position.y,15);
	push();
	strokeWeight(2);
	line(rope1.pointA.x, rope1.pointA.y, ball1.position.x,ball1.position.y);
  	pop();
 
	ellipseMode(RADIUS);
	ellipse(ball2.position.x,ball2.position.y,15);
	push();
	strokeWeight(2);
	line(rope2.pointA.x, rope2.pointA.y, ball2.position.x,ball2.position.y);
  	pop();
	
	ellipseMode(RADIUS);
	ellipse(ball3.position.x,ball3.position.y,15);
	push();
	strokeWeight(2);
	line(rope3.pointA.x, rope3.pointA.y, ball3.position.x,ball3.position.y);
  	pop();

	ellipseMode(RADIUS);
	ellipse(ball4.position.x,ball4.position.y,15);
	push();
	strokeWeight(2);
	line(rope4.pointA.x, rope4.pointA.y, ball4.position.x,ball4.position.y);
  	pop();

	  ellipseMode(RADIUS);
	  ellipse(ball5.position.x,ball5.position.y,15);
	  push();
	  strokeWeight(2);
	  line(rope5.pointA.x, rope5.pointA.y, ball5.position.x,ball5.position.y);
		pop();
  Engine.update(myEngine);
 ;
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode === LEFT_ARROW)
	{
		Body.applyForce(ball2,{x:0,y:0}, {x:-0.02,y:0});
		
	}
}