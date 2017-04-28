var scl = 3;
var rows,cols;
var zoff = 0;
var inc = 0.1;
var incz = 0.005;
var Particles = [];
var i = 0;
var gravity;
var t1 = 0;
var t2 = 0;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
    background(0);
    stroke(255);
    push();
    translate(width/2-200,height/2);
    for(var i=0;i<50;i++){
        line(x1(t1+i),y1(t1+i),x2(t1+i),y2(t1+i));
    }
    pop();
    t1+=0.05;

    push();
    translate(width/2+100,height/2);
    for(var i=0;i<50;i++){
        line(x1(t2+i+2),y1(t2+i+2),x2(t2+i+2),y2(t2+i+2));
    }
    pop();
    t2+=0.09;

}


function x1(t){
    return cos(t/10)*50+sin(t/20)*100;
}


function y1(t){
    return sin(t/20)*100+cos(t/40)*50;
}

function x2(t){
    return cos(t/40)*50+sin(t/50)*20;
}

function y2(t){
    return sin(t/20)*50+sin(t/20)*50;
}