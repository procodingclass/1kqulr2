var database;
var form,
  game,
  firend,
  playerCount = 0;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("background.png");
}

function setup() {
 
  canvas = createCanvas(850,470);
  database = firebase.database();

  form = new Form();
 
  
}

function draw() {

  
    //This needs to be written by student, along with SDK code to add in index.html
      background(bgimg);
      form.display();
  
        
 
}

