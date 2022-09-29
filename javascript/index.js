// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
async function makeBroccoli() {

}

// Bonus 2 - Promise all
const prom1 = obtainInstruction("brusselsSprouts", 0);
const prom2 = obtainInstruction("brusselsSprouts", 1);
const prom3 = obtainInstruction("brusselsSprouts", 2);
const prom4 = obtainInstruction("brusselsSprouts", 3);
const prom5 = obtainInstruction("brusselsSprouts", 4);
const prom6 = obtainInstruction("brusselsSprouts", 5);
const prom7 = obtainInstruction("brusselsSprouts", 6);
const prom8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([prom1, prom2, prom3, prom4, prom5, prom6, prom7, prom8]).then((values) => {
  values.forEach((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
});