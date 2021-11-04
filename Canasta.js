class Canasta {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2,  
          isStatic:true
      }
      this.body = Bodies.circle(x, y,20,options);
      this.width = 200;
      this.height = 200;
      this.image=loadImage("canasta.png");
      
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };


  

			