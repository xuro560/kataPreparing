var foo = ["one222", "two", "three"];

/* // без деструктуризации
var one   = foo[0];
var two   = foo[1];
var three = foo[2]; */

// с деструктуризацией
var [one, two, three] = foo;

console.log(one);

let [a,b,c] = [125,'sec','third'];
console.log(typeof(b));


//поменять два значения местами
var ab = 1;
var ba = 3;

[ab, ba] = [ba, ab];
console.log(ba);

console.log(3 !== '3');
