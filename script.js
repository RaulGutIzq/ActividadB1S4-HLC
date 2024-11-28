const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

document.addEventListener("keydown", handleKeyboardInput);

function calculate(event) {
  const clickedButtonValue = event.target.value;
  const regex = new RegExp("^([-+]?)([0-9]+)(?:([-+*/])((?:[-+])?[0-9]+))+$");
  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      try {
        if (!regex.test(display.value)) {
          throw new Error();
        }
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  } else if (clickedButtonValue === "C") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}

function handleKeyboardInput(event) {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    if (display.value !== "") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Delete") {
    display.value = "";
  }
}
