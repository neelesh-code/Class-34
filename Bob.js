class Bob{

    constructor(x,y){

        var options={

            "density":1,
            "frictionAir": 0.005
        }

        this.body=Matter.Bodies.circle(x,y,80, options);

        this.radius=80;

        World.add(world, this.body);
    }

    display(){

         
        var pos= this.body.position
        var angle=this.body.angle

        push ();
        translate(pos.x, pos.y);
        
        rotate(angle);

        ellipseMode(CENTER);

        strokeWeight(3)

        stroke("white")
        fill ("brown");

        ellipse(0, 0, 80, 80);

        pop ();

    }






}