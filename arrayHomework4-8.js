let array = [];

const arrayGenerator = function(n,m,count) {
    let number = 0;
    let min = n < m ? n : m;
    let max = n > m ? n : m;

    while (number < count) {
        let randomNumber = Math.floor(Math.random() * (max-min)+ min);

        console.log(randomNumber);
        number+= 1;
    }
}

console.log(arrayGenerator(3,10,5))