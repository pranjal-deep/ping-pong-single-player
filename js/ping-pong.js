var canvasWidth, canvasHeight;
var restart, winner, player, pause = 'false';

var highScore = 30, highPlayer = 'John';

// var myVoice = new p5.Speech('Google UK English Male');
// var listenVoice = new p5.SpeechRec();
console.log("started");

//variables to set the initial conditions of the game
//variables that control the ball's properties
var ballSpeed = 7;
var dirX = true,
  dirY = true,
  posX = 75,
  posY = 50,
  circleDim = 50,
  movX = 4;

//variables that control the bat's properties
var rect1X = 0,
  rect2X = 780,
  rectY = 150,
  // rectY = 150,
  rectMov = 70,
  rectWidth = 20,
  rectHeight = 120,
  rectd = canvasWidth - 20;

//variables that control the scoring
var points = 0;
  // point = 0,
  // points = " : ",
  // leftWins = "Left Wins",
  // rightWins = "Right Wins";

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight * 0.6;
  createCanvas(canvasWidth, windowHeight - 10);
  noStroke();
  playerNames();
  // listenVoice.onResult = showResult; // bind callback function to trigger when speech is recognized
  // listenVoice.start();
}

function playerNames() {
  // myVoice.speak('Please enter your Name');
  player = prompt("Please enter your name", "Name");

  // myVoice.speak('Please enter your Name');
  // player2 = prompt("Player 2 enter your name", "Name");
}

function draw() {
  background(3, 252, 111);
  if(pause === 'false') {
    ball();
    bats();
    scoring();
    scoreCard();
  }
  //   noLoop();
}

//calls the reset function to restart the game.
// function keyPressed() {
 

// }

// function pauseGame() {

// }
//function to handle voice commands
// function showResult()
// {
//   console.log(listenVoice.resultString); // log the result
//   console.log("here!");
  
//   if(listenVoice.resultString == 'pause'){
//     console.log("Pause");
//   }
// }

//function to reset all the values.
function reset() {
  posX = 75;
  posY = 50;
  rectY = 150;
  // rect2Y = 150;
  points = 0;
  // pointR = 0;
  // playerNames();
  //   delayTime(0.5);
}


function ball() {
  // console.log('ball');

  if (dirY) {
    posY += ballSpeed;
  } else {
    posY -= ballSpeed;
  }


  if (posY > canvasHeight - circleDim / 2 || posY < circleDim / 2) {
    dirY = !dirY;
  }
  if (posX > canvasWidth - circleDim / 2 || posX < circleDim / 2) {
    dirX = !dirX;
  }

  if (dirX) {
    posX += ballSpeed;
  } else {
    posX -= ballSpeed;
  }

  fill(255);
  // console.log("ball");
  
  circle(posX, posY, circleDim);
}



function bats() {
  fill(235, 122, 52);
  rect(0, rectY, rectWidth, rectHeight);
  rect(canvasWidth - rectWidth, rectY, rectWidth, rectHeight);
}

function keyPressed() {
  if (keyCode == UP_ARROW && rectY > 0) {
    rectY -= rectMov;
  } else if (keyCode == DOWN_ARROW && rectY < 300) {
    rectY += rectMov;
  // } else if (keyCode == SHIFT && rectY > 0) {
  //   rect1Y -= rectMov;
  // } else if (keyCode == CONTROL && rect1Y < 300) {
  //   rect1Y += rectMov;
  } else if (keyCode === DELETE) {
    reset();
  } else if (keyCode === ALT && pause === 'false') {
    console.log('here');
    pause = 'true';
    // pauseGame();
  } // on pressing ALT, the game will pause
  else if (keyCode === ALT && pause === 'true') {
    pause = 'false';
  }
}


function scoring() {

  if ((posY - circleDim / 2) >= rectY && (posY + circleDim / 2) <= rectY && posX == rectWidth + circleDim / 2  || posX + circleDim / 2 == canvasWidth - rectWidth) {
    points++;
    // console.log("posY - circleDim / 2 is " + (posY - circleDim / 2) + "Rect is " + rectY);
    
    console.log(points);
    
    // myVoice.speak('Another point for'+ player2);
    // resetBallPos();
  // } else if ((posX + circleDim / 2 >= canvasWidth - rectWidth) && ((posY + circleDim / 2) < rect2Y || (posY - circleDim / 2) > rect2Y + 100)) {
    // pointL++;
    // myVoice.speak('Another point for'+ player1);
    // resetBallPos();
  }
}


function scoreCard() {
  fill(255);
  rect(0, canvasHeight, canvasWidth, windowHeight * 0.4);
  fill(0);
  rect(10, canvasHeight + 10, canvasWidth - 20, windowHeight * 0.4 - 20);
  let rules = "Use top, bottom, shift and ctrl keys to control the players. First to score 5 points wins.";
  fill(255);
  textSize(26);
  text("Your Score: " + points, 150, windowHeight - 200);
  text("Player Name: " + player, 150, windowHeight - 150);
  text("Highest Score: " + highScore, windowWidth - 300, windowHeight - 200);
  text("Player: " + highPlayer, windowWidth - 300, windowHeight - 150);
  // text(pointL, windowWidth / 2 - 100, windowHeight - 150);
  // text(points, windowWidth / 2, windowHeight - 150);
  // text(player2, windowWidth / 2 + 75, windowHeight - 200);
  // text(pointR, windowWidth / 2 + 100, windowHeight - 150);

  // text(rules, windowWidth / 2 - 500, windowHeight - 50)

  // if (pointL == 5 || pointR == 5) {
  //   if (pointL == 5) {
  //     // myVoice.speak(player1+'wins');
  //     winner = player1 + " wins!!!";
  //   } else if (pointR == 5) {
  //     // myVoice.speak(player2+'wins');
  //     winner = player2 + " wins!!!";
  //   }

  //   fill(0);
  //   textSize(46);
  //   // text(winner, windowWidth / 2 - 150, windowHeight / 2 - 50);
  //   rules = "Press delete to reset"
  //   ballSpeed = 0;
  // }

}



function resetBallPos() {
  //   delayTime(3);
  posX = canvasWidth / 2 - circleDim / 2;
  posY = canvasHeight / 2;
  rectY = 150;
  // rect2Y = 150;
}

//Processing code ends