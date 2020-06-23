class Log{
    
    constructor(x,y,width,height,angle)
        {
        this.body = Bodies.rectangle(x,y,width,height) 

        Matter.Body.setAngle(this.body, angle)
        this.width = width;
        this.height = height;
    
        World.add(world,this.body)
        }
    
    display()
      {
         var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        push ();
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        rect(0,0, this.width, this.height);
        pop ();
       
      }
    
    
              }
    