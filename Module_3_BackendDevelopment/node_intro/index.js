// modules are little packages we can use for our project
// http module is a built-in module in Node.js
// we can uset it to create a web server - a server that listenes for requests and sends responseds to the client

// any file in node.js is consideree a module, giving us ability to export and import code between files/modules
//console.log(module);

// waht are some of the built-in modules in Node.js?
// console, http, fs, path, os, url, querystring, events, etc.
// path module is used to work with file paths
const path = require("node:path");
const x = path.parse(__filename); // __filename is a global variable that contains the path to the current file
//console.log(x);
// We can use the require() function to import a module

// os for operating system
const os = require("node:os");
// console.log(os.type());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.totalmem());
// console.log(os.freemem());

var http = require("http");
// import log function from logger.js
// ./filename: this means current folder
// ../filename: this means parent folder
// /filename: this means root folder
// we import the class definition of the Logger class
const logger = require("./logger");
const LoggerInstance = new logger();

LoggerInstance.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

http
  .createServer(
    // take a callback function as an argument, this callback function will have access to the request and response objects
    function (req, res) {
      LoggerInstance.log("request received");

      // write response for the client
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write('{ "name": "John Doe", "age": 30 }');
    }
  )
  .listen(8080); // listen for requests on port 8080
// ports are like doors to a house, they are the entry points to a server

// npm install will create a node_modules folder and install dependeencies in that folder
// npm uninstall will remove a dependency from the node_modules folder
// npm install -g <package-name> will install a package globally
// npm install -g <package-name>@<version> will install a specific version of a package
// npm update will update all dependencies

// Semantic Versioning: major.minor.patch
// major: breaking changes minor: new features patch: bug fixes
//  Caret (^) allows minor and patch updates
//  Tilde (~) allows patch updates
