var box;

function setup() {
  createCanvas(600,550);

  box = createSprite(200,200,30,30);
  box.shapeColor = "green";
}




function draw() 
{
  //background(30);

  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 5
  }
  drawSprites()

  
}




