const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world

var ground 

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  
  world = engine.world;

  //creating ground
  ground=new Ground(800,600,1600,20)

  //creating boxes
  box1= new Box(900,100,70,70)
  box2= new Box(900,100,70,70)
  box3= new Box(900,100,70,70)
  box4= new Box(900,100,70,70)
  box5= new Box(900,100,70,70)
  box6= new Box(900,100,70,70)

  box7=new Box(800,100,70,70)
  box8=new Box(800,100,70,70)
  box9=new Box(800,100,70,70)
  box10=new Box(800,100,70,70)
  box11=new Box(800,100,70,70)
  box12=new Box(800,100,70,70)
  
  box13=new Box(700,100,70,70)
  box14=new Box(700,100,70,70)
  box15=new Box(700,100,70,70)
  box16=new Box(700,100,70,70)
  box17=new Box(700,100,70,70)
  box18=new Box(700,100,70,70)
  box19=new Box(700,100,70,70)
  box20=new Box(700,100,70,70)

  //creating ball
  bob=new Bob(200,200)

  //creating rope and attaching the ball
  rope=new Rope(bob.body, {x: 500, y: 50});
}

function draw() {
  background(0);
  Engine.update(engine);

  //displaying the ground
  
  ground.display();

  //displaying the boxes
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  
  //displaying the ball
  bob.display();

  //displaying the rope
  rope.display();

  
}


function mouseDragged(){
  
  Matter.Body.setPosition(bob.body, {x:mouseX, y:mouseY});

}
