var t;
var zoff = 0;
function setup(){
    createCanvas(800, 800);
    background(255,50);
    stroke(0,20);
    noFill();
    smooth();
    t = 0;
}

var i = 0;
function draw(){
    translate(width/2, height/2);
        var angle = map(i,0,1000,0,TWO_PI);
        var rad = 500*noise(i*0.01,t*0.01);
        var x = rad*cos(angle);
        var y = rad*sin(angle);
        curveVertex(x, y);
  endShape(CLOSE);
 //   zoff+=0.05;

  t+= 2;
  i++;

  // clear the background every 600 frames using mod (%) operator
}