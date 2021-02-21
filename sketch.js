const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world; 
var box1;
var polygonI
function preload() {

  polygonI = loadImage("polygon.png")
   


 

}


function setup() {

  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
  box1 = new Box(120,275,30,40)
  box2 = new Box(150,275,30,40)
  box3 = new Box(180,275,30,40)
  box4 = new Box(210,275,30,40)
  box5 = new Box(240,275,30,40)
  box6 = new Box(270,275,30,40)
  box7 = new Box(300,275,30,40)

  box8 = new Box(135,235,30,40)
  box9 = new Box(165,235,30,40)
  box10 = new Box(195,235,30,40)
  box11 = new Box(225,235,30,40)
  box12 = new Box(255,235,30,40)
  box13 = new Box(285,235,30,40)

  box14 = new Box(150,195,30,40)
  box15 = new Box(180,195,30,40)
  box16 = new Box(210,195,30,40)
  box17 = new Box(250,195,30,40)

  box18 = new Box(180,155,30,40)
  box19 = new Box(210,155,30,40)

  box20 = new Box(195,115,30,40)

  ground = new Ground(600,380,1200,20)

  ball = Bodies.circle(50,200,20); 
   World.add(world,ball); 

   slingshot = new SlingShot(this.ball,{x:100,y:200})

}



function draw() {
background("lightblue")
Engine.update(engine);

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
  box18.display()
  box19.display();
  box20.display();
  ground.display();
  slingshot.display();

  imageMode(CENTER);
   image(polygonI,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY})
}

function mouseReleased(){

slingShot.fly()
}