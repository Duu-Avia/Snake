let headY = 5;
let headX = 5;
let direction = "right";
let intervalId = null
let foodX;
let foodY;
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
  headY = headY - 1;
  if (headY < 0) {
    headY = config.height - 1;
  }
  print();
 
}

function goDown() {
  headY = headY + 1;
  if (headY === config.height) {
    headY = 0;
  }
  print();
}

function goRight() {
  headX = headX + 1;
  if (headX === config.width) {
    headX =  0;
  }
  

  print();
}

function goLeft() {
  headX = headX - 1;
  if (headX < 0) {
    headX = config.width - 1;
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
 

}

function startGame (){
  if (!intervalId){
    intervalId = setInterval(gameLoop, 200);
    generateFood();
  }
   
}

function pauseGame (){
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
function reset (){
  headY = 5
  headX = 5
  direction = "right"
   snakeBody = [
    {x:2, y:5 },
    {x:3, y:5 },
    {x:4, y:5 },
  ];
}

function restartGame (){
  
  headY = 10;
  headX = 12;
  direction = "right"
  reset();
  generateFood();
}

function gameLoop() {
  if (headX === foodX && headY === foodY){
    generateFood()
    snakeBody.push({x:headX, y:headY})
  }
  
  for(let i = 0; i<snakeBody.length-1; i++){
    if (headX === snakeBody[i].x && headY === snakeBody[i].y){
      alert("Муу юмбээ??? дахиад эхэллээ шүү")
      restartGame()
    }
  }

  snakeBody.push({x:headX, y:headY})
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
function generateFood () {
  foodX =Math.floor (Math.random() * config.width);
  foodY = Math.floor(Math.random() * config.height) ;
  console.log(foodY)
}


function listenKeys(event) {
  key = event.key

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
  const foodHtml = `<div class="food" style="width: ${1 * config.size}px; height: ${1 * config.size}px; top: ${foodY * config.size}px; left: ${foodX * config.size}px"></div>`
  const snakeHtml = ` ${snakeBodyHtml}`;
  boardEl.innerHTML = ` ${foodHtml} ${snakeHtml} `;
}

