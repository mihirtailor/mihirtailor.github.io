// Waht are objects ?
// a variable that can store multiple values(peroperties) and methods(functions)

// We can create variabls and functions separately
var userName = "Mihir";
var age = 30;
var isMarried = true;

function canTalk() {
  console.log("Hello, I am " + userName);
}

// Or we can create an object that can store multiple values and methods

var person1 = {
  userName: "Mihir",
  age: 30,
  isMarried: true,
  canTalk: function () {
    console.log("Hello, I am " + this.userName);
  },
};

console.log(person1);

var person2 = {
  userName: "John",
  age: 27,
  isMarried: true,
  canTalk: function () {
    console.log("Hello, I am " + this.userName);
  },
};

console.log(person2);

person1.canTalk();
person2.canTalk();

// we can create objects using classes
// class is a bluprint of an object

class Person {
  userName = "";
  age = 0;
  isMarried = false;

  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }
  canTalk() {
    console.log("Hello, I am " + this.userName);
  }
}

// new keyword is used to create a new object
var person3 = new Person("Jane", 30, true);
console.log(person3);
console.log(person3.canTalk());

// log person class
console.log(Person);

// update the username of person3.username
document.getElementById("username").innerHTML =
  "<span>Username: " + person3.userName + "</span>";
document.getElementById("age").innerHTML =
  "<span>Age: " + person3.age + "</span>";
document.getElementById("isMarried").innerHTML =
  "<span>Married: " + person3.isMarried ? "yes" : "no" + "</span>";
x;
