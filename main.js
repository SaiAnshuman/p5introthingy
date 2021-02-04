function preload(){


}

function setup(){

 canvas = createCanvas(700,600);
 canvas.position(500,150);
 video = createCapture(VIDEO);
 video.hide();

}

function draw(){

 image(video,200,150,300,300);
 fill(0,255,255);
 stroke(255,51,51);
 circle(60,60,105);
 circle(630,60,105);
 circle(60,530,105);
 circle(630,530,105);
 fill(255,204,229);
 stroke(153,51,255);
 rect(75, 75, 530, 55);
 rect(75, 460, 530, 55);
 rect(50, 75, 55, 430);
 rect(570, 75, 55, 430);

}