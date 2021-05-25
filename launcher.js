class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
        this.pointB = pointB;
    }

    fly(){

        this.slingShot.bodyA = null

    }
        
    attach(body){
        this.slingShot.bodyA = body
    }

    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y+10, pointB.x, pointB.y);
        }
        
       
    }
    
}