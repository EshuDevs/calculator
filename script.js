// Get the display element
const display = document.querySelector(".screen-number");

// Get all the number buttons
const numberButtons = document.querySelectorAll(".number");

// Add event listeners to each number button
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the number that was clicked
    const number = button.innerHTML;
    
    // Update the display with the number
    display.innerHTML += number;
  });
});


// Create a function to delete the last character from the display
function deleteLastCharacter() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

// Get the delete button
const deleteButton = document.querySelector(".delete");

// Add an event listener to the delete button
deleteButton.addEventListener("click", deleteLastCharacter);

function clearNumbers(){
    display.innerHTML = ""
}
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clearNumbers);
