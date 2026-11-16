// Temperature Converter — run this in the Chrome console

let choice;

do {
  choice = prompt("Type F to convert Fahrenheit → Celsius, or C to convert Celsius → Fahrenheit:").trim().toUpperCase();

  if (choice !== "F" && choice !== "C") {
    alert("No, try again! Please type F or C.");
  }
} while (choice !== "F" && choice !== "C");

let temperature = Number(prompt("Enter the temperature:"));
let result;

if (choice === "F") {
  result = (temperature - 32) * 5 / 9;
  alert(temperature + "°F is " + result.toFixed(2) + "°C");
} else {
  result = (temperature * 9 / 5) + 32;
  alert(temperature + "°C is " + result.toFixed(2) + "°F");
}
