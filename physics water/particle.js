var Particle = function(){
    this.location = createVector(random(0,width),random(2,5));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.f = createVector(0,0);
    this.waterR = createVector(0,0.02);
    this.first = true;
    this.done = false;
    this.update = function(){
        this.edge();
        this.location.add(this.velocity);
      
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.acceleration.mult(0);
        this.f.mult(0);
        
    }

    this.addForce = function(force){
        if(this.location.y >= height-80){
           if(this.first){
           this.velocity.y = 0;
           this.first=false;
           }
            this.acceleration.add(this.waterR);
        }else
            this.acceleration.add(force);
    }

    this.render = function(){
        ellipse(this.location.x,this.location.y,10,10);
    }

    this.edge = function(){
        if(this.location.x<0)
            this.location.x = width;

        if(this.location.x>width)
            this.location.x = 0;

        if(this.location.y<0)
            this.location.y = height;

        if(this.location.y >height)
            this.location.y = height-2;
          //  this.velocity.y = 0;
            this.done = true;
        
    }

}