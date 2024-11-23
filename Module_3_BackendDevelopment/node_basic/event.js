const EventEmitter = require("node:events");
const event = new EventEmitter();

// listening for that event.
event.addListener("cricket", () => {
  console.log("Cricket is playing. Please Join");
});

// listening for that event.
event.on("cricket", () => {
  console.log("Cricket is playing. Please Join");
});

// manually triggering event
event.emit("cricket");

event.on("error", (args) => {
  console.log(args.message);
});

event.emit("error", { message: "your code is wrong", line: "10" });
