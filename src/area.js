const readlineSync = require("readline-sync");
const l = readlineSync.question("\nWidth: ");
const w = readlineSync.question("Length: ");

let a = l*25.4;
let b = w*25.4;
let c = a * b;
let d = Math.round(c*100)/100;
let e = d.toLocaleString();

console.log("\nA(n) " + (l) + "-by-" + (w) + "-inch sheet of paper has an area of " + (e)  + " square milimeter(s).");
