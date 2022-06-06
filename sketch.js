let button;
let score = 0
let sboard;
let buttonpic;
let buttonDown;
let value = 0

function preload(){
  buttonpic = loadImage('buttonup_09.jpg')
  buttonDown = loadImage('ButtonDown_09.jpg')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textX = windowWidth/2
  textY = windowHeight/2
}


function draw() {
 background(0);

 textSize(35);
 textFont('Cursive')
 fill(255)
 text('CLICKER.IO', windowWidth/2, 50); 
 
 textSize(30);
 textFont('Cursive')
 fill(255)
 text('Click The Button', windowWidth/2, 75); 
 
 textSize(25);
 textFont('Cursive')
 fill(255)
 text('Developed By Ajay SP', windowWidth/2, 100); 
 
textSize(20);
 textFont('Cursive')
 fill(255)
 text('Score:   ' + score, windowWidth/2, 125); 

 button = createSprite(windowWidth/2, windowHeight/2, windowWidth/2, windowWidth/2);
 button.addImage(buttonpic)
 touchStarted()
 drawSprites()

 textSize(35);
 textFont('monospace')
 fill(255)
 text('FREE CLICKER GAME', windowWidth/2-500, windowHeight/2+150);
 textSize(30);
 text('PRACTICE YOUR GAMING CLICKING SKILLS HERE', windowWidth/2-500, windowHeight/2+175);
 textSize(25);
 text('IMPROVEMENTS OCCUR (EX: MINECRAFT)', windowWidth/2-500, windowHeight/2+200); 
 textSize(20);
 text('THANK YOU', windowWidth/2-500, windowHeight/2+225);
}

function touchStarted() {
  if(mouseWentDown()){
    button.addImage(buttonDown)
    score++
  }
}
