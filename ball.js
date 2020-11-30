class Ball {
    constructor(x, y) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2,
        isStatic:false
      }
      this.body = Bodies.circle(x, y,36, options);
      this.width = 70;
      this.height = 70;
      this.radius=0;
      //this.velocityX=2;
      this.image = loadImage("Unknown.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.velocityX=2;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //fill("orange");
      //rectMode(CENTER);
      //rect(0,0,this.height, this.width);
      pop();
    }
  };
  
 