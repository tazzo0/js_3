// task 1
let num = prompt("Enter a number: ");

function square(num) {
    return num * num;
 }

 alert(`შეყვანილი რიცხვის კვადრატია: ${square(num)}`);

// task 2

let celsius = prompt("Enter a temperature in Celsius: ");
function celToFahr(celsius) {
    return (celsius * 9 / 5) + 32;
}

alert(`Enterd temperature in Fahrenheit: ${celToFahr(celsius)}`);

// task 3

const rangeStart = parseFloat(prompt("შეიყვანეთ დიაპაზონის საწყისი რიცხვი: "));
const rangeEnd = parseFloat(prompt("შეიყვანეთ დიაპაზონის ბოლო რიცხვი: "));
const number = parseFloat(prompt("შეიყვანეთ რიცხვი: "));

function isNumberInRange(number, rangeStart, rangeEnd) {
    if (rangeStart > rangeEnd) {
        console.error("დიაპაზონის საწყისი რიცხვი უნდა იყოს ნაკლები ან ტოლი ბოლო რიცხვზე.");
        return false;
    }
    return number >= rangeStart && number <= rangeEnd;
}

if (isNumberInRange(number, rangeStart, rangeEnd)) {
    alert(`${number} მოქცეულია დიაპაზონში ${rangeStart}-სა და ${rangeEnd}-ს შორის.`);
} else {
    alert(`${number} არ არის მოქცეული დიაპაზონში ${rangeStart}-სა და ${rangeEnd}-ს შორის.`);
}

// task 4

let year =prompt("შეიყვანეთ წელი: ");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0);
}

if (isLeapYear(year)) {
    alert(`${year} წელი ნაკიანია.`);
} else {
    alert(`${year} წელი არ არის ნაკიანი.`);
}

// task 5

function calculator() {
  const number1 = parseFloat(prompt("შეიყვანეთ პირველი  რიცხვი : "));
  const number2 = parseFloat(prompt("შეიყვანეთ მეორე  რიცხვი : "));
  const operation = prompt("შეიყვანეთ მოქმედება (+, -, *, /): ");

  let result;

  if (operation === "+") {
    result = number1 + number2;
  } else if (operation === "-") {
    result = number1 - number2;
  } else if (operation === "*") {
    result = number1 * number2;
  } else if (operation === "/") {
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      alert("ნულზე გაყოფა დაუშვებელია!");
      return;
    }
  } else {
    alert("არასწორი მოქმედება! მხოლოდ +, -, *, / არის დაშვებული.");
    return;
  }

  alert(`${number1} ${operation} ${number2} = ${result}`);
}
calculator();
