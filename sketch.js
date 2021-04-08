const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,canvas;
var ground,stand,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var polygon,slingshot,polygonIMG;
var score=0;
function preload() {
    polygonIMG=loadImage("polygon.png")
}

function setup(){
    canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,600,1000,20)
    stand =new Ground(580,500,300,20)
    stand2=new Ground(800,200,220,20)

    //level 4
   block1 =new Box(460,465,40,50)
   block2 =new Box(500,465,40,50)
   block3 =new Box(540,465,40,50)
   block4 =new Box(580,465,40,50)
   block5 =new Box(620,465,40,50)
   block6 =new Box(660,465,40,50)
   block7 =new Box(700,465,40,50)
   //level 3
   block8  =new Box(500,415,40,50)
   block9  =new Box(540,415,40,50)
   block10 =new Box(580,415,40,50)
   block11 =new Box(620,415,40,50)
   block12 =new Box(660,415,40,50)
   //level 2
   block13 =new Box(540,365,40,50)
   block14 =new Box(580,365,40,50)
   block15 =new Box(620,365,40,50)
   //level 1
   block16 =new Box(580,315,40,50)
   
   // stand2
   // level 3
   block17 =new Box(720,165,40,50)
   block18 =new Box(760,165,40,50)
   block19 =new Box(800,165,40,50)
   block20 =new Box(840,165,40,50)
   block21 =new Box(880,165,40,50)
   //level 2
   block22 =new Box(760,115,40,50)
   block23 =new Box(800,115,40,50)
   block24 =new Box(840,115,40,50)
   //level 1
   block25 =new Box(800,65,40,50)
   
  
  
   //polygon
   polygon=Bodies.circle(50,200,20)
   World.add(world,polygon)
   
  
   slingshot=new SlingShot(polygon,{x:100,y:300})

}   

function draw(){
      background(0);
      Engine.update(engine);
    imageMode(CENTER)
    image(polygonIMG,polygon.position.x,polygon.position.y,80,80)
    fill("white")
    textSize(20)
    text(" SCORE "+ score,100,50)
    
    ground.display()
    stand.display()
    stand2.display()
    
    fill("lightgreen")
    block1.display()
    fill("lightgreen")
    block2.display()
    fill("lightgreen")
    block3.display()
    fill("lightgreen")
    block4.display()
    fill("lightgreen")
    block5.display()
    fill("lightgreen")
    block6.display()
    fill("lightgreen")
    block7.display()
    fill("brown")
    block8.display()
    fill("brown")
    block9.display()
    fill("brown")
    block10.display()
    fill("brown")
    block11.display()
    fill("brown")
    block12.display()
    fill("lightblue")
    block13.display()
    fill("lightblue")
    block14.display()
    fill("lightblue")
    block15.display()
    fill("lightpink")
    block16.display()
    fill("lightgreen")
    block17.display()
    fill("lightgreen")
    block18.display()
    fill("lightgreen")
    block19.display()
    fill("lightgreen")
    block20.display()
    fill("lightgreen")
    block21.display()
    fill("brown")
    block22.display()
    fill("brown")
    block23.display()
    fill("brown")
    block24.display()
    fill("lightblue")
    block25.display()
   
    block1.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()
    block15.score()
    block16.score()
    block17.score()
    block18.score()
    block19.score()
    block20.score()
    block21.score()
    block22.score()
    block23.score()
    block24.score()
    block25.score()
       
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon);
  }
}