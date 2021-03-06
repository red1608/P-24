class Hammer {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
  
    World.add(world,this.body);
  }
  display(){
    //console.log("a"+this.body.position.x);
    //console.log("b"+this.body.position.y);
    var angle = this.body.angle;
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("brown")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
  }
}
