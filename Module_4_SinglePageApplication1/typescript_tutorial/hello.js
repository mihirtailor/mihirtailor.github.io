// string example
var test = "test value";
// number example
var val = 10;
var is_true = true;
var user = ["Andy", "Bob", "Cindy"];
var user2 = ["Andy", 100, "Bob", true, 56];
// another way or writing this
var user4 = ["Andy", 100];
// in case if you are not sure about the type
var user3 = ["Andy", 100, "Bob", true];
test = "Test";
val = 100;
var obj_example = {
    id: 1,
    name: "Andy",
    age: 43,
};
var student = {
    id: 2,
    name: "Bob",
    age: 34,
};
var student2 = {
    id: 3,
    name: "Niko",
    age: 45,
};
function greetings(name, age) {
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
