const readlineSync = require("readline-sync");
const l = readlineSync.question("Width: ");
const w = readlineSync.question("Length: ");

let a = l*2.54;
let b = w*2.54;
let c = a * b;
let d = Math.round(c*100)/100;
let e = d.toLocaleString();

console.log("A(n) " + (l) + "-by-" + (w) + "-inch sheet of paper has an area of " + (e)  + " square milimeter(s).");
