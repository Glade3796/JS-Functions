console.log("hello world");
function sayHello() {
  console.log("HELLO WORLD!");
}
function sayHelloTo(name) {
  console.log(`Hello ${name}, hope your good!`);
}

function calcAdd(a, b) {
  return a + b;
}
function calcMultiply(a, b) {
  return a * b;
}
function calcDiv(a, b) {
  return a / b;
}
function calcSub(a, b) {
  return a - b;
}
// function calculator(a, operator, b) {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if (operator === "/") {
//     return a / b;
//   }
// }

function calculator() {
  let a = prompt("First number:");
  let operator = prompt("Operator (+,-,*,/)");
  let b = prompt("Second number:");
  switch (operator) {
    case "+":
      return alert(a + b);
      break;
    case "-":
      return alert(a - b);
      break;
    case "*":
      return alert(a * b);
      break;
    case "/":
      return alrt(a / b);
      break;
  }
}
