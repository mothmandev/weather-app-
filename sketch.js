let circleX = 100;
function setup() {
  createCanvas(400, 400);
}
function mousePressed() {
  circleX = 0;
}
function draw() {
r = random(0,400);
g = 0;
b = random(0,400);
x = random(0,400); 
y = random(0,400);
noStroke();
fill(r,g,b,10000);
circle(x,y,24);
}
