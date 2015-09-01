var bole = require("bole");

bole.output({
  level: "debug",
  stream: process.stdout
});

module.exports = bole(__filename);
