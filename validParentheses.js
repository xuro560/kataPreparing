var isValid = function(s) {
    let array = s.split("");
    let leftBracket = 0;

    const bothBrackets = function(firstBracket, secondBracket) {
        if (firstBracket === secondBracket) {
            return true;
        } else {
            return false;
        }
    };

    const allLeftBrackets = function(array, leftBracket) {
        return array.filter(item => item === leftBracket).length;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(' || array[i] === ')') {
            leftBracket = allLeftBrackets(array, '(');
            rightBracket = allLeftBrackets(array, ')');
            return bothBrackets(leftBracket, rightBracket);
        } else  if (array[i] === '[' || array[i] === ']') {
            leftBracket = allLeftBrackets(array, '[');
            rightBracket = allLeftBrackets(array, ']');
            return bothBrackets(leftBracket, rightBracket);
        } else if (array[i] === '{' || array[i] === '}') {
            leftBracket = allLeftBrackets(array, '{');
            rightBracket = allLeftBrackets(array, '}');
            return bothBrackets(leftBracket, rightBracket);
        } else {
            return false;
        }
        


    }
};

let s = '({})';

console.log(isValid(s));