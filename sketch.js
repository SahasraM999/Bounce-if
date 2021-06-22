var fixedrect,movingrect
var duno,why
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(1100, 200, 50, 50);
  fixedrect.shapeColor="Lavender"
  movingrect=createSprite(100,200,80,30)
  movingrect.shapeColor="Lavender"
  duno=createSprite(100,70,80,99)
  duno.shapeColor="Teal"
  why=createSprite(100,750,23,233)
  why.shapeColor="Teal"

  fixedrect.velocityX=-5
  movingrect.velocityX=5

  duno.velocityY=5
  why.velocityY=-5
}

function draw() {
  background(0);  

  bounce(duno,why)
  drawSprites();
  
}
function bounce(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2 &&
    object2.x-object1.x<=object1.width/2+object2.width/2 ){
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)

    }
    if(object2.y-object1.y<=object1.height/2+object2.height/2 &&
      object1.y-object2.y<= object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1)
        object2.velocityY=object2.velocityY*(-1)
      }
    }
