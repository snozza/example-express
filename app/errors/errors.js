var log = require('../log');

function canWithstand(error) {
  switch (error.code) {
    case "57P01":
      //terminating connection due to administrator command
    case "EHOSTUNREACH":
    case "ECONNREFUSED":
      //DB probably down at the moment
    case "ETIMEDOUT":
    case "ECONNRESET":
      //DB probably went down with an active connection
      log.warn(error, "Database connection error");
      return true;
    default:
      return false;
  }
}

function notFound(req, rest, next) {
  var err =  new Error('Page Not Found');
  err.status = 404;
  next(err);
}

function middleware(error, req, res, next) {
  res.status(error.status || error.statusCode || 500);
  if (canWithstand(error)) {
    res.locals.error = "Database is down";
    res.render("errors/notFound");
    return;
  }
  res.locals.error = error.message;
  log.error(error, "error handler middleware");
  res.render("errors/notFound");
}

function onUncaughtException(error) {
  if (canWithstand(error)) {
    return;
  }
  var fatal = "Uncaught exeption: process will exit";
  console.error(fatal, error);
  log.error(error, fatal);
  setImmediate(process.exit.bind(null, 66), 1000);
}

exports.canWithstand = canWithstand;
exports.notFound = notFound;
exports.middleware = middleware;
exports.onUncaughtException = onUncaughtException;
