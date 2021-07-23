const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player = new Player(200,400,100,200)
   compPlayer = new CompPlayer(700,400,100,200)
   compBase = new CompBase(700,550,200,200)
   playerBase = new Playerbase(200,550,200,200)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer
   player.display()
   compPlayer.display()
   compBase.display()
   playerBase.display()
   


}
