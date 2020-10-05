 const Engine= Matter.Engine;
 const World = Matter.World;
 const Bodies= Matter.Bodies;


var engine,world,ball,ground;
function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(400,10,20,ball_options);
  World.add(world,ball); 
  var ground_options={
  isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
 


  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);



  drawSprites();
}