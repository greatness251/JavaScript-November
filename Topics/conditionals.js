// IF Statements

let age = 20;

if(age >= 18) {
    console.log("You can vote.");
}

// IF ELSE Statements

let myage = parseInt(prompt('How old are you?'));

if(myage >= 18) {
    console.log("You are can vote.");

}
else{
    console.log('You are not old enough to vote.');
}


// Ternary Operator
let myage = parseInt(prompt('How old are you?'));
myage >= 18 ? console.log("You can vote.") : console.log("You can not to vote.");
//IF ELSE IF Statements

let yourage = parseInt(prompt('How old are you?'));

if(yourage < 18) {
    alert("You are a minor")

}
else if(yourage >= 65) {
    alert("You are too old to vote")
}
else {
    alert("You can vote")
}

// Mini Project: Simple Calculator

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator";
}

alert("Result: " + result);

// SWITCH
let fruit = prompt('What is your favourite fruit?')

switch(fruit){
  case 'apple':
    console.log('You selected apple')
    break;
  case 'orange':
      console.log('You selected orange')
      break;
  case 'mango':
    console.log('You selected mango')
    break;
    default:
      console.log("We don't have that fruit.")
  
}
let number = parseInt(prompt('Enter a number between 1 and 7 to know the day of the week:'));
switch(number){
  case 1:
    console.log('Today is Monday.')
    break;
  case 2:
    console.log('Today is Tuesday.')
    break;
  case 3:
    console.log('Today is Wednesday.')
    break;
  case 4:
    console.log('Today is Thursday.')
    break;
  case 5:
    console.log('Today is Friday.')
    break;
  case 6:
    console.log('Today is Saturday.')
    break;
  case 7:
    console.log('Today is Sunday.')
    break;
  default:
    console.log('Please enter a valid number between 1 and 7.')
}