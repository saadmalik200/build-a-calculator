"use strict";

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
Calculator.add(2, 3);
Calculator.subtract(8, 1);
Calculator.divide(12, 2);
Calculator.multiply(4, 5);
