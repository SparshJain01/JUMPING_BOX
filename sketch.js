var canvas;
var music;
var box , box1 , box2 , box3;
var jumpning_box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box = createSprite(90,590,200,20);
    box.shapeColor="red";

    box1 = createSprite(300,590,200,20);
    box1.shapeColor="yellow";

    box2 = createSprite(510,590,200,20);
    box2.shapeColor="green";

    box3 = createSprite(720,590,200,20);
    box3.shapeColor="blue";

    jumping_box = createSprite(random(20,750));
    jumping_box.shapeColor="white";
    jumping_box.velocityY=1;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();


    //add condition to check if box touching surface and make it box
if (box.isTouching(jumping_box) && jumping_box.bounceOff(box)){
    jumping_box.shapeColor="red";
}else
if (box1.isTouching(jumping_box) && jumping_box.bounceOff(box1)){
    jumping_box.shapeColor="yellow";
}else
if (box2.isTouching(jumping_box) && jumping_box.bounceOff(box2)){
    jumping_box.shapeColor="green";
}else
if (box3.isTouching(jumping_box) && jumping_box.bounceOff(box3)){
    jumping_box.shapeColor="blue";
}






drawSprites();

}
