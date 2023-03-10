const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Hello World: 5000");
});

app.get("/", (req, res) => {
  res.send("<html> <head>Response</head><body><h1> This will connect to sever <p>Hello everyone</p></h1></body></html>");
});