class Paper 
{
    constructor(x,y,r) 
    {
        var option = {
             isStatic:false,
              resitution:0.3,
              friction:0.1,
              density:1.2


            }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, option)
        World.add(world, this.body);

    }
    display()
    {
            var Paperpos = this.body.position;

            push()
            translate(Paperpos.x, Paperpos.y);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            ellipse(0,0,this.r,this.r);
            pop()
     }



}