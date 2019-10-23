const readlineSync = require("readline-sync");
const l = readlineSync.question("\nWidth: ");
const w = readlineSync.question("Length: ");

let a = l;
let b = w;
let c = (a*a) + (b*b);
let d = Math.sqrt(c)
let e = Math.round(d*100)/100;
let f = e.toLocaleString();

function financial(f){
  return Number.parseFloat(f).toFixed(2);
}
console.log("\nA(n) " + (l) + "-by-" + (w) + "-inch sheet of paper has a diagonal of " + financial(f)  + " inch(es).");
