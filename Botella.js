class Botella {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2,  
          isStatic:false
      }
      this.body = Bodies.circle(x, y,20,options);
      this.width = 50;
      this.height = 80;
      this.image=loadImage("botella1.png");
      
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };


  