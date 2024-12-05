const buttons = document.querySelectorAll("button"); //Selector todos los botones
const display = document.querySelector(".display"); //Pantalla donde se envian los resultados


//Añadir un listener a todos los botones
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

//Añadir listener al teclado
document.addEventListener("keydown", handleKeyboardInput);


//Función para encapsular los botones
function calculate(event) {
  const clickedButtonValue = event.target.value;
  //Comprueba que el boton pulsado es el =
  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
    //Al pulsar el boton C se borra
  } else if (clickedButtonValue === "C") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}

function handleKeyboardInput(event) {
  const key = event.key;
  //Comprueba que se ha pulsado un numero o un operador
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
  } else if (key === "Backspace") { //Si se presiona borrar, se borra el último número pulsado
    display.value = display.value.slice(0, -1);
  } else if (key === "Delete") {//Si se presiona suprimir, se borra todo el display
    display.value = "";
  }
}
