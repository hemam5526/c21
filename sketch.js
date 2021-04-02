var canvas;
var music;
var greenb;
var redb;
var orangeb;
var blueb;
var box;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    

    //create 4 different surfaces

    greenb = createSprite(710,580,190,20)
    greenb.shapeColor = ("green")
    //create box sprite and give velocity
   
    redb = createSprite(505,580,200,20)
    redb.shapeColor = ("red")

    orangeb = createSprite(295,580,200,20)
    orangeb.shapeColor = ("orange")

    blueb = createSprite(85,580,200,20)
    blueb.shapeColor = ("blue")

    box = createSprite(random(20,750),550,40,40)
    box.shapeColor = ("white")
    box.velocityX = 5
    box.velocityY = 5

    music.play();
}

function draw() {
    background(rgb(169,169,169));

    

    box.bounceOff(greenb);
    box.bounceOff(redb);
    box.bounceOff(blueb);
    box.bounceOff(orangeb);
    
    edges = createEdgeSprites();
    box.bounceOff(edges)

   if(box.isTouching(greenb)){
       box.shapeColor = "green"
   }
   if(box.isTouching(redb)){
    box.shapeColor = "red"
}
if(box.isTouching(orangeb)){
    box.shapeColor = "orange"
} 
if(box.isTouching(blueb)){
    box.shapeColor = "blue"
}



drawSprites()
    //add condition to check if box touching surface and make it box
}
 