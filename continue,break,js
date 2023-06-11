//разбор отличия continue от  break и выход из цикла while
//колода
let cards = ['2','Король','Туз','Дама','5','6','Король'];
//карты в руке
let hand = [];

for (let card of cards) {
    if (card === 'Дама') {
        console.log(`Мы нашли Даму на позиции: ${cards.indexOf(card)}`);
        break; //код дальше не работает
    }
    if (card !== 'Король' && card !== 'Туз') continue;
    hand.push(card);
    console.log(`Карта ${card} добавлена в руку`);
}
console.log(`Карты в руке: ${hand}`);

//цикл for
for (let i = 0; i < 11; i += 2) {
    console.log(i);
}

//цикл while
let j = 0;
while(true) { //бесконечный цикл, пока не выполнится условие break
    if (j > 10) break;
    console.log(j);
    j += 2;
}

for (let k = 0; k < 5; ++k) {
    console.log(k);
}