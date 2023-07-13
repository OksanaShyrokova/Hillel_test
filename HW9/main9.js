let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positSum = 0;
let positCount  = 0;
let minEl = 10000,
    minIndex;
let maxEl = -15000,
    maxIndex;
let negativCount = 0;
let resultUnparied = 0;
let resultParied = 0;
let sumParied =0;
let sumUnparied =0;
let factorRes = 1;


for(let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positSum += array[i];
        positCount++;
    }
    if (array[i] < minEl) {
        minEl = array[i];
        minIndex = i;
    }
    if(array[i] > maxEl) {
        maxEl = array[i];
        maxIndex = i;
    }
    if(array[i] < 0) {
        negativCount++;
    }
    if (array[i] >= 0 && ((array[i] % 2) !== 0)) {
        resultUnparied++;
    }
    if (array[i] >= 0 && ((array[i] % 2) === 0)) {
        resultParied++;
    }
    if(array[i] > 0 && array[i] % 2 === 0 ) {
        sumParied += array[i];
    }
    if (array[i] > 0 && array[i] % 2 !== 0) {
        sumUnparied += array[i];
    }
    if(array[i] > 0) {
        factorRes =factorRes * array[i];
    }

}
for (let i = 0; i< array.length;i++) {
    if(maxIndex!== i ) {
        array[i] = 0;
    }
}
console.log('Знайти суму та кількість позитивних елементів: ' + positSum  + ","+ positCount );
console.log('Знайти мінімальний елемент масиву та його порядковий номер: ' +minEl   + ","+ minIndex);
console.log('Знайти максимальний елемент масиву та його порядковий номер: ' +maxEl   + ","+ maxIndex);
console.log('Визначити кількість негативних елементів: ',negativCount);
console.log('Знайти кількість непарних позитивних елементів: ',resultUnparied);
console.log('Знайти кількість парних позитивних елементів: ',resultParied);
console.log('Знайти суму парних позитивних елементів.: ',sumParied);
console.log('Знайти суму непарних позитивних елементів.: ',sumUnparied);
console.log('Знайти добуток позитивних елементів.',factorRes);
console.log('Обнуленний массів: ',array );