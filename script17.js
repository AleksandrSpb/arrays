/*задача 17 решена!*/
const characters = ['Гав-гав', 'Незнайка', 'Бармaлей', 'Леопольд', 'Хоттабыч'];

const incorrectWord = characters.find(function (item) {
    /* напишите ваш код здесь */
    return item.includes('a');
});

console.log(incorrectWord);
