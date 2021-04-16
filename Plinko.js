class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true,
            'restitution':1,
            'friction': 0,
            'density': 0
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}