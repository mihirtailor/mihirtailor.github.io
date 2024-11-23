// string example
let test: string = "test value";
// number example
let val: number = 10;
var is_true: boolean = true;

var user: string[] = ["Andy", "Bob", "Cindy"];
var user2: (string | number | boolean)[] = ["Andy", 100, "Bob", true, 56];
// another way or writing this
var user4: [string, number] = ["Andy", 100];

// in case if you are not sure about the type
var user3: any[] = ["Andy", 100, "Bob", true];

test = "Test";
val = 100;

var obj_example: { id: number; name: string; age: number } = {
  id: 1,
  name: "Andy",
  age: 43,
};

var student: { id: number; name: string; age: number } = {
  id: 2,
  name: "Bob",
  age: 34,
};

type Student = {
  id: number;
  name: string;
  age: number;
};

var student2: Student = {
  id: 3,
  name: "Niko",
  age: 45,
};

function greetings(name: string, age: number): string {
  return "your name is " + name + " and your age is " + age;
}

greetings("Hogg", 43);

console.log(test);
console.log(val);
console.log(is_true);
console.log(user);
console.log(user2);
console.log(obj_example);
console.log(student);
console.log(student2);
console.log(greetings("Hogg", 43));

