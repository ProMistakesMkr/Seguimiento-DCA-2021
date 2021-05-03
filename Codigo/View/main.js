let controller;

function setup(){
    createCanvas(600,600);
    controller= new Controller(this);
}


function draw(){
    background(254, 173, 93);
    controller.draw();
}


function mouseClicked(){
    controller.mouse();
}


function keyPressed(){
    controller.key();
}
