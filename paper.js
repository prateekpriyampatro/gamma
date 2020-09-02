class Paper{
constructor(x,y,radius,angle){
 var options ={
 restitution:0.9,
density : 1,
 friction:0.5,
 isStatic: false
 }
 this.body= Bodies.circle(x,y,radius,angle,options);
 World.add(world,this.body);
 Matter.Body.setAngle(this.body.angle);
 
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(clearInterval);
ellipse(pos.x,pos.y,this.body.radius,angle);
pop();

}
}