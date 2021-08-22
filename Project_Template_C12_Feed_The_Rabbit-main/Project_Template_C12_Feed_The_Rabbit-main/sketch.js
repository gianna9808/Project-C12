var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  pathImg = loadImage("path.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  // Moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 0.5;

if(path.y > 400){
  path.y = height/2;
}

//creating boy running
rabbit = createSprite(200,340,30,30);
rabbit.scale =0.07;
rabbit.addImage(rabbitImg);

leavesGroup = new Group ();
applesGroup = new Group ();
}

function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(apple){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.scale = 0.07;
  apple.lifetime(frameCount % 80 === 0);
}

function createLeaves(leaves){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leafImg);
  leaves.velocityY = 4
  leaves.scale = 0.07;
  leaves.lifetime(frameCount % 80 == 0);
}