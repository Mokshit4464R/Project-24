class Rubber {
  constructor(x,y,r){
      var options = {
         isStatic : false,
         'restitution' : 0.3,
         'friction' : 5,
         'density' : 1
      }
      this.body = Bodies.circle(x,y,r,options)
      this.x = x
      this.y = y
      this.r = r
      World.add(world,this.body);
      //this.image = loadImage("paper.png");
  }
  display(){
    var rubberPos=this.body.position;		
    push()
    translate(rubberPos.x, rubberPos.y);
    strokeWeight(4);
    fill("red");
          circle(rubberPos.x, rubberPos.y, this.r);
    //image(this.image,0,0,this.r, this.r);
          pop()
          
  }

}
