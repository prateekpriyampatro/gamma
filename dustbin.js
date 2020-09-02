class Dustbin{
constructor(x,y,width,height){
options ={
restitution: 0.1,
density: 1,
friction:2,
isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
}
display(){
push();
var pos = this.body.position;
rectMode(CENTER);
rect(x,y,width,height);
}
}