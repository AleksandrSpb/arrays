/*задача 13*/
const characters = [
    'Люк Скайуокер',
    'Оби Ван',
    'Чубакка',
    'Энакин Скайуокер',
    'Хан Соло',
    'Палпатин'
];

const newCharacters = characters.map(function (character) {
    if (character === 'Энакин Скайуокер') {
        return 'Дарт Вейдер';
    }
    return character;
});

console.log(newCharacters);
