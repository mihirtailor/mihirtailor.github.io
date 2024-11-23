const name = "Mihir";

function sayName(name) {
  console.log("Hello: " + name);
}

module.exports.name = name;
module.exports.sayName = sayName;
