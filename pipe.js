function Pipe(){
    this.top=random(200,175)
    this.bottom = random(250,350)
    this.x=width;
    this.w=20;
    this.speed = 2.5;

    this.highight = false;
    
   this.hits = function(bird){
       if(bird.y < this.top || bird.y>height - this.bottom){
       if(bird.x > this.x && bird.x < this.x + this.w){
           this.highight = true;
           return true;
           
       }
 }
 this.highight = false;
 return false;
   }

   
this.show = function() {
    fill(255);
    if(this.highight){
        fill(255,0,0)
    }
   rect(this.x,0,this.w,this.top)
    rect(this.x,height-this.bottom,this.w,this.bottom)
}

this.update = function(){
    this.x -= this.speed;

}

this.offscreen = function(){
    if(this.x< -this.w){
        return true;
}else{
    return false;
}
}
}