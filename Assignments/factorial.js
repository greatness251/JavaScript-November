function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function askAndShowFactorial() {
  let num = Number(prompt("Input number"));
  let result = factorial(num);
  alert(result);
}

askAndShowFactorial();