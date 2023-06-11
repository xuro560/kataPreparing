//отличия for...in от for...of

let rating = ['Катя','Вася','Маша','Петя','Лена'];

console.log('Рейтинг студентов');

//for...in вычисляет по ИНДЕКСУ массива
for (let i in rating) {
    console.log(`${parseInt(i)+1} место: ${rating[i]}`); //i - string
}

//for...of вычисляет по ЗНАЧЕНИЮ массива
for(let element of rating) {
    console.log(`${rating.indexOf(element)} Ученики: ${element}`); //element - значение массива

}

let tea = 20;

while (tea > 0) {
    tea -= 5;
    console.log(`В чашке осталось: ${tea} мл чая`);
}