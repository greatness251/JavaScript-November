function findLargest(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}

function askAndShowLargest() {
  let num1 = Number(prompt("Enter 1st number"));
  let num2 = Number(prompt("Enter 2nd number"));
  let num3 = Number(prompt("Enter 3rd number"));
  let result = findLargest(num1, num2, num3);
  alert(result);
}

askAndShowLargest();