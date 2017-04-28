
var p = [];

var gravity;
var airResistance;
function setup(){
    createCanvas(400,400);
    background(255, 255);
    for(var i=0;i<10;i++){
        p[i] = new Particle();
    }
    gravity = createVector(0, 0.05);
    airResistance = createVector(0, -0.1);
}


function draw(){
    background(255);
    fill(0,200,0,100);
    rect(0,height-80,width,80);
    fill(100,0,100);
    for(var i=0;i<p.length;i++){
        p[i].addForce(gravity);
    //    p[i].addForce(airResistance);
        p[i].update();
        p[i].render();
    }
}