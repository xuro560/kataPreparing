const index =  [0,1,2,3,4,5,6,7,8, 9];
const binary = [1,2,3,4,5,6,7,8,9,10];

const binarySearch = function(binary, number) {


    let start = 0;
    let end = binary.length-1;
    for (let i = start; i <= end; i++) {

        let avg = Math.floor((start + end) / 2);
        let guess = binary[i];

        if (number === guess) { 
            return guess;
        }
        else if (number < guess) {
            end = avg - 1;
        } else if (number > guess) {
            start = avg + 1;
        }
            
    }
    return null;
            
};

console.log(binarySearch(binary, 1));