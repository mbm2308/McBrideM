#!/usr/bin/env node
var fs = require("fs");
var text = fs.readFileSync("adventinput1.txt.txt").toString();
var textByLine = text.split("\n")

var intList = [];

for(var i=0; i<textByLine.length; i++) {
console.log(parseInt(textByLine[i]));
intList.push(parseInt(textByLine[i]));
} 