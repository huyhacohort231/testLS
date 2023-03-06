let bubble;
let bubbleArray = [];

function setup() {
  createCanvas(400, 400);
  bubble = new Bubble();
 
  for(let i = 0; i <100; i++){
    bubbleArray.push(new Bubble());
    
  }
  

}
function draw() {
    background(0);
    
    for(let i =0; i < bubbleArray.length; i++){
      bubbleArray[i].move();
      bubbleArray[i].show();
    }
  
  }
  
  
  class Bubble{
    constructor(){
      this.x = random(0, 400);
      this.y = random(0, 400);
    }
    
    move(){
    this.x += random(-5,5);
    this.y += random(-5,5);
  }
    
    show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
  
    
  }
  
  
  