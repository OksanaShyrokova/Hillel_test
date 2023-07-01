
one_task();
function one_task() {
    console.log('\n1) Вивести на сторінку в один рядок через кому числа від 10 до 20.');
    let result = [];
    for (let i = 10; i <= 20; i++) {
        result.push(i);
    }
    console.log(result.toString());
}

two_task();
function two_task() {
    console.log('\n2)Вивести квадрати чисел від 10 до 20');
    let result = [];
    for (let i = 10; i <= 20; i++) {
        result.push(i * i);
    }
    console.log(result.toString())
}

three_task();
function three_task() {
    console.log('\n3)Вивести таблицю множення на 7');
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(i * 7);
    }
    console.log(result.toString());
}

fore_task()
function fore_task() {
    console.log('\n4)Знайти суму всіх цілих чисел від 1 до 15');
    let result = 0;
    for (let i = 1; i <= 16; i++) {
        result += i;
    }
    console.log(result);
}
five_task();
function five_task() {
    console.log('\n5)Знайти добуток усіх цілих чисел від 15 до 35');
    let result = 1n;
    for (let i = 15n; i <= 35n; i++) {
        result *= i;
    }
    console.log(result);
}
six_task()
function six_task() {
    console.log('\n6)Знайти середнє арифметичне всіх цілих чисел від 1 до 500');
    let number = 500;
    console.log((number + 1) / 2);
}
seven_task()
function seven_task() {
    console.log('\n7)Вивести суму лише парних чисел в діапазоні від 30 до 80');
    let result = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2) {
            result += i;
        }
    }
    console.log(result);
}
eight_task()
function eight_task() {
    console.log('\n8)Вивести всі числа в діапазоні від 100 до 200 кратні 3');
    let result = [];
    for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }
    console.log(result.toString());
}

nine_to_ten_task();

function nine_to_ten_task() {
    console.log('\n9)Дано натуральне число. Знайти та вивести на сторінку всі його дільники.\n' +
        '10)Визначити кількість його парних дільників.\n' +
        '11)Знайти суму його парних дільників.')
    let result = [];
    let number = 30;
    let sum = 0;
    let count = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (i % 2 === 0) {
            count++;
            sum +=i;
        }
    }
    console.log(`Всі дільники числа ${number} :  ${result.toString()}`);
    console.log(`Кількість парних дільників :  ${count}`);
    console.log(`Сумв парних дільників :  ${sum}`);
}
twelve_task()
function twelve_task() {
    console.log('\n12)Надрукувати повну таблицю множення від 1 до 10')
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(`${i} X ${j} = ${i * j}`)
        }
        console.log();

    }
}