function setup() {
  createCanvas(400,400);
  
}

// variable
var speed_star = 0.1
var _alpha = 30
var aplha_habital = 25

var venus_x=200;
var venus_y=200;
var venus_theta = 17.5;
var venus_r = 25;
var speed_venus = -0.03 * speed_star

var earth_x=200;
var earth_y=200;
var earth_theta = 29.78;
var earth_r = 50;
var speed_earth = -0.02 * speed_star

var moon_x=200;
var moon_y=200;
var moon_theta = 15;
var moon_orb_earth = 2;
var moon_r = 75;
var speed_moon = 0.2* speed_star

var mars_x=200;
var mars_y=200;
var mars_theta = 12.5;
var mars_r = 70;
var speed_mars = -0.02 * speed_star

var jupiter_x=200;
var jupiter_y=200;
var jupiter_theta = 6.5;
var jupiter_r = 125;
var speed_jupiter = -0.013 * speed_star

var saturn_x=200;
var saturn_y=200;
var saturn_theta = 10;
var saturn_r = 150;
var speed_saturn = -0.009 * speed_star

var uranus_x=200;
var uranus_y=200;
var uranus_theta = 6.81;
var uranus_r = 175;
var speed_uranus = -0.06 * speed_star

//asteroid belt 
var r1 = 100,r2=115;
var x,y,x2,y2;
var asteroid_theta=2;
var testX,testY;
function draw() {
  background(0);
  randomSeed(300)
  for (var j = 0; j <= 250;j++){
    fill(random(120,255),random(120,255),random(120,255),random(80,150))
    circle(random(800),random(800),random(3))
  }

  //matahari
  strokeWeight(5);
  fill(255,255,51)
  text('sun',210,200,0.5);
  circle(200,200,20)
  noStroke();
    
  //venus
  venus_x=+venus_r*cos(venus_theta);
  venus_y=+venus_r*sin(venus_theta);
  text('venus',venus_x+200,venus_y+200,1);
  stroke(255,165,3,_alpha);
  noFill(255);
  circle(200,200,55);
  noStroke();
  fill(255,165,3);
  circle(venus_x+200,venus_y+200,7);
  venus_theta = venus_theta + speed_venus;
  
  //bumi
  fill(1,200,150);
  earth_x=+earth_r*cos(earth_theta);
  earth_y=+earth_r*sin(earth_theta);
  text('earth',earth_x+200,earth_y+200,1);
  stroke(1,200,150,_alpha);
  noFill(255);
  circle(200,200,100);
  noStroke();
  fill(1,200,150);
  circle(earth_x+200,earth_y+200,5.7);
  earth_theta = earth_theta + speed_earth;
  
  //moon
  fill(200,200,200);
  moon_x=+moon_r*sin(moon_theta)/15;
  moon_y=+moon_r*cos(moon_theta)/15;
  text('moon',earth_x+200+moon_x,earth_y+200+moon_y,1);
  circle(earth_x+200+moon_x,earth_y+200+moon_y,3);
  moon_theta = moon_theta + speed_moon;
  
  //mars
  fill(200,200,5);
  mars_x=+mars_r*cos(mars_theta);
  mars_y=+mars_r*sin(mars_theta);
  text('mars',mars_x+200,mars_y+200,1);
  stroke(200,200,5,_alpha);
  noFill(255);
  circle(200,200,140);
  noStroke();
  fill(200,200,5);
  circle(mars_x+200,mars_y+200,5);
  mars_theta = mars_theta + speed_mars;
  
  //jupiter
  fill(255,165,150);
  jupiter_x=+jupiter_r*cos(jupiter_theta);
  jupiter_y=+jupiter_r*sin(jupiter_theta);
  text('jupiter',jupiter_x+207.5,jupiter_y+200,1);
  stroke(255,165,150,_alpha);
  noFill(255);
  circle(200,200,250);
  noStroke();
  fill(255,165,150);
  circle(jupiter_x+200,jupiter_y+200,15);
  jupiter_theta = jupiter_theta + speed_jupiter;
  
  //saturnus
  fill(220,180,130);
  saturn_x=+saturn_r*cos(saturn_theta);
  saturn_y=+saturn_r*sin(saturn_theta);
  text('saturn',saturn_x+207.5,saturn_y+200,1);
  stroke(220,180,130,_alpha);
  noFill(255);
  circle(200,200,300);
  noStroke();
  fill(220,180,130);
  circle(saturn_x+200,saturn_y+200,15);
  fill(240,240,203);
  ellipse(saturn_x+200,saturn_y+200,25,4);
  saturn_theta = saturn_theta + speed_saturn;
  
  //uranus
  fill(50,100,150);
  uranus_x=+uranus_r*cos(uranus_theta);
  uranus_y=+uranus_r*sin(uranus_theta);
  text('uranus',uranus_x+200,uranus_y+200,1);
  stroke(50,100,150,_alpha);
  noFill();
  circle(200,200,350);
  noStroke();
  fill(50,100,150);
  circle(uranus_x+200,uranus_y+200,5);
  uranus_theta = uranus_theta + speed_uranus;
  
  //asteroid belt
  fill(210,230,200,100);
  noStroke();
  randomSeed(1500);
  translate(width / 2, height / 2);
  rotate(asteroid_theta);
  for(var a = 0;a<2000;a++){
    testX = random(width) - width/2;
    testY = random(height) - height/2;
    if(pow(testX,2)+ pow(testY,2)< pow(r2,2) &&(pow(testX,2)+ pow(testY,2)> pow(r1,2))) {
      fill(255);
      circle(testX,testY,random(2));
    }
    asteroid_theta -= 0.000005 * speed_star
    }
}
