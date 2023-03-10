var PLAY = 1
var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var orangeLeaf, orangeImg;


function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png");
orangeImg = loadImage("orangeLeaf.png");
leafImg = loadImage ("leaf.png");
}

function setup(){
  
createCanvas(400,400);

// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
if (gameState = PLAY){
background(0);
var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0){
if (select_sprites == 1){
createApples();
} else if (select_sprites == 2){
createOrangeLeaf();
} else{
createLeaf();
}
}

rabbit.x = World.mouseX;
edges= createEdgeSprites();
}

drawSprites();
}

function createApples (){
apple = createSprite (random (50, 350), 40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=3;
apple.lifetime=150;
}
      
function createOrangeLeaf(){
orangeLeaf = createSprite (random(50, 350), 40, 10, 10);
orangeLeaf.addImage (orangeImg);
orangeLeaf.scale=0.08;
orangeLeaf.velocityY=3;
orangeLeaf.lifetime=150;
}

function createLeaf(){
leaf = createSprite (random(50, 350), 40, 10, 10);
leaf.addImage (leafImg);
leaf.scale=0.08;
leaf.velocityY=3;
leaf.lifetime=150;
}