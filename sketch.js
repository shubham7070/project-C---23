var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	packageBody = Bodies.circle(width/2-300, 200, 5, {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	helicopterSprite = createSprite(width/2-300, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	//Create a Ground
	groundSprite = createSprite(width/2, height-35, 800, 10);
	groundSprite.shapeColor=color("yellow");

	groundBody = Bodies.rectangle(width/2, 650, 800, 10, {isStatic:true} );
 	World.add(world, groundBody);
	

 	boxPosition = width/2-100;
 	boxY = 610;


 	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
 	boxleftSprite.shapeColor=color("red");

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBottom = createSprite(boxPosition+100, boxY+40, 200, 20);
 	boxBottom.shapeColor=color("red");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200, 20, {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite = createSprite(boxPosition+200 , boxY, 20 ,100);
 	boxRightSprite.shapeColor=color("red");

 	boxRightBody = Bodies.rectangle(boxPosition+200, boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  if(keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x-20;
	  Matter.Body.translate(packageBody, {x:-20, y:0});
  }

  if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x+20;
	  Matter.Body.translate(packageBody, {x:+20, y:0});
  }

  if(keyCode === DOWN_ARROW){
	  Matter.Body.setStatic(packageBody, false);
  }

  
  drawSprites();
  
}
