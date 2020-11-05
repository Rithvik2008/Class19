var movingRect, fixedRect

function setup() {
  createCanvas(400,400);
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor="blue"
  fixedRect = createSprite(200, 200, 50, 50)
  fixedRect.shapeColor="green"
}

function draw() {
  background(0);
  movingRect.y=mouseY
  movingRect.x=mouseX  
  drawSprites();
}