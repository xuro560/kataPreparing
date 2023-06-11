const lookForKey = function(box) {
    for (let key in box) {
        console.log(`box[key]: ${box[key]}, key: ${key}`);

        if (box[key] === 2) {
            return key;
        } else if (box[key] > 0 ) {
            return lookForKey(key);
        } else {
            continue;
        }
    }

};

const box = {
    first: 5,
    second: 3,
    third: {
        one: 1,
        two: 2
    }
};

console.log(lookForKey(box));
