var still;
var moving;

function setup() {
  createCanvas(1200,800);
  still=createSprite(400, 200, 50, 50);
  still.shapeColor="green";
  moving=createSprite(200, 200, 50, 20);
  moving.shapeColor="red";
still.velocityX=1;
still.velocityY=1;
}

function draw() {
  background("black");  
  drawSprites();
moving.y=World.mouseY
moving.x=World.mouseX
//istouching();
bounceOff()
}

function istouching(){
  if (moving.x-still.x<moving.width/2+still.width/2&&
    still.x-moving.x<moving.width/2+still.width/2&&
    moving.y-still.y<moving.height/2+still.height/2&&
    still.y-moving.y<moving.height/2+still.height/2){
  still.shapeColor="yellow";
  moving.shapeColor="white";
  }
  else{ 
  still.shapeColor="green";
  moving.shapeColor="red";
  }
  }
  function bounceOff(){
    if (moving.x-still.x<moving.width/2+still.width/2&&
      still.x-moving.x<moving.width/2+still.width/2)
    
    {
     moving.velocityX=moving.velocityX*(-1);
    still.velocityX=still.velocityX*(-1);
    }
    if (moving.y-still.y<moving.height/2+still.height/2&&
      still.y-moving.y<moving.height/2+still.height/2)
    
    {
     moving.velocityY=moving.velocityY*(-1);
    still.velocityY=still.velocityY*(-1);
    }
  }