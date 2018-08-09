var player;

function setup(){
    var canvas = createCanvas(1000,700);
    player = new Player(75, height-50);
}

function draw(){
    background(100);
    player.move();
    player.update();
    player.show();
}