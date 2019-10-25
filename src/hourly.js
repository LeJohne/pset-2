const readlineSync = require("readline-sync");

const hwage = Number(readlineSync.question("\nHourly wage: "));

let mon = Number(readlineSync.question("\nMonday: "));
let tue = Number(readlineSync.question("Tuesday: "));
let wed = Number(readlineSync.question("Wednesday: "));
let thur = Number(readlineSync.question("Thursday: "));
let fri = Number(readlineSync.question("Friday: "));
let sat = Number(readlineSync.question("Saturday: "));
let sun = Number(readlineSync.question("Sunday: "));

let hours = mon + tue + wed + thur + fri + sat + sun;
let pay = hwage * hours;

let pay1 = pay.toLocaleString('en-US', {style : 'currency' , currency: 'USD'});

console.log("\nYou'll make " + pay1 + " this week." );
