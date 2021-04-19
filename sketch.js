const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var score
var particles
var GameState

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


score = 0;
GameState = 0;
  
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  

  ground = new Ground(3,400,400,5);
  
}




function draw() {
  background(255,255,255);  
  Engine.update(engine)
  // I forgot how exactly to display the score using the text fuction.
  text('score:' +score, 50, 150)
  

  ground.display()

  for (var j = 0;j<particles.length;j++){
    particles[j].display();
  }

  for (var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }

  for (var s = 0;s<plinkos.length;s++){
    plinkos[s].display();
  }
}




for (var k = 0; k<= width; k=k + 80) {
  divisions.push(new divisions (k,height-divisionHeight/2,10,divisionHeight));
}


for (var j = 40;j<=width;j=j+50 ){
  plinkos.push(new Plinko(j,75));
}

for (var j = 15;j<=width-10;j=j+50 ){
  plinkos.push(new Plinko(j,175));
}

for (var j = 40;j<=width;j=j+50 ){
  plinkos.push(new Plinko(j,275));
}

for (var j = 15;j<=width-10;j=j+50 ){
  plinkos.push(new Plinko(j,375));
}


if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10));

}