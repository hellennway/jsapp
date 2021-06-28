var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("connect-flash");
var users = require("./routes/web/data")


var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));


app.use(flash());

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));


app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
})