var Chi1;
var Chi2;
var z = 0;
var speed = 2;
var move = 0;

function preload() {
myFont= loadFont('big_noodle_titling.ttf');
Chi1= loadImage('Chi.png');
Chi2= loadImage('Chi2.png');
}

function setup() {
   
createCanvas(windowWidth, windowHeight);

fill(235);
textFont(myFont);
    
}

function draw() {
    background(250);
      if(mouseIsPressed){
        background(Chi2);
    } else {
        background(Chi1);
    }
   
textSize(100);
    text("AMBITIOUS", 200, z);
    text("RESOURCEFUL", 200, z-150);
    text("ANALYTICAL", 200, z-300);
    text("CONSISTENT", 200, z-450);
    text("ORIGINAL", 200, z-600);
    text("PASSIONATE", 200, z-750);
    text("ADAPTABLE", 200, z-900);

if (z > height + 970) {
       speed = -2;
   }
 if (z < height - 800) {
     speed= 2;
 }   
 z = z + speed;
 
   
}
