const http = require("node:http");

const server = http.createServer((request, respose) => {
  if (request.url === "/") {
    respose.write("This is Home page");
  } else if (request.url == "/contact") {
    respose.write("This is Contact page");
  } else if (request.url == "/about") {
    respose.write("This is About page");
  } else {
    respose.write("This is 404 page");
  }

  // Implement the about page

  respose.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
