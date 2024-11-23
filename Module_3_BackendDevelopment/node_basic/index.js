const name = require("./module");

const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));

// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// console.log("OS Version: " + os.version());
// console.log("Total Memory: " + os.totalmem);
// console.log("Machine: " + os.machine);
// console.log("OS Type: " + os.type);

// Usging async function

// fs.readFile("promise.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// // Using sync function

// try {
//   const data = fs.readFileSync("promise.js", "utf-8");
//   console.log(data);
// } catch {
//   console.log(err);
// }

name.sayName("Java");
console.log(name.name);
