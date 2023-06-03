let x1 = 10, x2 = 2, y1 = -3, y2 = 3;

let cathetusX = Math.abs(x1 - x2);
let cathetusY = Math.abs(y1 - y2);

const pifagor = function(cathetusX, cathetusY) {
    let result = Math.sqrt(
        Math.pow(cathetusX, 2) + Math.pow(cathetusY, 2)
    );
    return result
};
console.log(pifagor(cathetusX, cathetusY));