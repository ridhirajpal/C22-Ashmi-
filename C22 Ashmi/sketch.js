const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var engine; 
var world; 
var ground; 
var ball; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create(); 
  world = engine.world; 

  //creating a body

  var ground_options = { 
    isStatic: true 
  }

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options); 
  World.add(world, ground); 

  var ball_options = { 
    restitution: 1.5
  }

  ball = Bodies.circle(200, 50, 20, ball_options); 
  World.add(world, ball)
}

function draw() {
  background("black"); 
  Engine.update(engine)
  
  //shape over the body
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20); 
  
  //console.log(box)

  ellipseMode(RADIUS)
  circle(ball.position.x, ball.position.y, 20);   
}