let fruit = 'Яблоко';

const findFruit = function(fruit) {
    switch (fruit) {
        case 'Яблоко':
            return 'Яблоко';
            break;
        case 'Арбуз': //'Арбуз' || 'Клубника'
        case 'Клубника':
            return 'Это ягода, а не фрукт';
            break;
        default:
            return 'Нет такого фрукта';
            break;
        
    }
};
console.log(findFruit(fruit));