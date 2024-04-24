console.log("Starting script...");

// Сложение различных типов
const stringBooleanAddition = "hello" + true;
const stringNumberAddition = "hello" + 123;
const numberBooleanAddition = 10 + true;

console.log("String + Boolean:", stringBooleanAddition);
console.log("String + Number:", stringNumberAddition);
console.log("Number + Boolean:", numberBooleanAddition);

// Умножение различных типов
const stringBooleanMultiplication = "hello" * true; // Выведет NaN
const stringNumberMultiplication = "5" * 2;
const numberBooleanMultiplication = 10 * true;

console.log("String * Boolean:", stringBooleanMultiplication);
console.log("String * Number:", stringNumberMultiplication);
console.log("Number * Boolean:", numberBooleanMultiplication);

// Деление различных типов
const stringNumberDivision = "10" / 2;
const numberBooleanDivision = 10 / true;
const stringBooleanDivision = "hello" / true; // Выведет NaN

console.log("String / Number:", stringNumberDivision);
console.log("Number / Boolean:", numberBooleanDivision);
console.log("String / Boolean:", stringBooleanDivision);

// Явное преобразование типов
const numberConversion = Number("123");
const stringConversion = String(123);
const booleanConversion = Boolean(0);

console.log("Number conversion:", numberConversion);
console.log("String conversion:", stringConversion);
console.log("Boolean conversion:", booleanConversion);

console.log("Script execution finished.");

