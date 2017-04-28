var Particle = function(x,y){

    this.position = createVector(x, y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    var t = 0;
    this.gravity;
    this.update = function(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.velocity.limit(5);
    }

    this.edges = function(){
        if(this.position.x > width){
            this.velocity.x*=-1;
            this.position.x = width;
        }
       else if(this.position.x<0){
            this.velocity.x*=-1;
            this.position.x=0;
        }
       if(this.position.y<0){
            this.velocity.y*=-1;
            this.position.y = 0;
        }
       else if(this.position.y>height){
            this.velocity.y*=-1;
            this.position.y=height;
        }

        console.log(this.position.y);
    }

    this.applyForce = function(force){
        this.acceleration.add(force);
    }

    this.show = function(){
        ellipse(this.position.x,this.position.y,20,20);
    }

}
Contact GitHub 