const EventEmitter = require("events");

// extends allows class to inherit from another class
class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    // raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// function log(message) {
//   // logging request that has come to the server
//   console.log(message);
// }

module.exports = Logger;
