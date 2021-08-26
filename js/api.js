var express = require("express");
var app = express();
var port = 3000;

const fs = require("fs");
var n_forms = 0;

app.use(express.json(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/submit-data", function (req, res) {
  console.log("receiving data ...");
  console.log("body is ", req.body);
  res.send(req.body);
  fs.writeFileSync("form" + n_forms + ".json", JSON.stringify(req.body));
  n_forms++;
});

// start the server
app.listen(port);
console.log("Server started! At http://localhost:" + port);
