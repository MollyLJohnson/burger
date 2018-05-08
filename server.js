var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var handle = require("express-handlebars");

app.engine("handlebars", handle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");
app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});