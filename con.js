class con{
    constructor (bodyA,bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:10,
    stiffness:0.05
}
this.body = constraint.create(options)
World.add(world,this.body)
    }
   display(){
       line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
   }
}