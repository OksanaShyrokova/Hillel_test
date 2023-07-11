// Початок програми
alert("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0");

let a = promptUserInput("Введіть a:");
let b = promptUserInput("Введіть b:");
let c = promptUserInput("Введіть c:");

// Функція для запиту у користувача введеного значення
function promptUserInput(message) {
    let userInput = null;
    while (userInput === null) {
        userInput = prompt(message);
        if (userInput === null) {
            return null; // Користувач натиснув "Cancel"
        }
        if (isNaN(userInput)) {
            userInput = null; // Користувач ввів нечислове значення, повторний запит
        }
    }
    return parseFloat(userInput); // Повертаємо числове значення
}

// Функція для розрахунку рішення квадратного рівняння
function solveQuadraticEquation(a, b, c, ifInvalid) {
    if (a === 0) {
        ifInvalid(); // Викликаємо callback-функцію, якщо a = 0
        return null;
    }
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        alert("D < 0.Рівняння не має рішень");
    } else if (discriminant === 0) {
        alert("D = 0.Єдиний корень рівняння");
    } else {
        alert("D > 0.Корені рівняння");
    }

}
solveQuadraticEquation(a, b, c, function () {
    alert("a = 0, функція не має рішень");
});