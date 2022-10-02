/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  return number1 + number2;
}

function getValue(inputId) {
  const value = document.getElementById(inputId).value;
  return value;
}

function addNumbers() {
  const input1Value = parseInt(getValue("addend1"));
  const input2Value = parseInt(getValue("addend2"));
  const sumValue = add(input1Value, input2Value);
  document.getElementById("sum").value = sumValue;
}

const addNumbersButton = document.getElementById("addNumbers");

addNumbersButton.addEventListener("click", () => addNumbers());

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

//substract
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  const input1Value = parseInt(getValue("minuend"));
  const input2Value = parseInt(getValue("subtrahend"));
  const restValue = subtract(input1Value, input2Value);
  document.getElementById("difference").value = restValue;
}

const subtractNumbersButton = document.getElementById("subtractNumbers");

subtractNumbersButton.addEventListener("click", () => subtractNumbers());

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const input1Value = parseInt(getValue("factor1"));
  const input2Value = parseInt(getValue("factor2"));
  const multiplyValue = multiply(input1Value, input2Value);
  document.getElementById("product").value = multiplyValue;
};

const multiplyNumbersButton = document.getElementById("multiplyNumbers");

multiplyNumbersButton.addEventListener("click", () => multiplyNumbers());

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
  const input1Value = parseInt(getValue("dividend"));
  const input2Value = parseInt(getValue("divisor"));
  const multiplyValue = divide(input1Value, input2Value);
  document.getElementById("quotient").value = multiplyValue;
};

const divideNumbersButton = document.getElementById("divideNumbers");

divideNumbersButton.addEventListener("click", () => divideNumbers());

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const myDate = new Date();
// Step 2: Declare a variable to hold the current year

let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

currentYear = myDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let listoUpTo25 = [...Array(26).keys()];
listoUpTo25.shift();

console.log(listoUpTo25);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById("array").textContent = listoUpTo25;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

const oddsElement = document.getElementById("odds");

function oddsNumbers(number) {
  return number % 2 !== 0;
}

oddsElement.textContent = listoUpTo25.filter(oddsNumbers);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evensElement = document.getElementById("evens");

function evensNumbers(number) {
  return number % 2 === 0;
}

evensElement.textContent = listoUpTo25.filter(evensNumbers);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

function sumValues(total, actual) {
  return total + actual;
}

const sumElement = document.getElementById("sumOfArray");

sumElement.textContent = listoUpTo25.reduce(sumValues);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multiplyBy = (number, multipler) => {
  return number * multipler;
};

const numbersMultiplied = listoUpTo25.map((number) => multiplyBy(number, 2));

document.getElementById("multiplied").textContent = numbersMultiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");

const sumOfMultiplied = listoUpTo25
  .map((number) => multiplyBy(number, 2))
  .reduce(sumValues);

sumOfMultipliedElement.textContent = sumOfMultiplied;
