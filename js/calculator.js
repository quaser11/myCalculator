const obj = {
  firstNumber: "",
  secondNumber: "",
  operator: "",

  multiply() {
    if (
      this.operator === "X" &&
      this.firstNumber != "" &&
      this.secondNumber != ""
    ) {
      this.firstNumber = String(this.firstNumber * this.secondNumber);
      this.secondNumber = "";
      this.operator = "";
    }

    return this.firstNumber;
  },

  divide() {
    if (
      this.operator === "/" &&
      this.firstNumber != "" &&
      this.secondNumber != ""
    ) {
      this.firstNumber = String(this.firstNumber / this.secondNumber);
      this.secondNumber = "";
      this.operator = "";
    }

    return this.firstNumber;
  },

  subtract() {
    if (
      this.operator === "-" &&
      this.firstNumber != "" &&
      this.secondNumber != ""
    ) {
      this.firstNumber = String(this.firstNumber - this.secondNumber);
      this.secondNumber = "";
      this.operator = "";
    }

    return this.firstNumber;
  },

  add() {
    if (
      this.operator === "+" &&
      this.firstNumber != "" &&
      this.secondNumber != ""
    ) {
      this.firstNumber = String(
        Number(this.firstNumber) + Number(this.secondNumber)
      );
      this.secondNumber = "";
      this.operator = "";
    }

    return this.firstNumber;
  },
};

const operators = ["/", "X", "-", "+"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const equalSign = "=";

const togglePlusMinus = "+/-";

const comma = ",";

const input = document.querySelector(".input");
const buttons = document.querySelector(".screen-buttons");

buttons.addEventListener("click", (event) => {
  // +/-
  if (
    togglePlusMinus.includes(event.target.textContent) &&
    obj.secondNumber === "" &&
    !obj.firstNumber.includes("-") &&
    obj.firstNumber != "" &&
    obj.operator === ""
  ) {
    obj.firstNumber = "-" + obj.firstNumber;
    input.value = obj.firstNumber;
  } else if (
    togglePlusMinus.includes(event.target.textContent) &&
    obj.firstNumber.includes("-") &&
    obj.firstNumber != "" &&
    obj.operator === ""
  ) {
    obj.firstNumber = String(-obj.firstNumber);
    input.value = obj.firstNumber;
  }

  if (
    togglePlusMinus.includes(event.target.textContent) &&
    obj.secondNumber != "" &&
    !obj.secondNumber.includes("-") &&
    obj.firstNumber != ""
  ) {
    obj.secondNumber = "-" + obj.secondNumber;
    input.value = obj.secondNumber;
  } else if (
    togglePlusMinus.includes(event.target.textContent) &&
    obj.secondNumber.includes("-") &&
    obj.secondNumber != ""
  ) {
    obj.secondNumber = String(-obj.secondNumber);
    input.value = obj.secondNumber;
  }
// AC
  if (event.target.textContent === "AC") {
    allClear();
  }

  if (
    numbers.includes(event.target.textContent) &&
    obj.operator === "" &&
    obj.firstNumber.length <= 9
  ) {
    addFirstNumber(event);
  }

  if (operators.includes(event.target.textContent)) {
    defineOperator(event);
    input.value = "";
  }

  if (
    obj.firstNumber != "" &&
    obj.operator != "" &&
    numbers.includes(event.target.textContent) &&
    obj.secondNumber.length <= 9
  ) {
    addSecondNumber(event);
  }

  // MULTIPLY
  if (
    obj.operator === "X" &&
    obj.firstNumber != "" &&
    obj.secondNumber != "" &&
    equalSign.includes(event.target.textContent)
  ) {
    multiply();
  }
  // SUBTRACT
  if (
    obj.operator === "-" &&
    obj.firstNumber != "" &&
    obj.secondNumber != "" &&
    equalSign.includes(event.target.textContent)
  ) {
    subtract();
  }
  // DIVIDE
  if (
    obj.operator === "/" &&
    obj.firstNumber != "" &&
    obj.secondNumber != "" &&
    equalSign.includes(event.target.textContent)
  ) {
    divide();
  }
  // ADD
  if (
    obj.operator === "+" &&
    obj.firstNumber != "" &&
    obj.secondNumber != "" &&
    equalSign.includes(event.target.textContent)
  ) {
    add();
  }
  console.log(obj);
});

// FUNCTIONTS

function allClear() {
  input.value = "";
  obj.firstNumber = "";
  obj.secondNumber = "";
  obj.operator = "";
}

function addFirstNumber(event) {
  obj.firstNumber += event.target.textContent;
  input.value = obj.firstNumber;
}

function addSecondNumber(event) {
  obj.secondNumber += event.target.textContent;
  input.value = obj.secondNumber;
}

function defineOperator(event) {
  obj.operator = event.target.textContent;
}

function multiply() {
  obj.multiply();
  input.value = obj.firstNumber;
}

function divide() {
  obj.divide();
  input.value = obj.firstNumber;
}

function subtract() {
  obj.subtract();
  input.value = obj.firstNumber;
}

function add() {
  obj.add();
  input.value = obj.firstNumber;
}
