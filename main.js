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

function makeText() {
  switch (sizeInput.value) {
    case "s":
      ptextThree.innerHTML = textInput.value;
      ptextThree.style = "font-size:x-small; color:" + colorInput.value + ";";
      textInput.value = "";
      break;

    case "m":
      ptextThree.innerHTML = textInput.value;
      ptextThree.style = "font-size: medium; color:" + colorInput.value + ";";
      textInput.value = "";
      break;
    case "l":
      ptextThree.innerHTML = textInput.value;
      ptextThree.style = "font-size: large; color:" + colorInput.value + ";";
      textInput.value = "";
      break;
    case "xl":
      ptextThree.innerHTML = textInput.value;
      ptextThree.style = "font-size: x-large; color:" + colorInput.value + ";";
      textInput.value = "";
      break;
  }
}

function makeColorAndPlace() {
  switch (diraction.value) {
    case "top-right":
      divFour.style =
        "top:0;right: 0;border-radius:50%;width:200px;height:200px;background-Color:" +
        colorInputTwo.value +
        ";";
    case "top-left":
      divFour.style =
        "top:0;left: 0;border-radius:50%;width:200px;height:200px;background-Color:" +
        colorInputTwo.value +
        ";";
    case "bottom-right":
      divFour.style =
        "bottom:0;right: 0;border-radius:50%;width:200px;height:200px;background-Color:" +
        colorInputTwo.value +
        ";";
    case "bottom-left":
      divFour.style =
        "bottom:0;left: 0;border-radius:50%;width:200px;height:200px;background-Color:" +
        colorInputTwo.value +
        ";";
  }
}
