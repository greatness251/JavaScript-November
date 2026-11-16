let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

do {
  let input = prompt("Guess a number between 1 and 10:");

  
  if (input === null) {
    alert("Game cancelled. The secret number was " + secretNumber + ".");
    break;
  }a

  guess = Number(input);

  // Validate input: must be a real number between 1 and 10
  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    continue; // skip counting this as an attempt
  }

  attempts++;

  if (guess !== secretNumber) {
    alert("No, try again!");
  }
} while (guess !== secretNumber);


if (guess === secretNumber) {
  let word = attempts === 1 ? "try" : "tries";
  alert(
    "Correct! The secret number was " + secretNumber +
    ". You guessed it in " + attempts + " " + word + "!"
  );
}