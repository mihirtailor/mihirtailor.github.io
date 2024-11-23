console.log("Hello World");

function hello(name) {
  console.log(`Hello ${name}`);
  console.log("Hello", name);
  console.log("Hello " + name);
}

hello("Mihir");

// arrow function
const hello2 = (name) => {
  console.log(`Arrow Function Hello: ${name}`);
};
hello2("Mihir");
