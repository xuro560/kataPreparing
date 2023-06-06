let fibo = [1,1];

const fibonacci = function(fibo) {
    let count = 10;
    for (let i = 0; i < 10; i++) {
        fibo.push(
fibo[i+1] + fibo[i]);
    }

    return fibo;
};

 console.log(fibonacci(fibo));

 const fibonacciCount = function(fibo) {
    let start = 0;
    let end = 10;
    let result = 0;
    while (end !=1) {
        start +=1;
        fibo.push(fibonacciCount(start));
        
        end -= 1;
    }
    return fibo;

 };

 console.log(fibonacciCount(fibo));