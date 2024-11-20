let headTop = 10;
let headLeft = 12;
let direction = "up";

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
  if (headTop === config.width) {
    headLeft = config.width - 1;
  }

  print();
}

function goLeft(){
  headLeft = headLeft - 1;
  if (headTop === config.width) {
    headTop = 0;
  print()
}
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
  console.log(direction)
}

setInterval(gameLoop, 300);
function gameLoop() {
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

function print() {
  const snakeHtml = `
<div class="snake" style="width: ${1 * config.size}px; height: ${1 * config.size}px; top: ${headTop * config.size}px; left: ${headLeft * config.size}px"></div>
    `;
  boardEl.innerHTML = snakeHtml;
}

print();
