let resultSport = '';

let resultCity = '';
let resultAge = '';

let age = prompt('Твій рік народження?');
if (age != null && Number.isInteger(age)) {
    resultAge = `Твій вік ${2023 - age}`;
}
else if (age == null) {
    alert('Шкода, що ти не захотіл ввести свій рік народження');
}

let city = prompt('В якому місті ти живеш?');
if (city != null) {
    switch (city) {
        case 'Київ':
            resultCity = 'Ти живеш у столиці України';
            break;
        case 'Лондон':
            resultCity = 'Ти живеш у столиці Англії';
            break;
        case 'Вашингтон':
            resultCity = 'Ти живеш у столиці Америки';
            break;
        default:
            resultCity = `Ти живеш у місті ${city}`;
    }
} else if (city == null) {
    alert('Шкода, що ти не захотів ввести своє місто');
}
let sport = prompt('Твій улюблений вид спорту?');
if (sport != null) {
    switch (sport) {
        case 'шахи':
            resultSport = 'Круто! Хочеш стати як Андрей Волокитин?';
            break;
        case  'плавание ':
            resultSport = 'Круто! Хочеш стати як Яна Клочкова?';
            break;
        case 'гімнастика':
            resultSport = 'Круто! Хочеш стати як Лилия Подкопаєва?';
            break;
        default:
            resultSport = '';

    }
} else if (sport == null) {
    alert('Шкода, що ти не захотів ввести свій улюблений вид спорту!');
}

alert(resultAge + '\n' + resultCity + '\n' + resultSport + '\n');

