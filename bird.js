class Bird{
    
    constructor(x,y,width,height)
        {
        this.body = Bodies.rectangle(x,y,width,height) 
        this.width = width;
        this.height = height;
    
        World.add(world,this.body)
        }
    
    display()
      {
          this.body.position.x=mouseX;
          this.body.position.y=mouseY;
         var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
       
      }
    
    
              }
    