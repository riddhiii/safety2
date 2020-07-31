
var security1,security2;
var bg;
var childgroup;
var robAnimation;
var robAnimation2;
var robber;
var pg,security;
function preload(){
bg=loadImage("playg.png");
childgroup=loadImage("childgroup.png");
robAnimation1=loadAnimation("robber3.png");
robAnimation2=loadAnimation("robber4.png");
robAnimation3=loadAnimation("robber2.png","robber1.png","robber3.png","robber4.png");
pg=loadImage("pg.jpg");
security1=loadAnimation("security1.png","security2.png","security3.png","security4.png");
security2=loadAnimation("security5.png");

}

function setup(){
    createCanvas(displayWidth-20,750);
    road= createSprite(displayWidth/2,720,displayWidth-20,10);
robber=createSprite(100,100);
robber.addAnimation("robber1",robAnimation1);
robber.addAnimation("robber2",robAnimation2);
robber.velocityY=2;
robber.scale=0.3;
securityButton=createButton("call security");
securityButton.position(600,50);
security=createSprite(displayWidth-100,650);
security.addAnimation("security1",security1);
//security.addAnimation("security2",security2);
security.visible=false;
}



function draw(){
background(pg);

image(bg,600,300,500,500);
image(childgroup,980,500);
if(robber.collide(road))
{
    robber.changeAnimation("robber2");  
}
securityButton.mousePressed(()=>{
    security.visible=true;
    security.velocityX=-2;
})
drawSprites()
}