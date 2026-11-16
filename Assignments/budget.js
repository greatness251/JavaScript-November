// ===== Budget Calculator (Naira) =====

// Step 1: Ask the user for their starting budget
function getInitialBudget() {
  let budget = Number(prompt("Enter your initial budget (₦):"));
  return budget;
}

// Step 2: Ask what the user spent money on, and how much
function addExpense() {
  let description = prompt("What did you spend money on?");
  let amount = Number(prompt("How much did you spend on " + description + "? (₦)"));
  return amount;
}

// Step 3: Subtract one expense from the current budget
function subtractFromBudget(currentBudget, expenseAmount) {
  return currentBudget - expenseAmount;
}

// Step 4: Show the final remaining balance
function checkBalance(balance) {
  alert("You have ₦" + balance + " remaining");
}

// ===== Main program =====
let budget = getInitialBudget();
let numberOfExpenses = Number(prompt("How many expenses do you want to enter?"));

for (let i = 0; i < numberOfExpenses; i++) {
  let expenseAmount = addExpense();
  budget = subtractFromBudget(budget, expenseAmount);
}

checkBalance(budget);
