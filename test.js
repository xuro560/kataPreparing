let str = 'Привет, мир!';

str = str.split('');
console.log(str);

str = str.reverse();
console.log(str);
str = str.join('');
console.log(str);



const hash = string => {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i);
    }
    return result;
};
let string = 'A';

console.log(hash(string));