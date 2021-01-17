var ghost,climber,door,tower;
var ghostImage,climberImage,doorImage,towerImage;
var gameGroup;

function preload(){
  ghostImage=loadImage("ghost-jumping.png");
  climberImage=loadImage("climber.png");
  doorImage=loadImage("door.png");
  towerImage=loadImage("tower.png");
  
}


function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  ghost=createSprite(200,200);
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
  tower.velocityY=2;
  gameGroup=new Group()
  gameGroup.add(tower);
  gameGroup.add(ghost);
  
  
}

function draw(){
  if(tower.y>600){
    tower.y=300
    
  }
  if(keyDown("space") ){
    ghost.velocityY=-10;
    
  }
  ghost.velocityY=ghost.velocityY+0.8;
if(keyDown("left")){
  ghost.x=ghost.x-5;
}
  if(keyDown("right")){
    ghost.x=ghost.x+5;
    
  }
  

  spawnDoors();
  drawSprites() 
  if(ghost.y>600){
    background("black");
    textSize(30);
    fill("yellow");
    text("GAME OVER",200,300);
    gameGroup.destroyEach();
    
  }
}

function spawnDoors(){
  if(frameCount%240===0){
    door=createSprite(random(120,400),-50);
    door.addImage(doorImage);
    climber=createSprite(door.x,10);
    climber.addImage(climberImage);
    door.velocityY=2;
    climber.velocityY=2
    gameGroup.add(door);
    gameGroup.add(climber);
    
    
  }
  
}




