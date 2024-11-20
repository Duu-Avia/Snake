let headTop = 5;
let headLeft = 5;
let direction = "right";
let intervalId = null
let snakeBody = [
  {x:2, y:5 },
  {x:3, y:5 },
  {x:4, y:5 },
];

const config = {
  size: 20,
  width: 30,
  height: 20,
};

const boardEl = document.getElementById("board");
boardEl.style.width = config.width * config.size + "px";
boardEl.style.height = config.height * config.size + "px";

function goUp() {
  headTop = headTop - 1;
  if (headTop < 0) {
    headTop = config.height - 1;
  }
  print();
 
}

function goDown() {
  headTop = headTop + 1;
  if (headTop === config.height) {
    headTop = 0;
  }
  print();
}

function goRight() {
  headLeft = headLeft + 1;
  if (headLeft === config.width) {
    headLeft =  0;
  }
  

  print();
}

function goLeft() {
  headLeft = headLeft - 1;
  if (headLeft < 0) {
    headLeft = config.width - 1;
  }
 

  print();
}
function changeDirection(newDirection) {

  if (direction === "up" || direction === "down") {
    if (newDirection === "right" || newDirection === "left") {
      direction = newDirection;
    }
  } else if (direction === "right" || direction === "left") {
    if (newDirection === "up" || newDirection === "down") {
      direction = newDirection;
    }
  }
 
  console.log(direction);
}

function startGame (){
  if (!intervalId){
    intervalId = setInterval(gameLoop, 200);
  }
   
}

function pauseGame (){
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
function reset (){
  headTop = 5
  headLeft = 5
  direction = "right"
   snakeBody = [
    {x:2, y:5 },
    {x:3, y:5 },
    {x:4, y:5 },
  ];
}

function restartGame (){
  
  headTop = 10;
  headLeft = 12;
  direction = "right"
  reset();
  
}

function gameLoop() {
  snakeBody.push({x:headLeft, y:headTop})
  snakeBody.shift()
  switch (direction) {
    case "up":
      goUp();
      break;
    case "right":
      goRight();
      break;
    case "down":
      goDown();
      break;
    case "left":
      goLeft();
      break;
  }
}

function listenKeys(event) {
  key = event.key
  console.log(key)
  switch (key){
    case "ArrowUp":
    changeDirection("up");
    break;
    case "ArrowDown":
    changeDirection("down")
    break;
    case "ArrowLeft":
    changeDirection("left")
    break;
    case "ArrowRight":
      changeDirection("right")
  }
}

document.addEventListener("keydown", listenKeys)

function print() {
  let snakeBodyHtml = "";
  for ( let i = 0; i<snakeBody.length; i++){
    snakeBodyHtml += `<div class="snake" style="width: ${1 * config.size}px; height: ${1 * config.size}px; top: ${snakeBody[i].y * config.size}px; left: ${snakeBody[i].x * config.size}px"></div>`
  }

  const snakeHtml = ` ${snakeBodyHtml}`;
  boardEl.innerHTML = snakeHtml;
}

