class Rope{

    constructor(bodyA, pointB){

        var options={

            "bodyA":bodyA,
            "pointB":pointB,
            "stiffness":1.2,
            "length":250
        }

        this.body=Matter.Constraint.create(options);

        this.pointB=pointB;

        World.add(world, this.body);

    }

    display(){

        push ();
        strokeWeight(6)
        stroke("white")

        line (this.body.bodyA.position.x,this.body.bodyA.position.y, this.pointB.x, this.pointB.y)

        pop ();


    }









}