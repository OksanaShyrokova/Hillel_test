let age = prompt('Your year of brith?');
if (age != null) {
    alert(`Your age ${2023- age}`)
}else {
    alert('Sorry you didn\'t want to enter your year of birth')
}
let city = prompt('What city do you live in?');
if(city != null) {
    switch (city) {
        case 'Kyiv':
            alert( 'You live in the capital Ukraine');
            break;
        case 'london':
            alert( 'You live in the capital England');
            break;
        case 'Washington':
            alert( 'You live in the capital the United States');
            break;
        default:
            alert(`You live in ${city}`);
    }
}else {
    alert('Sorry you didn\'t want to enter your city')
}
let sport = prompt('Your favorite sport?');
if(sport != null){
    switch (sport){
        case 'Chess':
            alert('Cool do you want to be like Andrey Volokiten?');
            break;
        case  'Swimming':
            alert('Cool do you want to be like Yana Klochkova?');
            break;
        case 'Artistic gymnastics ':
            alert('Cool do you want to be like  Lilia Podkopayeva?');
            break;
        default:
            alert(`Your favorite ${sport}`);
    }
}else {
    alert('Sorry you didn\'t want to enter your view sport');
}