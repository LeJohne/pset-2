const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let totalp = students + teachers;
let buscap = totalp / capacity;
let buses = Math.ceil(buscap);
let busrem = totalp % capacity;

console.log("\n" + buses + " bus(es) is (are) needed, with " + (busrem) + " passenger(s) on the last bus.");
