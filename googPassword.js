const goodPassword = function(password) {
    let shiftDown = '_';
    let shiftRight = '-';
    if (password.length > 4 &&
        (password.includes(shiftDown) || 
    password.includes(shiftRight)) ) {
        return 'Пароль надёжный';
    }
    return 'Пароль ненадёжный';

}
let password = 'Ad-';
console.log(goodPassword(password));