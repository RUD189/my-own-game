var boy,boyImg,boyImg2,boyImg3,boyImg4;

var dog,dogImg,dogImg2,dogImg3,dogImg4,barking;

var backGround,backImg,backM;

var invisibleGround;
var backI;
var waterPump,waterPumpImg,waterPumpGroup;

var tyres,tyresImg,tyresGroup;

var bench,benchImg,benchGroup;

var popSound,jumpSound;

var bBalloon,bBalloonImg,bBalloonGroup;

var rBalloon,rBalloonImg,rBalloonGroup;

var gBalloon,gBalloonImg,gBalloonGroup;

var font;

var score = 0;

var Balloons = 0;

var gameState = "START" ,START = 2,PLAY = 1,END = 0,EN = 0;

var gameOver,gameOverImg,restart,restartImg;

var bar1,bar1Img,bar2,bar2Img,bar3,bar3Img;

var count = 3;

var bunch,bunchImg;

var button,buttonImg;

var bS,tS,wS,OS;

var won,wonImg;

function preload(){
boyImg = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png");
boyImg2 = loadAnimation("boyfall.png");
boyImg3 = loadAnimation("Tboy.png");
boyImg4 = loadAnimation("aaboy.png");

dogImg = loadAnimation("dog1s.png","dog2s.png","dog3s.png","dog4s.png");
dogImg2 = loadAnimation("dog4s.png");
dogImg3 = loadAnimation("dog5.png");
dogImg4 = loadAnimation("dog1f.png","dog2f.png","dog3f.png","dog4f.png")
backImg = loadImage("back11ss.png");

font = loadFont("FEASFBRG.TTF");

waterPumpImg = loadImage("obs1.png");
tyresImg = loadImage("obs2.png");
benchImg = loadImage("obs3.png");

popSound = loadSound("pop.mp3");
jumpSound = loadSound("jump.mp3");
barking = loadSound("back.mp3");
bS = loadSound("benchS.wav");
tS = loadSound("tyreS.wav");
wS = loadSound("pumpS.wav");
OS = loadSound("lose.wav");

bunchImg = loadAnimation("bunchs.png");
backI = loadImage("backssss.jpg");

bBalloonImg = loadAnimation("bballoon1.png");
rBalloonImg = loadAnimation("rballon.png");
gBalloonImg = loadAnimation("gballoon1.png");

gameOverImg = loadAnimation("overs.png");
restartImg = loadAnimation("reset.png");
wonImg = loadAnimation("won.png");

bar1Img =  loadAnimation("bars1.jpg");
bar2Img =  loadAnimation("bars2.png");
bar3Img =  loadAnimation("bars3.png");

buttonImg = loadAnimation("play.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    
 
        
    

    backGround = createSprite(width/2 + 1900,windowHeight/2);
    backGround.addImage(backImg);
    backGround.scale = 0.7;
    button = createSprite(windowWidth/2,windowHeight/2 + 100);
    button.addAnimation("plays",buttonImg);  

    boy = createSprite(windowWidth/2 - 700,windowHeight/2+250);
    boy.addAnimation("boyI",boyImg);
    boy.scale = 1.95;

    dog = createSprite(windowWidth/2 - 1100,windowHeight/2+280);
    dog.addAnimation("dogI",dogImg);
    dog.scale = 1.2;

    invisibleGround = createSprite(windowWidth/2,windowHeight/2 + 340,width,20);
    invisibleGround.visible = false;

    

    bunch = createSprite(windowWidth/2 + 1100,windowHeight/2 - 100);
    bunch.addAnimation("bunches",bunchImg);
    bunch.scale = 0.4;

    waterPumpGroup = createGroup();
    tyresGroup = createGroup();
    benchGroup = createGroup();

    bBalloonGroup = createGroup();
    rBalloonGroup = createGroup();
    gBalloonGroup = createGroup();
    

    gameOver = createSprite(windowWidth/2,windowHeight/2 - 200);
    gameOver.addAnimation("gameOver",gameOverImg);
    gameOver.scale = 1.7;

    restart = createSprite(windowWidth/2,windowHeight/2 + 80);
    restart.addAnimation("restart",restartImg);
    restart.scale = 0.9;

    won = createSprite(windowWidth/2,windowHeight/2 -170);
    won.addAnimation("won",wonImg);
    won.scale = 1.1;

    bar1  = createSprite(windowWidth/2,windowHeight/2 - 420);
    bar1.addAnimation("life",bar1Img);
    bar1.scale = 0.5;
   

    bar2  = createSprite(windowWidth/2,windowHeight/2 - 420);
    bar2.addAnimation("lifes",bar2Img);
    bar2.scale = 0.5;
    bar2.visible = false; 
    
    bar3  = createSprite(windowWidth/2,windowHeight/2 - 420);
    bar3.addAnimation("lifess",bar3Img);
    bar3.scale = 0.5;
    bar3.visible = false;

    dog.setCollider("rectangle",40,0,170,90,0);
    dog.debug = false;

    boy.setCollider("rectangle",-10,10,25,70,0);
    boy.debug = false;

  }
  
  function draw() {
    background(backI);
    if(gameState === "START"){
    
      boy.visible = false;
      dog.visible = false;
      bunch.visible = false;
     restart.visible = false;
     gameOver.visible = false;
     won.visible = false;
     backGround.visible = false;
      bar1.visible = false;
      bar2.visible = false;
      bar3.visible = false;
      
      if(mousePressedOver(button)){
        gameState = "PLAY";
        wS.play();
        button.visible = false; 
      }

    }
 
    if(gameState === "PLAY"){
    
      boy.visible = true;
      dog.visible = true;
      bunch.visible = true;
      won.visible = false;
     dog.setCollider("rectangle",50,0,180,90,0);
     dog.debug = false;
      backGround.visible = true;
    gameOver.visible = false;
    restart.visible = false;
    boy.setCollider("rectangle",-10,10,25,70,0);
    boy.debug = false;
    score = score + Math.round(getFrameRate()/60);

    backGround.velocityX = -11;

    if(backGround.x < windowWidth/2-1910){
        backGround.x = width/2 + 1900;
    }   

       if(keyDown("space") && boy.y >= windowHeight/2 + 230 && boy.x >=  windowWidth/2 - 300 ){
        boy.velocityY = -23;
        jumpSound.play();
    }
    if(boy.y <= windowHeight/2 + 240){
    boy.setCollider("rectangle",10,5,30,90,50);
    boy.debug = false;
    }



    if(dog.isTouching(tyresGroup) || dog.isTouching(benchGroup) || dog.isTouching(waterPumpGroup)){
      dog.velocityY = -18;
    }

    boy.velocityY = boy.velocityY + 1;
    dog.velocityY = dog.velocityY + 1;
   

    if(boy.isTouching(bBalloonGroup)){
      Balloons += 1;
    bBalloonGroup.destroyEach();
    popSound.play();
    }

    

    if(boy.isTouching(rBalloonGroup)){
      Balloons += 1;
    rBalloonGroup.destroyEach();
    popSound.play();
    }

    if(boy.isTouching(gBalloonGroup)){
      Balloons += 1;
    gBalloonGroup.destroyEach();
    popSound.play();
    }
    if(count === 3){
      bar1.visible = true;
    }
    if(boy.isTouching(waterPumpGroup)){

      count = count-1;

      if(count === 2){
        wS.play();
       bar1.visible = false;
       bar2.visible = true;
       waterPumpGroup.destroyEach();
    }
     

      if(count === 1){
      gameState = "END";
      OS.play();
      if(dog.x < windowWidth /2 - 650){
        wS.play();
        }
    bar2.visible = false;
    bar3.visible  = true;
    boy.x -= 130;
    boy.setCollider("rectangle",-10,-12,25,70,0);
    boy.debug = false;
      }
    }
    
    
    if(boy.isTouching(tyresGroup)){

      count = count-1;

      if(count === 2){
        tS.play();
       bar1.visible = false;
       bar2.visible = true;
       tyresGroup.destroyEach();
      
      
     
      }
      
      if(count === 1){
    gameState  = "END";
    OS.play();
    if(dog.x < windowWidth /2 - 650){
    tS.play();
    }
    bar2.visible = false;
    bar3.visible  = true;
    boy.x -= 150;
    boy.setCollider("rectangle",-10,-12,25,70,0);
    boy.debug = false;
      }
    }
  
    
    if(boy.isTouching(benchGroup)){
      count -= 1;
      if(count === 2){
        bS.play();
       bar1.visible = false;
       bar2.visible = true;
       benchGroup.destroyEach();

       
        
        
      }
      
      if(count === 1){
    gameState  = "END";
    OS.play();
    if(dog.x < windowWidth /2 - 640){
      bS.play();
      }
    
    bar2.visible = false;
    bar3.visible  = true;
    boy.x -= 170;
    boy.setCollider("rectangle",-10,-12,25,70,0);
    boy.debug = false;
      }
    }
 
     
    

    if(score > 0 && score % 500 === 0){
      bunch.velocityX = -11;
    }
   
    if(bunch.x < windowWidth/2 - 1100){
      bunch.x = windowWidth/2 + 1100;
      bunch.velocityX = 0;
    }
    if(boy.isTouching(bunch)){
    
      
      bunch.velocityY = -6;
      bunch.velocityX = 3;
      boy.x = bunch.x - 45;
      boy.y = bunch.y + 160;
      boy.velocityY = bunch.velocityY;
      boy.velocityX = bunch.velocityX;
      boy.addAnimation("boyI",boyImg4);
      
      benchGroup.setVelocityXEach(0);
    tyresGroup.setVelocityXEach(0);
    waterPumpGroup.setVelocityXEach(0);
    bBalloonGroup.setVelocityXEach(0);
    rBalloonGroup.setVelocityXEach(0);
    gBalloonGroup.setVelocityXEach(0);

    bBalloonGroup.setVelocityYEach(0);
    rBalloonGroup.setVelocityYEach(0);
    gBalloonGroup.setVelocityYEach(0);
    backGround.velocityX = 0;
    dog.addAnimation("dogI",dogImg3);

    benchGroup.setLifetimeEach(-1);
    tyresGroup.setLifetimeEach(-1);
    waterPumpGroup.setLifetimeEach(-1);
    bBalloonGroup.setLifetimeEach(-1);
    rBalloonGroup.setLifetimeEach(-1);
    gBalloonGroup.setLifetimeEach(-1);
    }

    if(boy.y < height /2 - 550){
      gameState = "EN";
      OS.play();
    }

    if(score > 45){
      dog.velocityX = 11;
      boy.velocityX = 11;
    
    }
   
    if(dog.x > windowWidth/2 - 680){
      dog.velocityX = 0;
      
    }

    if(boy.x > windowWidth/2 - 250){
      boy.velocityX = 0;
    }
    if(dog.x > windowWidth/2 -1040 && dog.x < windowWidth/2 -1010 || dog.x > windowWidth/2 - 970 && dog.x < windowWidth/2 -950 || dog.x > windowWidth/2 - 940 && dog.x < windowWidth/2 -920){
      barking.play();
    }
    
    
    spawnBench();
    spawnTyres();
    spawnWaterPump();

    spawnbBalloon();
    spawnrBalloon();
    spawngBalloon();
    
}

      

  if(gameState === "END"){
    textSize(20);
    textFont(font);
    text("YOU LOST !",windowWidth/2,windowHeight/2-400);
    boy.velocityY = 10;
    dog.velocityX = 5;
    dog.velocityY = 10;
    boy.velocityX = 0;
    bunch.velocityX = 0;
    bunch.velocityY = 0;

    dog.setCollider("rectangle",15,0,110,90,0);
    dog.debug = false;
    won.visible = false;
    backGround.velocityX = 0;
    benchGroup.setLifetimeEach(-1);
    tyresGroup.setLifetimeEach(-1);
    waterPumpGroup.setLifetimeEach(-1);
    bBalloonGroup.setLifetimeEach(-1);
    rBalloonGroup.setLifetimeEach(-1);
    gBalloonGroup.setLifetimeEach(-1);
    boy.addAnimation("boyI",boyImg2);
    
   
    benchGroup.setVelocityXEach(0);
    tyresGroup.setVelocityXEach(0);
    waterPumpGroup.setVelocityXEach(0);
    bBalloonGroup.setVelocityXEach(0);
    rBalloonGroup.setVelocityXEach(0);
    gBalloonGroup.setVelocityXEach(0);

    bBalloonGroup.setVelocityYEach(0);
    rBalloonGroup.setVelocityYEach(0);
    gBalloonGroup.setVelocityYEach(0);
if(dog.isTouching(boy)){
  
      dog.velocityX  = 0;
      gameOver.visible = true;
    restart.visible = true;
   
    
    dog.addAnimation("dogI",dogImg2);
    if(mousePressedOver(restart)){
      reset();
      OS.play();
    }
   
  }
  textSize(45);
  textFont(font);
  fill("chartreuse");
  text("YOU LOST !",windowWidth/2 - 80,windowHeight/2-405);
  }

  if(gameState === "EN"){
    bunch.velocityX = 0;
    bunch.velocityY = 0;
    boy.velocityY = 0;
    dog.velocityX = 0;
    dog.velocityY = 10;
    boy.velocityX = 0;


    dog.setCollider("rectangle",15,0,110,90,0);
    dog.debug = false;

    backGround.velocityX = 0;
    benchGroup.setLifetimeEach(-1);
    tyresGroup.setLifetimeEach(-1);
    waterPumpGroup.setLifetimeEach(-1);
    bBalloonGroup.setLifetimeEach(-1);
    rBalloonGroup.setLifetimeEach(-1);
    gBalloonGroup.setLifetimeEach(-1);
    boy.addAnimation("boyI",boyImg2);

   
    benchGroup.setVelocityXEach(0);
    tyresGroup.setVelocityXEach(0);
    waterPumpGroup.setVelocityXEach(0);
    bBalloonGroup.setVelocityXEach(0);
    rBalloonGroup.setVelocityXEach(0);
    gBalloonGroup.setVelocityXEach(0);

    bBalloonGroup.setVelocityYEach(0);
    rBalloonGroup.setVelocityYEach(0);
    gBalloonGroup.setVelocityYEach(0);

  
    

    won.visible = true;
    restart.visible = true;
    dog.addAnimation("dogI",dogImg3);
    if(mousePressedOver(restart)){
      reset();
      OS.play();
    
   }
  
  }

  boy.collide(invisibleGround);
    dog.collide(invisibleGround);
    drawSprites();
  if(gameState === "PLAY" || gameState === "END"){
    textFont(font);
    fill("red");
    textSize(45);
    text("SCORE : " + score,windowWidth/2-950,windowHeight/2 - 410);
    text("BALLOONS : " + Balloons,windowWidth/2 + 700,windowHeight/2-410);
  }
  if(gameState === "END" && dog.isTouching(boy)){
    textSize(45);
    textFont(font);
    fill("red");
    text("YOU LOSE !",windowWidth/2 - 80,windowHeight/2-405);
  }

  }

  

  function reset(){
    gameState = "PLAY";
    dog.velocityX = 0;
    dog.x  = windowWidth/2 - 1040;
    boy.x  = windowWidth/2 - 700;
    boy.y = windowHeight/2+250;
    bunch.x = windowWidth/2 + 1100;     
    bunch.y =  windowHeight/2 - 100;
    benchGroup.destroyEach();
    waterPumpGroup.destroyEach();
    tyresGroup.destroyEach();
    rBalloonGroup.destroyEach();
    bBalloonGroup.destroyEach();
    gBalloonGroup.destroyEach();
    boy.addAnimation("boyI",boyImg);
    dog.addAnimation("dogI",dogImg);
    score = 0;
    Balloons = 0;
    count = 3;
    bar1.visible = true;
    bar2.visible = false;
    bar3.visible = false;
  }

  function spawnBench(){
    if(frameCount % 350 === 0){
      bench = createSprite(width/2 + 1100,height/2 + 275);
      bench.addImage("bench",benchImg);
      bench.velocityX = -11; 
      bench.setCollider("rectangle",0,0,150,80,0);
      bench.debug = false;
      bench.scale = 0.24;
      benchGroup.add(bench);
    
    }
      
  }
  function spawnWaterPump(){
    if(frameCount % 350 === 0){
      waterPump = createSprite(bench.x + 1680,height/2 + 275);
      waterPump.debug = false;
      waterPump.setCollider("rectangle",0,0,50,70,0);
     waterPump.addImage("pump",waterPumpImg);
      waterPump.velocityX =-11; 
      waterPump.scale = 1.2;
      waterPumpGroup.add(waterPump);
    }
  }
  function spawnTyres(){
    if(frameCount % 350 === 0){
      tyres = createSprite(bench.x + 2800,height/2 + 275);
      tyres.addImage("tyres",tyresImg);
      tyres.velocityX = -11;  
      tyres.scale = 0.9;
      tyres.debug = false;
      tyres.setCollider("rectangle",10,0,100,120,0);
      tyresGroup.add(tyres);
   
    }
    }

  


function spawnbBalloon(){
  if(frameCount % 250 === 0){
    bBalloon = createSprite(width/2 + 1200,height);
    bBalloon.addAnimation("blue",bBalloonImg);
    bBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    bBalloon.velocityX = -11; 
    bBalloon.scale = 1.1;
    bBalloon.velocityY = -0.1;
    bBalloon.debug = false;
      bBalloon.setCollider("circle",0,0,22);
    bBalloonGroup.add(bBalloon);
    gameOver.depth = bBalloon.depth;
    gameOver.depth = bBalloon.depth + 1;
    restart.depth = bBalloon.depth;
    restart.depth = bBalloon.depth + 1;
    won.depth = bBalloon.depth;
    won.depth = bBalloon.depth + 1;
  }
}

function spawnrBalloon(){
  if(frameCount % 190 === 0){
    rBalloon = createSprite(width/2 + 1200,height);
    rBalloon.addAnimation("red",rBalloonImg);
    rBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    rBalloon.velocityX = -11; 
    rBalloon.scale = 1.1;
    rBalloon.velocityY = -0.1;
    rBalloon.debug = false;
    rBalloon.setCollider("circle",0,0,20);
    rBalloonGroup.add(rBalloon);
    gameOver.depth = rBalloon.depth;
    gameOver.depth = rBalloon.depth + 1;
    restart.depth = rBalloon.depth;
    restart.depth = rBalloon.depth + 1;
    won.depth = rBalloon.depth;
    won.depth = rBalloon.depth + 1;
  }
}

function spawngBalloon(){
  if(frameCount % 120 === 0){
    gBalloon = createSprite(width/2 + 1200,height);
    gBalloon.addAnimation("blue",gBalloonImg);
    gBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    gBalloon.velocityX = -11; 
    gBalloon.scale = 1.1;
    gBalloon.debug = false;
    gBalloon.setCollider("circle",0,0,20);
    gBalloonGroup.add(gBalloon);
    gBalloon.velocityY = -0.1;
    gameOver.depth = gBalloon.depth;
    gameOver.depth = gBalloon.depth + 1;
    restart.depth = gBalloon.depth;
    restart.depth = gBalloon.depth + 1;
    won.depth = gBalloon.depth;
    won.depth = gBalloon.depth + 1;
  }
}



