



var isValid = function(s) {
    let obj = {
        '(': ')',
        '[' : ']',
        '{': '}'
    };
    let array = [];
    for (let str of s) {
            if (str in obj) {
                array.push(str);
            }
            else if (str === obj[array[array.length-1]]) {
                array.pop();

            }
            else {return false;} 
        }
        
    
    return array.length === 0;
};

let s = '()';

console.log(isValid(s));

