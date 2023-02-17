let display = document.querySelector(".screen-number");

let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator")
let equalsButton = document.querySelector(".result")

let prevNumber = null;
let currentNumber = null;


operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        let operator = button.innerHTML;
        display.innerHTML += operator

        prevNumber = currentNumber;

        currentNumber = null;

        operatorButtons.forEach(button => button.classList.remove("operator-selected"));
        button.classList.add("operator-selected");
    })
})
function deleteLastCharacter() {
  display.innerHTML = display.innerHTML.slice(0, -1);

  currentNumber = display.innerHTML;
}

let deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", deleteLastCharacter);

function clearNumbers(){
    display.innerHTML = ""
    
    currentNumber = display.innerHTML
}
let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clearNumbers);

function calculate(operator){
  if(prevNumber  !== null && currentNumber !== null){
    let result;

    switch (operator){
      case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
      case "×":
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
      case "÷":
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
      default:
        result = "Error"
    }
    prevNumber  = result.toString();
    currentNumber = null;
  }
}

equalsButton.addEventListener("click", () => {

  let operator = document.querySelector(".operator-selected").innerHTML;

  calculate(operator);

  display.innerHTML = prevNumber 
})

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    let number = button.innerHTML;
   
    if(currentNumber === null){
      currentNumber = number
    }
    else{
      currentNumber += number
    }
    display.innerHTML = currentNumber
  });
});


