var road;
var road_img;
var bgImage
var cars
var signal1,signal2
var boy,boy_walk;
var timer=0;
function preload(){
road_img=loadImage("onlyroad.jpg");
bgImage=loadImage("cityBackground.jpg");
cars = loadImage("cars1.png");
boy = loadAnimation("one.png");
signal1=loadImage("signal1.jpg");
signal2=loadImage("signal2.jpg");
boy_walk=loadAnimation("one.png","two.png","three.png","four.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg= createSprite(displayWidth/2,displayHeight/2);
bg.addImage(bgImage);
bg.scale=2;
 road= createSprite(displayWidth/2,displayHeight-50);
road.addImage(road_img);
signal=createSprite(800,250);
signal.addImage("signal1",signal1);
signal.addImage("signal2",signal2);
signal.scale=0.5;
boy1= createSprite(600,displayHeight-180);
boy1.addAnimation("boy1",boy);
boy1.addAnimation("boy2",boy_walk);
boy1.scale=1.5;
button=createButton("level2");
button.position(850,100);

}

function draw() {

  background("black");
   spawncars();
   textSize (30);
   fill ("black");
 console.log(boy1.y);
 timer= timer+ Math.round(getFrameRate()/60);
  text(timer,800,280);
  if(timer>200){
    timer=0;
    signal.changeImage("signal2");
  }
if((keyWentDown(DOWN_ARROW)) && (boy1.y<=708)){
  boy1.velocityY=3;
  boy1.changeAnimation("boy2");
  boy1.velocityX=0;

}
if(keyWentUp(DOWN_ARROW)){
  boy1.velocityY=0;
  boy1.changeAnimation("boy1");
  boy1.velocityX=0;
}
if(keyWentDown(UP_ARROW)&& boy1.y>=588){
  boy1.changeAnimation("boy2");
  boy1.velocityY=-3;
  boy1.velocityX=0;
}
if(keyWentUp(UP_ARROW)){
  boy1.velocityY=0;
  boy1.changeAnimation("boy1");
  boy1.velocityX=0;
}
button.mousePressed(()=>{
location.replace("first.html");
})


  drawSprites();
 // text(boy1.y+"_"+mouseY,300,300)
  textSize (30);
   fill ("red");

 
  text(timer,780,280);

}



function spawncars(){
  if(frameCount%500===0){
    car1= createSprite(0,displayHeight-50);
    car1.addImage(cars);
    car1.velocityX=3;
car1.scale=0.5;
  }}
 


