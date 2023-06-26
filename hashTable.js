//хэшируем (преобразуем символы в коды и складываем их суммы)

const hash = string => {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i);
    }
    return result;
};
let string = 'A';

console.log(hash(string));