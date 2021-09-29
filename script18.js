/*задача 18 решена!*/
// дан массив чисел


/* нужно дополнить функцию isPrime, принимающую число на вход
и возвращающую true, если число простое, а иначе false */
const integersToCheck = [2, 3, 193, 79, 7, 29];
function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
        /* При каждой итерации цикла мы увеличиваем i
        на единицу и проверяем, стала ли она натуральным
        делителем элемента массива. */

        if (num % i === 0) {
            return false;
        }
    }

    return true;
};
integersToCheck.every(isPrime);
/* ниже используйте метод .every() и функцию isPrime,
чтобы проверить элементы маcсива */
console.log(integersToCheck);
