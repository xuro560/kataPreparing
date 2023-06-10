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
