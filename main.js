function getNumFromUser() {
  let userInput = document.getElementById("input_one").value;
  switch (userInput) {
    case "3":
      return console.log("hello");

    case "5":
      return console.log("goodbye");

    case "7":
      return console.log("thanks");

    default:
      return console.log("there's no match!");
  }
}

function getNameFromUser() {
  let userInput = document.getElementById("input_two").value;
  switch (userInput) {
    case "jacob":
      return (ptext.innerHTML = "jacob");
    case "natan":
      return (ptext.innerHTML = "natn".toUpperCase());
    case "DALYA":
      return (ptext.innerHTML = "DALYA".toLowerCase());
    default:
      return (ptext.innerHTML = "there's no match!");
  }
}

function getNumbersFromUserAndCalc() {
  switch (operator.value) {
    case "+":
      ptextTwo.innerHTML = +input_firstValue.value + +input_secondValue.value;
      break;
    case "-":
      ptextTwo.innerHTML = +input_firstValue.value - +input_secondValue.value;
      break;
    case "/":
      ptextTwo.innerHTML = +input_firstValue.value / +input_secondValue.value;
      break;
    case "*":
      ptextTwo.innerHTML = +input_firstValue.value * +input_secondValue.value;
      break;
  }
}
