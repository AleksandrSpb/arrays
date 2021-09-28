/*задача 14 решена!*/
const movies = [
    'Титаник (1997)',
    'Чёрная Пантера (2018)',
    'Остров Собак (2018)',
    'Омерзительная Восьмерка (2015)'
];



const moviesFiltered =  movies.filter(i => /.+\(.*2018.*\)/.test(i))
console.log(moviesFiltered);
