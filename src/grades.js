const readlineSync = require("readline-sync");

const hweight = 0.15
const qweight = 0.35
const tweight = 0.5

let h1 = readlineSync.question("\nEnter three homework grades. \n");
let h2 = readlineSync.question("");
let h3 = readlineSync.question("");

let q1 = readlineSync.question("\nEnter three quiz grades. \n");
let q2 = readlineSync.question("");
let q3 = readlineSync.question("");

let t1 = readlineSync.question("\nEnter three test grades. \n");
let t2 = readlineSync.question("");
let t3 = readlineSync.question("");

let hgrade = (h1 * hweight) + (h2 * hweight) + (h3 * hweight);
let qgrade = (q1 * qweight) + (q2 * qweight) + (q3 * qweight);
let tgrade = (t1 * tweight) + (t2 * tweight) + (t3 * tweight);
let fgrade = (hgrade + qgrade + tgrade) /3;

console.log("\nYour marking period grade is " + fgrade.toFixed(2) + "%." );
