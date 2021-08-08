const a = prompt('Enter the first number: ');
const b = prompt('Enter the second number: ');

const myCalc = new Calculator(a, b);

console.log('Add first + second: ' + myCalc.add());
console.log('Subtract first - second: ' + myCalc.subtract());
console.log('Multiply first * second: ' + myCalc.multiply());
console.log('Divide first / second: ' + myCalc.divide());
