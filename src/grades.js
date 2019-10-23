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

let hgrade = ((h1 + h2 + h3) /3) * hweight;
let qgrade = ((q1 + q2 + q3) /3) * qweight;
let tgrade = ((t1 + t2 + t3) /3) * tweight;
let fgrade = (hgrade + qgrade + tgrade) /3;

let d = Math.round(fgrade*100)/100;

console.log("Your marking period grade is " + (d) + "%." );
