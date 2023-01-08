// const greetings = (name) =>{
//     console.log(`Hello ${name}`);
// }
// greetings("Raju");
// greetings("Abhi");

// const calculator = require("./calculator");
// const {add,sub} = calculator;
// console.log(add(6,3));
// console.log(sub(2,1));


const StudentDetails = require("./calculator.js");

const studentDetails = new StudentDetails();

console.log(studentDetails.name);

console.log(studentDetails.score);