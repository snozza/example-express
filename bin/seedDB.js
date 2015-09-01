#!/usr/bin/env node

var path = require("path");
var fs = require("fs");
var dbseed = path.join(path.dirname(fs.realpathSync(__filename)), "../db/seeds");

require(dbseed + "/userSeed.js").startSeed();
