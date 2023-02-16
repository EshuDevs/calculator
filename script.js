const display = document.querySelector(".screen-number");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.innerHTML;
    display.innerHTML += number;
  });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.innerHTML;
        display.innerHTML += operator
    })
})
function deleteLastCharacter() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", deleteLastCharacter);

function clearNumbers(){
    display.innerHTML = ""
}
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clearNumbers);



