function Player(x,y){
    //this.x = x;
    //this.y = y;
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0.0);
    this.jump = createVector(0,0);
    this.w = 43;
    this.h = 43;
    this.v = 2;
    this.m = 50;
    controlSalto = true;

    this.show = function(){        
        rectMode(CENTER);
        fill(255)
        rect(this.pos.x,this.pos.y,this.w,this.h)
    }

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0)
    }

    this.move = function(){
                
        if(keyIsDown(LEFT_ARROW)){
            this.pos.x -= this.v;
            
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.pos.x += this.v;
            
        }
        if(keyIsDown(UP_ARROW)){
            controlSalto = false;
            this.jump.y -= 0.2;
            this.applyForce(this.jump);
            keyCode = null;                
        }

        if(this.pos.y <= 450){
            this.jump.y = 3;
            this.applyForce(this.jump); 
        }
        else if(this.pos.y > 650){
            this.pos.set(this.pos.x,650);
            this.vel.set(0,0);
            this.jump.y = 0;
            controlSalto = true;
        }

        console.log(this.pos)
        

    }
/*
    this.applyForce = function(force){
        var f = force.copy();
        f.div(this.m);
        this.acc.add
    }*/

}