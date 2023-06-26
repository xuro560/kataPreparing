const s = "([])";

var isValid = function (s) {
    let obj = {
        '(': ')', //'(' is a KEY (for let key on obj)
        '[' : ']',
        '{': '}'
    };
    
/*     for (let str of s) { //поиск значения в строке
        if( str === ')' && s.includes('(')) {
            s = s.replace('(','');
            s = s.replace(')','');
        }
        
    } */
    let result = true;

    for (let i = 0; i < s.length; ) {
            if (s[i] === '(' && s[i+1] === ')') {
                s = s.replace(s.substring(i, i+2), '');
            } else if (s[i] === '[' && s[i+1] === ']') {
                s = s.replace(s.substring(i, i+2), '');
            } else if (s[i] === '{' && s[i+1] === '}') {
                s = s.replace(s.substring(i, i+2), '');
            }
        }
 
    return s;


};

console.log(isValid(s));