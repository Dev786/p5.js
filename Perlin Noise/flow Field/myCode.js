var cols,rows;
var scl = 20;
var xoff = 0;
var yoff = 0;
var vectorArray = [];
var particle = [];

function setup(){
    createCanvas(400,400)
    cols = this.floor(width/scl);
    rows = this.floor(height/scl);
    vectorArray = new Array(rows,cols);
}
var zoff = 0;
function draw(){
   // background(255);
    for(j=0;j<rows;j++){
    var xoff=0;
    for(i=0;i<cols;i++){
            var angle = noise(xoff, yoff, zoff) * PI*4;
            //rect(i*scl,j*scl,scl,scl);
            index = i+j*cols;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            vectorArray[index] = v;
            // push();
            //translate(i*scl, j*scl);
            //rotate(v.heading());
            //line(0,0,scl,scl);
            //pop();
            //xoff+=0.02;
    }
    yoff+=0.0001;
}

if(random(0,1)<=0.1){
    particle.push(new Particle);
}

for(var i=0;i<particle.length;i++){
    particle[i].update();
    particle[i].follow(vectorArray);
    particle[i].render();
    if(particle[i].isDead)
        particle.splice(i,particle[i]);
}

zoff+=0.003;

}