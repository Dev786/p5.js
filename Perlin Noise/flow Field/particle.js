var Particle = function(){

    this.velocity = createVector(random(0,10),random(0,20));
    this.location = createVector(random(0,width),0);
    this.acceleration = createVector(0,0);
    this.previousLocation = createVector(0,0);
    this.isDead = false;
    this.update = function(){
        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        //this.addForce();
        this.acceleration.mult(0);
        this.velocity.limit(2);
        this.edges();
    }

    this.addForce = function(Force){
        this.acceleration.add(Force);
    }

    this.follow = function(vectorss){
        var x = floor(this.location.x/scl);
        var y = floor(this.location.y/scl);
        var index = x+y*cols;
        var force = vectorss[index];
        this.previousLocation = this.location;
        this.addForce(force);
    }

    this.edges = function(){
        if(this.location.x<0)
            this.isDead = true;

        if(this.location.x>width)
            this.isDead = true;

        if(this.location.y<0)
            this.isDead = true;

        if(this.location.y>height)
            this.isDead = true;
    }

    this.render = function(){
        stroke(0);
        line(this.previousLocation.x,this.previousLocation.y,this.location.x,this.location.y);
    
    }

}