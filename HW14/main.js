
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(number, characters) {

    let result = '';
    for (let i = 0; i < number; i++) {
        result += findChar(number, characters);
    }
    return result;
}

function findChar(number, characters) {
    return characters.charAt(Math.floor(Math.random() * number));
}

const key = generateKey(16, characters);
console.log(key);
