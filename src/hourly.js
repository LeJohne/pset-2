const readlineSync = require("readline-sync");

const hwage = readlineSync.question("\nHourly wage: ");

let mon = readlineSync.question("\nMonday: ");
let tue = readlineSync.question("Tuesday: ");
let wed = readlineSync.question("Wednesday: ");
let thur = readlineSync.question("Thursday: ");
let fri = readlineSync.question("Friday: ");
let sat = readlineSync.question("Saturday: ");
let sun = readlineSync.question("Sunday: ");

let hours = mon + tue + wed + thur + fri + sat + sun;
let pay = hwage * hours;
let pay1 = Math.round(pay*100)/100;
let pay2 = pay1.toLocaleString();

function financial(pay2){
  return Number.parseFloat(pay2).toFixed(2);
}

console.log("\nYou'll make $" + financial(pay2) + "this week." );
