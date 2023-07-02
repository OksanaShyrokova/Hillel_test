function taskSolvingOne() {
    console.log('1)Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');
    let str = ' ';
    for (let i = 20; i <= 30; i = i + 0.5) {
        str += i + ' ';
    }
    console.log(str.trim());
}
taskSolvingOne();

function taskSolvingTwo() {
    console.log('2)Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
    let doll = 27;
    let result = [];
    for (let i = 10; i <= 100; i += 10) {
        result.push(i * doll);
    }
    console.log(result.toString());
}
taskSolvingTwo();

function taskSolvingThree() {
    console.log('3)Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
    let result = [];
    let number = 80;
    for (let i = 1; i <= 100; i++) {
        if (i * i < number) {
            result.push(i * i);
        }
    }
    console.log(result.toString());
}
taskSolvingThree();


function taskSolvingFore() {
    console.log('4)Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).\n');
    let number = 17;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log("Не просте число");
            return;
        }
    }
    console.log("Просте число");
}
taskSolvingFore();

function taskSolvingFive() {
    console.log('5)Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');
    let number = 13;
    for (let i = 1; i <= number; i++) {
        if (number % 3 === 0) {
            number /= 3;
        }
    }
    console.log((number === 1) ? "Число можливо знайти" : "Число  не можливо знайти");
}
taskSolvingFive();
