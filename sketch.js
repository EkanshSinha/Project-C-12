var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet=createCanvas(50,200,50,50);
  wall=createCanvas(1500,200,thickness,hight/2);

   //createSprite(400, 200, 50, 50);

   
   wall.shapeColour=colour(80,80,80);

   bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
   if(wall.x-bullet.x < (bullet.weight=wall.weight)/2)
   {
   bullet.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     bullet.shapeColour=colour(255,0,0);
   }

   speed=random(223,321);
   weight=random(30,52);
   thickness=random=(22,83);
   
   if(deformation<180 && deformation>100)
   {
     bullet.shapeColour=colour(230,230,0);
   }

   if(deformation<100)
   {
   bullet.shapeColour=color(0,255,0);

   }
   }
   hasCollided(lbullet,lwall);

   drawSprites();
}

function hasCollided(lbullet, lwall)
{

   bulletRightEdge= lbullet.x +bullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
   return true
   }
   return false;

}


