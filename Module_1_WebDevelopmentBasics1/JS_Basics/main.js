// = Assignment Operator

// Primitive Data Types
// 1. String
var name = "Mihir";
console.log(name);
// 2. Number
var age;
console.log(age); // undefined
age = 20;
// 3. Boolean
var isProgrammer = true;

// Non-Primitive Data Types
// 4. Null
var isNull = null;
// 5. Undefined - we declare a variable but we don't assign any value to it
var isUndefined = undefined;
// 6. Object
// 1. Array
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
// 2. Function
//var greet = alert("Hello World!");
var date = Date();
console.log(date);
function add(a, b) {
  return a + b;
}
// Arithmatic operators -, +, *, /, %, ++, --, +=, -=, *=, /=, %=
var x = 10;
var y = 20;

console.log("Addition", x + y);
console.log("Subtraction", x - y);
console.log("Multiplication", x * y);
console.log("Division", x / y);
console.log("Modulus", x % y);
// Post
console.log("Increment", x++);
// Pre Increment
console.log("Increment", ++y);

// Comparison Operators - ==, ===, !=, !==, >, <, >=, <=
var a = 10;
var b = 20;
console.log("Equal to", a == b); // false
console.log("Not Equal to", a != b); // true
console.log("Equal to", a === "10"); // === compare the value and the type

// ! is the logical NOT operator
console.log("Not Equal to", a !== "10"); // !== compare the value and the type

// Logical Operators - &&, ||, !
var c = 10;
var d = 20;
//
console.log("Logical AND", c < d && c > d); // false

// in OR if one of the condition is true then it will return true
console.log("Logical OR", c < d || c > d); // true

console.log("Logical NOT", !(c < d && c > d)); // true

// String Manipulation
var firstName = "Mihir";
var lastName = "Tailor";
var fullName = firstName + " " + lastName;
console.log("Fullname: ", fullName);

// using concat method
var fullName = firstName.concat(" ", lastName);
console.log("Fullname: ", fullName);

// Using template literals
var fullName = `${firstName} ${lastName}`;
console.log("Fullname: ", fullName);

// String Methods
var str = "Hello World";
console.log("Length of the string: " + str, str.length);
console.log("UpperCase: " + str.toUpperCase());
console.log("LowerCase: " + str.toLowerCase());

// Arrays
// Creating arrays
var cars = ["BMW", "Audi", "Mercedes"];
var fruits = new Array("Apple", "Banana", "Orange");
console.log("Cars: ", cars);
console.log("Fruits: ", fruits);

// Accessing array elements
console.log("First car: " + cars[0]);

// Assign new value to an array element
cars[0] = "Toyota";
console.log("New car: " + cars[0]);

// Adding new element to end of the array
cars.push("Honda");
console.log("New car: " + cars[cars.length - 1]);

// adding new element to beginning of the array
cars.unshift("Tesla");
console.log("New car: " + cars[0]);

// Removing last element from the array
console.log("Last car before pop: " + cars);
var lastCar = cars.pop();
console.log("removed car: " + lastCar);
console.log("Last car after pop: " + cars);

// Removing first element from the array
console.log("First car before shift: " + cars);
var firstCar = cars.shift();
console.log("removed car: " + firstCar);
console.log("First car after shift: " + cars);

// Splice - remove elements from an array
// splice(start, deleteCount, item1, item2, ...)
// start - index at which to start changing the array
// deleteCount - number of elements to remove
// item1, item2, ... - elements to add to the array
cars.push("Honda", "Ford", "Chevrolet");
console.log("Cars before splice: " + cars);
cars.splice(2, 2);
console.log("Cars after splice: " + cars);
cars.splice(2, 0, "Mercedes", "BMW");
console.log("Cars after splice add: " + cars);

cars.sort();
console.log("Cars after sort: " + cars);

// Slice - return a new array with selected elements
console.log("Cars before slice: " + cars);
var newCars = cars.slice(2, 4);
console.log("Cars after slice: " + newCars);

// map method - iterate over each item in array and return a new array
var numbers = [1, 4, 9, 16, 25];
var squareOfNumbers = numbers.map(Math.sqrt);
console.log("Square of numbers: " + squareOfNumbers);

// 2D Array
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix: ", matrix);
console.log("Matrix: " + matrix[0][0]);

// Functional Declaration
// A function is a block of code that can be executed when it is called

function sum(a, b) {
  return a + b;
}

var result = sum(10, 20);
// Calling the function
console.log("Sum: ", result);

for (var fruit of fruits) {
  if (fruit === "Banana") {
    break;
  }
  console.log("Fruit: ", fruit);
}

// forEach method
