

var path , runner , runner_running ,path_image

function preload(){
  path_image = loadImage("path.png")
  runner_running = loadAnimation("Runner-1.png" ,"Runner-2.png")
}

function setup(){
  createCanvas(1690,820);
  //create sprites here

  path = createSprite(850,410,1000,820)
  runner = createSprite(850,700,20,20)



  path.addAnimation("path" , path_image)
runner.addAnimation("running" , runner_running)
runner.scale = 0.07

path.velocityY = 10
path.scale  = 2



}

function draw() {
  background(0);



if (keyDown("LEFT")){
  runner.x -= 10
}
if (keyDown("RIGHT")){
  runner.x += 10
}


  if(path.y >= 820 ){
    path.y = 100
    
  }


  drawSprites()

}
