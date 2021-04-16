const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function preload(){

}


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,700,20);

  for(var i = 0; i<=width;i = i+80) {
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))

  }
  for(var k= 75;k<=width;k = k+50){
    plinkos.push(new Plinko(k,75));
  }

  for(var k= 50;k<=width-10;k = k+50){
    plinkos.push(new Plinko(k,175));
  }

  for(var k= 75;k<=width;k = k+50){
    plinkos.push(new Plinko(k,275));
  }

  for(var k= 50;k<=width-10;k = k+50){
    plinkos.push(new Plinko(k,375));
  }

  Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  
  drawSprites();

  for(var n = 0;n<divisions.length;n++){
    divisions[n].display();
  }
  
  if(frameCount %60 ===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var a = 0;a<particles.length;a++){
    particles[a].display();
  }

  for(var b = 0;b<plinkos.length;b++){
    plinkos[b].display;
  }

  ground.display();
  


}