var ship, shipgo
var sea
function preload(){
  shipgo= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  sea=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  ship=createCanvas(50,160,20,50);
  ship.addAnimation("runing",shipgo);
  if
  ship.sacle= 0.5;
  ship.x=50;
  sea= createCanvas (200,180,400,20);

}

function draw() {
  background("blue");
 console.log(sea.y)
}