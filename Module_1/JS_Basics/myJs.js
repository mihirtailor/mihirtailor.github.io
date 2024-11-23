// String
var firstName = "Mihir";
//   Number
var number = 10;
//   boolean
var isBoolean = true;

var sum = number + 10;
var subTract = sum - 5;
var multiplication = 5 * 5;
var division = 15 / 5;
console.log("SUM IS ", sum);
console.log("SUM IS " + subTract);
console.log("Multiplication " + multiplication);
console.log("Division " + division);

if (sum > 10) {
  console.log("sum is greater than 10");
} else if (sum == 10) {
  console.log("sum is equal to 10");
} else {
  console.log("sum is less than 10");
}

//Using th example above write if else statement if value is greater than 90 it should show your
//grade is A else it's F
var grade = 70;
if (grade >= 90) {
  console.log("grade is A");
} else if (grade >= 80) {
  console.log("grade is B");
} else if (grade >= 70) {
  console.log("grade is C");
} else if (grade >= 60) {
  console.log("grade is D");
} else if (grade >= 50) {
  console.log("grade is E");
} else {
  console.log("grade is F");
}

// compare values only
if (5 == "5") {
  console.log("5 is equal to 5");
} else {
  console.log("5 is not equal to 5");
}

// compare  values and data type
if (5 === "5") {
  console.log("5 is equal to 5");
} else {
  console.log("5 is not equal to 5");
}

if (10 > 1) {
  console.log("This is true");
}

if (1 < 10) {
  console.log("This is also true");
}

if (true) {
  console.log("This is also true", 10 > 1);
}

if (grade > 50 && 5 === "5") {
  console.log(
    "This will be displayed if both values are correct",
    grade > 50,
    5 === "5"
  );
}

if (grade > 50 || 5 === "5") {
  console.log(
    "This will be displayed if either one of the values are correct, Grade: " +
      grade >
      50 + "Number:" + 5 ===
      "5",
    grade > 50,
    5 === "5"
  );
}

// Array

var myArray = ["Mihir", "Vishal", "Raj"];
console.log(myArray);
console.log("array index 0: " + myArray[myArray.length - 1]);
myArray[2] = "new name";
console.log("array index last: " + myArray[myArray.length - 1]);
myArray.push("Devil");
console.log("array after push: " + myArray[myArray.length - 1]);

var anotherArray = new Array("Harry", "Tom", "Dick");
console.log("another array: " + anotherArray);

// indexof funcnction
console.log("index of: " + anotherArray.indexOf("Tom"));

if (anotherArray.indexOf("Tom") != -1) {
  console.log("Tom is in the array");
}

// Object
var myObject = {
  name: "Mihir",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

console.log(myObject);
console.log(myObject.name);
console.log(myObject.address.city);
console.log("my name is: " + myObject.name + " and my age is: " + myObject.age);
// document.getElementById("name").innerHTML =
//   "my name is: " + myObject.name + " and my age is: " + myObject.age;
window.onload = function () {
  document.getElementById("name").innerHTML = "my name is: " + anotherArray[0];
};

// function
function sayHello() {
  console.log("Hello World");
}
sayHello();

// display data in html

//loops
for (var i = 0; i < anotherArray.length; i++) {
  console.log("Name: " + anotherArray[i]);
}

// switch
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
}
