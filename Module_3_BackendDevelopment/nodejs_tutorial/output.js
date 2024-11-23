const x = "1";
const y = "2";

// console.log(x, y);

// console.log("I am %s and my age is %d", "John", 25);
// console.clear();
// console.count("I am Mihir");
// console.count("I am Mihir");

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);

const measureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
};
measureTime();
