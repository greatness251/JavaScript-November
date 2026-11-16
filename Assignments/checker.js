function checkNumber() {
  let number = prompt("Enter any number:");
   if (number === null) {
        alert("You cancelled the operation.");
        return;
    }
   
    number = Number(number);

    if (!Number.isInteger(number)) {
        alert("Please enter a valid whole number.");
    }    
    else if (number % 2 === 0) {
        alert(number + " is an Even Number");
    }

    else {
        alert(number + " is an Odd Number");
    }
}
checkNumber();