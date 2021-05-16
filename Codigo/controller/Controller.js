let logic;
class Controlller {
    constructor(app){
    this.app=app;
    logic=new Logic(this);
    }
    draw(){
        logic.draw();
    }
    mouse(){
        logic.mouse();
    }
    key(){
        logic.key();
    }
}