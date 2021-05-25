class Polygon
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.5
            }
        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(50,200,10);
        World.add(world,this.body)
    }

    display(){

    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50);

}
}

