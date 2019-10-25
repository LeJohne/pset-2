const readlineSync = require("readline-sync");

const wage = Number(readlineSync.question("\nAnnual salary: "));

const pre = 0.07;
const fed = 0.157;
const soc = 0.062;
const med = 0.0145;
const st = 0.0447;

const ttax =  fed + soc + med + st;

let duc1 = (1 - pre) * wage
let duc2 = (1 - ttax) * duc1;
let salary = duc2/24;

let check = salary.toLocaleString('en-US', {style : 'currency' , currency: 'USD'});

console.log("\nYour take-home pay each check will be " + check + ".");
