var ghost, ghostImg;
var bg, bgImg;
var girl, girlImg, g1,g2;
var girl,girlImg, g1, gg2
var obsGroup,obs1,obs2;
var gameState = "play"

var obsGroup, obs1


function preload(){
ghostImg= loadAnimation("ghost-standing.png","ghost-jumping.png" );
bgImg = loadImage("bg.png");
girlImg = loadAnimation("girl.png", "girl2.png");

obs1 = loadImage("obs1.png");
obs2 = loadImage("obs2.png");
}

function setup() {
    createCanvas(600,600);
    bg = createSprite(300,300);
    bg.addImage("bg",bgImg);
    bg.velocityX=-1;
    

    girl = createSprite(60,520,20,50)
    girl.addAnimation("girlImg", girlImg)
    girl.scale= 0.5
    
    
}
    function draw(){
   girl.debug = true;
  background(255);
  //text("Score: "+ score, 500,50);
  
  //if (gameState===PLAY){
   // score = score + Math.round(getFrameRate()/60);
   // ground.velocityX = -(6 + 3*score/100);
  
  //  if(keyDown("space") && trex.y >= 159) {
    //  trex.velocityY = -12;
   // }
  
    //trex.velocityY = trex.velocityY + 0.8
  
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
  
   // trex.collide(invisibleGround);
   // spawnClouds();
   // spawnObstacles();
  
   // if(obstaclesGroup.isTouching(trex)){
  //      gameState = END;
  //  }
 // }
  //else if (gameState === END) {
   // gameOver.visible = true;
   // restart.visible = true;
    
    //set velcity of each game object to 0
    //ground.velocityX = 0;
    //trex.velocityY = 0;
    //obstaclesGroup.setVelocityXEach(0);
    //cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    //trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    //obstaclesGroup.setLifetimeEach(-1);
    //cloudsGroup.setLifetimeEach(-1);
    
    //if(mousePressedOver(restart)) {
     // reset();
   // }
   drawSprites()
  
 
function spawnObs (){
  if (frameCount% 60 ===0){
  var obs= createSprite(600,165,10,40);
  obs.addImage(obs1)
  obs.x = Math.round(random(120,400));
  obs.velocity= 1

  obs.scale = 0.5;
  obs.lifetime = 300;
  obsGroup.add(obs);
  }
}
