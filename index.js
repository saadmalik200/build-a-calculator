// "use strict";
///////////////////////////////////////////////////
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
// console.log(buttons);
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

/*
///////////////////////////////////////////////////////////////
// Buttons
const btnAC = document.querySelector(".btn-AC");
const btnOpenBracket = document.querySelector(".btn-openbracket ");
const btnCloseBracket = document.querySelector(".btn-closebracket");
const btnDivide = document.querySelector(".btn-divide");
const btnNum9 = document.querySelector(".btn-num9");
const btnNum8 = document.querySelector(".btn-num8");
const btnNum7 = document.querySelector(".btn-num7");
const btnNum6 = document.querySelector(".btn-num6");
const btnNum5 = document.querySelector(".btn-num5");
const btnNum4 = document.querySelector(".btn-num4");
const btnNum3 = document.querySelector(".btn-num3");
const btnNum2 = document.querySelector(".btn-num2");
const btnNum1 = document.querySelector(".btn-num1");
const btnNum0 = document.querySelector(".btn-num0");
const btnMultiply = document.querySelector(".btn-multiply");
const btnSubtract = document.querySelector(".btn-subtract");
const btnPlus = document.querySelector("btn-plus");
const btnDot = document.querySelector(".btn-dot");
const btnEqual = document.querySelector(".btn-equal");

// Text Field
const inputField = document.querySelector(".inputField");

// Main Code

btnAC.addEventListener("click", function () {
  // e.preventDefault();
  const input = (inputField.value = "");
  console.log(input);
});
btnSubtract.addEventListener("click", function () {
  const input = (inputField.textContent = "-");
  console.log(input);
  // console.log(event.key);
});
btnDot.addEventListener("click", function () {
  const input = (inputField.textContent = ".");
  console.log(input);
});

// btnPlus.addEventListener("click", function () {
//   const input = (inputField.textContent = "+");
//   console.log(input);
//   // console.log(event.key);
// });

btnNum9.addEventListener("click", function () {
  const input = (inputField.value = 9);

  if (
    btnSubtract.addEventListener("click", function () {
      Calculator.subtract(input, input);
    })
  ) {
  }
  // console.log(input);
});

btnNum8.addEventListener("click", function () {
  const input = (inputField.value = 8);
  console.log(input);
});

btnNum7.addEventListener("click", function () {
  const input = (inputField.value = 7);
  console.log(input);
});

btnNum6.addEventListener("click", function () {
  const input = (inputField.value = 6);
  console.log(input);
});

btnNum5.addEventListener("click", function () {
  const input = (inputField.value = 5);
  console.log(input);
});
btnNum4.addEventListener("click", function () {
  const input = (inputField.value = 4);
  console.log(input);
});
btnNum3.addEventListener("click", function () {
  const input = (inputField.value = 3);
  console.log(input);
});
btnNum2.addEventListener("click", function () {
  const input = (inputField.value = 2);
  console.log(input);
});
btnNum1.addEventListener("click", function () {
  const input = (inputField.value = 1);
  console.log(input);
});

btnNum0.addEventListener("click", function () {
  const input = (inputField.value = 0);
  console.log(input);
});

class Calculator {
  //   constructor(num1, num2) {
  //     this.num1 = num1;
  //     this.num2 = num2;
  //   }

  static add(num1, num2) {
    const resultAdd = num1 + num2;
    console.log(resultAdd);
  }

  static subtract(num1, num2) {
    const resultSubtract = num1 - num2;
    console.log(resultSubtract);
  }

  static divide(num1, num2) {
    const resultDivide = num1 / num2;
    console.log(resultDivide);
  }

  static multiply(num1, num2) {
    const resultMultiply = num1 * num2;
    console.log(resultMultiply);
  }
}

const calc = new Calculator();

// console.log(calc.add(2, 3));
// Calculator.add(2, 3);
// Calculator.subtract(8, 1);
// Calculator.divide(12, 2);
// Calculator.multiply(4, 5);
*/
