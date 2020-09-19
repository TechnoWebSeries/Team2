var X = 0;
var M = 0;
var P = "• Move the mouse around to make a rainbow appear.";
var Q = "• Press and hold to make the cloud appear.";
var S = " Created By I.ARAVINDHAN From B.Tech/IT";
var T = " TECHNO WEBSERIES-2020";

function setup() { 
  createCanvas(400, 400);
} 


function draw() { 
  background(90,130,250);
	  ellipseMode(CENTER);
  noStroke()
  
  X = mouseY-100
  
  // RAINBOW !!!!
  
  // sky 1
  fill(120,140,250)
  rect(0,200,400,50)
  fill(60,110,200)
  rect(0,0,400,120)
  
  //violet
  fill(100,0,200,X)
  ellipse(200,200,320,320)  
  //indigo
  fill(150,0,200,X)
  ellipse(200,200,310,310)
  //blue
  fill(0,150,250,X)
  ellipse(200,200,300,300)
  //green
  fill(20,250,20,X)
  ellipse(200,200,290,290)  
  //yellow
  fill(250,250,0,X)
  ellipse(200,200,280,280)
  //orange
  fill(250,150,40,X)
  ellipse(200,200,270,270)
  //red
  fill(240,20,20,X)
  ellipse(200,200,260,260)
  
  //sky 2
  fill(90,130,250)
  ellipse(200,200,250,250)
  
	  //sun
  fill(250,250,40)
  ellipse(200,200,200,200)
  
  //land
  fill(100,200,40)
  rect(0,250,400,300)
  fill(80,190,20)
  rect(0,250,400,80)
  fill(50,150,30)
  rect(0,250,400,30)
  
  textSize(13);
  fill (80,20,80);
  text(P,40,320);
  text(Q,40,350);
  text(S,75,20);
  text(T,110,190);
  
 
  if (mouseIsPressed) {
    
    fill(250)
    ellipse(M+20,50,80,80)
    ellipse(M,20,40,60)
    ellipse(M-80,40,30,30)
    ellipse(M-80,55,70,70)
    ellipse(M-30,40,80,80)
    rect(M-80,40,100,50)
    
    if (M > width) {
      M = 0
    }
    
  }
  
  M = M + 1          
  
}


