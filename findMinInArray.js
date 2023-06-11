const findMinInArray = function (array) {

    let min = 0;
    let number = 0;
    for (let i = 0; i < array.length; i++) {
         number = array[i];
        if (number < min) {
            min = number;
        } else {
            continue;
        }
    }
    return array.indexOf(min);

};

array = [-50,1,5,8,-1,9,2,-49];

console.log(findMinInArray(array));