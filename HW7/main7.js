
solveQuadraticEquation();
function solveQuadraticEquation() {
    alert("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0");

    let a = promptForNumber("Введіть a");
    if (a === null) {
        return;
    }

    let b = promptForNumber("Введіть b");
    if (b === null) {
        return;
    }

    let c = promptForNumber("Введіть c");
    if (c === null) {
        return;
    }

    let result = findRoots(a, b, c);
    alert(result);

    function promptForNumber(message) {
        while (true) {
            let input = prompt(message);
            if (input === null) {
                alert("Жаль. Сподіваюсь ще побачитись.");
                return null;
            }
            let number = parseFloat(input);
            if (!isNaN(number)) {
                return number;
            }
        }
    }

    function findRoots(a, b, c) {
        let discriminant = b * b - 4 * a * c;

        if (a === 0) {
            return "a = 0. Рівняння не має рішень";
        } else if (discriminant < 0) {
            return "D < 0. Рівняння не має рішень";
        } else if (discriminant === 0) {
            let root = -b / (2 * a);
            return "D = 0. Єдиний корень рівняння: " + root;
        } else {
            let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return "D > 0. Корені рівняння: " + root1 + ", " + root2;
        }
    }

}

