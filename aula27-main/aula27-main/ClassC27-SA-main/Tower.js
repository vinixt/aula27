class Tower{
    constructor(x,y,w,h ){
        var options={
            isStatic:true
        }
        this.image=loadImage("assets/tower.png");
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
      World.add(world,this.body)  
    }
mostrar(){ var pos = this.body.position; var angle=this.body.angle retto (pos.x, pos.y, this.w, this.h) }
}
