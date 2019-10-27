const readlineSync = require("readline-sync");

const length = 48;
const width = 24;
const diameter = 6;

let b_area = length * width;
let r = diameter /2;
let c_area = Math.PI * (Math.pow(r,2));
let area = b_area - c_area;

let finalarea = area.toLocaleString("en", {maximumFractionDigits:2});


console.log("\nThe surface area of a standard Cornhole board is " + finalarea + " sqaure inch(es).");
