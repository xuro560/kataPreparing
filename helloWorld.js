var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World';
    }
};

let a = 10, b = 5;

a,b = b,a;
console.log(a,b = b,a);