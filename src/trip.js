const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let totalp = students + teachers;
let buscap = totalp / capacity
let buses = Math.ceil(1.0)
let busrem = totalp % capacity

console.log("\n" + buscap + " bus(es) is (are) neede, with " + (busrem) + " passenger(s) on the last bus.");
