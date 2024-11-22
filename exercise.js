let array = [1, 2, 3, 4, 5, 6];

function multiply(currentValue) {
  let newArray = currentValue * currentValue;
  return newArray;
}
let print = array.map(multiply);
console.log(print);

let number = ["80498789"];

function firstFour(currentValue) {
  let newNumber = currentValue.split("");
  let num = "";
  for (let i = 0; i < 4; i++) {
    num = num + newNumber[i];
  }
  return num;
}
let firstFourNum = number.map(firstFour);
console.log(firstFourNum);
console.log(newNumber);
