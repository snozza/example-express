var express = require("express");
var config = require("./config");
var path = require("path");
var stylus = require("stylus");
var compression = require("compression");
var nib = require("nib");
var app = express();
var compression = require("compression");
var errors = require("./errors/errors");
require('node-jsx').install({ extension: '.jsx' });

function compile(str, path) {
  return stylus(str)
    .set("filename", path)
    .set("compress", true)
    .use(nib());
}

global.__base = path.resolve(__dirname, "../");
app.set("views", __dirname);
app.set("view engine", "jade");
app.use(compression());
app.use(stylus.middleware({
  src: __dirname + "/site",
  dest: __base + "/wwwroot",
  compile: compile
}));
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.static(path.join(__base + "/wwwroot")));
app.use(require("./site/pagesRoutes"));
app.use("/api", require("./users/userRoutes"));
app.use("/api", require("./comparisons/comparisonRoutes"));
app.use(errors.notFound);
app.use(errors.middleware);

module.exports = app;

