var canvasWidth, canvasHeight; 
var restart, winner, player1, player2;


function setup() {
  canvasWidth = windowWidth; canvasHeight = windowHeight*0.6;
  createCanvas(canvasWidth, windowHeight-10);
  noStroke();
  playerNames();
}

function playerNames() {
  player1 = prompt("Player 1 enter your name", "Name");
  player2 = prompt("Player 2 enter your name", "Name");
}

function draw() {
  background(3, 252, 111);
  ball();
  bats();
  scoring();
  scoreCard();
//   noLoop();
}

//calls the reset function to restart the game.
function keyTyped() {
  if(keyCode === 'DELETE') {
    reset();
  }
}

//function to reset all the values.
function reset() {
  posX=75;
  posY=50;
  rect1Y=150;
  rect2Y=150;
  pointL=0;
  pointR=0;
  // playerNames();
//   delayTime(0.5);
}

//variables to set the initial conditions of the game
//variables that control the ball's properties
var ballSpeed = 10;
var dirX=true, dirY=true, posX=75, posY=50, circleDim=50, movX=4;

//variables that control the bat's properties
var rect1X = 0, rect2X = 780, rect1Y = 150, rect2Y=150, rectMov=50, rectWidth=20, rectHeight=100, rectd = canvasWidth-20;

//variables that control the scoring
var pointL=0, pointR=0, points = " : ", leftWins="Left Wins", rightWins="Right Wins";

function ball() {
// console.log('ball');
  if(dirY) {
      posY+=ballSpeed;
    } else {
      posY-=ballSpeed;
  }
  if(posY>canvasHeight-circleDim/2 || posY<circleDim/2){
    dirY=!dirY;
    }
    if(posX>canvasWidth-circleDim/2 || posX<circleDim/2){
    dirX=!dirX;
  }  
  if(dirX){
      posX+=ballSpeed;
    } else {
      posX-=ballSpeed;
  }
  fill(255);
  circle(posX,posY,circleDim);
}



function bats() {
fill(235, 122, 52);
rect(0,rect1Y,rectWidth,rectHeight);
rect(canvasWidth-rectWidth,rect2Y,rectWidth,rectHeight);
}

function keyPressed() {
    if (keyCode == UP_ARROW && rect2Y>0) {
      rect2Y-=rectMov;
      } else if (keyCode == DOWN_ARROW && rect2Y<300) {
      rect2Y+=rectMov;
      } else if (keyCode == SHIFT && rect1Y>0) { 
      rect1Y-=rectMov;
      } else if (keyCode == CONTROL && rect1Y<300) { 
      rect1Y+=rectMov;
      }
}



function scoring() {

  if(posX<=rectWidth+circleDim/2 && ((posY+circleDim/2)<rect1Y || (posY-circleDim/2)>rect1Y+100)){
    pointR++;
    resetBallPos();
  } else if((posX+circleDim/2>=canvasWidth-rectWidth) && ((posY+circleDim/2)<rect2Y || (posY-circleDim/2)>rect2Y+100)){
    pointL++;
    resetBallPos();
  }
}


function scoreCard() {
  fill(255);
  rect(0, canvasHeight, canvasWidth, windowHeight*0.4);
  fill(0);
  rect(10, canvasHeight+10, canvasWidth-20, windowHeight*0.4-20);
  let rules = "Use top, bottom, shift and ctrl keys to control the players. First to score 5 points wins.";
  fill(255);
  textSize(26);
  text(player1, windowWidth/2-125, windowHeight-200);
  text(pointL, windowWidth/2-100, windowHeight-150);
  text(points, windowWidth/2, windowHeight-150);
  text(player2, windowWidth/2+75, windowHeight-200);
  text(pointR, windowWidth/2+100, windowHeight-150);

  text(rules, windowWidth/5, windowHeight-50)

  if(pointL==5 || pointR==5){
    if (pointL==5) {
      winner=player1 + " wins!!!";
    } else if (pointR==5) {
      winner=player2 + " wins!!!";
    }

    fill(0);
    textSize(46);
    text(winner,windowWidth/2-150, windowHeight/2-50);
    rules = "Press delete to reset"
    ballSpeed = 0;
  }
  

}

function resetBallPos() {
//   delayTime(3);
  posX=canvasWidth/2-circleDim/2;
  posY=canvasHeight/2;
  rect1Y=150;
  rect2Y=150; 
}

//Processing code ends

