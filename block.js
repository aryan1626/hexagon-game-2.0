class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png")
      }
      display(){

        console.log(this.body.speed);
   if (this.body.speed < 3) {
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
      }

    else{
      push()
        World.remove(world,this.body)
        this.visiblity = this.visiblity -5
        tint(225,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();
    }
      }
    }
 

