var fixedobject, movingobject
function setup() {
  createCanvas(800,400);
  fixedobject = createSprite(600,300,50,50)
  movingobject = createSprite(700,200,50,50)
  fixedobject.shapeColor = "yellow"
  movingobject.shapeColor = "yellow"
 
}


function draw() {
  background("black"); 
  movingobject.x = mouseX
  movingobject.y = mouseY

  if(movingobject.x - fixedobject.x <movingobject.width/2+fixedobject.width/2 &&
    fixedobject.x - movingobject.x <fixedobject.width/2+movingobject.width/2 &&
    movingobject.y - fixedobject.y <movingobject.width/2+fixedobject.width/2 &&
    fixedobject.x - movingobject.x <fixedobject.width/2+movingobject.width/2){
    fixedobject.shapeColor= "purple"
    movingobject.shapeColor= "purple"
  }
  else{fixedobject.shapeColor = "yellow"
       movingobject.shapeColor = "yellow"}
  drawSprites();
}
