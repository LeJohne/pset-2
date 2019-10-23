const readlineSync = require("readline-sync");
const l = readlineSync.question("\nWidth: ");
const w = readlineSync.question("Length: ");

let a = l*2.54;
let b = w*2.54;
let c = a + a + b + b;
let d = Math.round(c*100)/100;
let e = d.toLocaleString();

console.log("\nA(n) " + (l) + "-by-" + (w) + "-inch sheet of paper has a perimeter of " + (e)  + " centimeter(s).");
