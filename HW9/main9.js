function someMassifOne() {
    console.log('1)Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.')
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let result = 0;
    let positive = array.filter(element => (element > 0));
    for(let i = 0; i < array.length;i++) {
        if(array[i] > 0) {
            result= result + array[i];
        }
    }
    console.log(result,positive.length);
}
someMassifOne();

function someMassifTwo() {
    console.log('2)Знайти мінімальний елемент масиву та його порядковий номер');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let min = Math.min.apply(null, array);
    let posit = array.indexOf(min) + 1;
    console.log(min, posit);
}

someMassifTwo();

function someMassifThree() {
    console.log('3)Знайти максимальний елемент масиву та його порядковий номер');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let max = Math.max.apply(null, array);
    let posit = array.indexOf(max) + 1;
    console.log(max, posit);
}

someMassifThree();

function someMassifFore() {
    console.log('4)Визначити кількість негативних елементів.');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let negative = array.filter(element => (element < 0));
    console.log(negative.length);
}

someMassifFore();

function someMassifFive() {
    console.log('5)Знайти кількість непарних позитивних елементів.');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let countResult = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && ((array[i] % 2) !== 0)) {
            countResult++;
        }
    }

    console.log(countResult);
}
someMassifFive();
function someMassifSix() {
    console.log('6)Знайти кількість парних позитивних елементів.');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let countResult = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && ((array[i] % 2) === 0)) {
            countResult++;
        }
    }
    console.log(countResult);
}
someMassifSix();

function someMassifSeven() {
    console.log('7)Знайти суму парних позитивних елементів');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let result = 0;
    for (let i=0;i < array.length;i++) {
        if(array[i] > 0 && array[i] % 2 === 0 ) {
            result +=array[i];
        }
    }
    console.log(result);
}
someMassifSeven();

function someMassifEight(){
    console.log('8)Знайти суму непарних позитивних елементів');

    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let result = 0;
    for (let i = 0;i < array.length;i++) {
        if(array[i] > 0 && array[i] % 2 !== 0 ) {
            result +=array[i];
        }
    }
    console.log(result);
}
someMassifEight();

function someMassifNine(){
    console.log('9)Знайти добуток позитивних елементів');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let result = 1;
    for(let i = 0; i < array.length;i++) {
        if(array[i] > 0) {
            result= result * array[i];
        }
    }
    console.log(result);
}
someMassifNine();

function someMassifTen(){
    console.log('10)Знайти найбільший серед елементів масиву, ост альні обнулити');
    let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let maxValue = array[0];
    let maxIndex = 0;
    for (let i = 1;i <array.length;i++){
        if (array[i] > maxValue){
            maxValue = array[i];
            array[maxIndex] = 0;
            maxIndex = i;
        }else {
           array [i] = 0;
        }
    }
    console.log(array);
}
someMassifTen();



