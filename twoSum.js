var twoSum = function(nums, target) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
 
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                array.push(i);
                array.push(j);
            }
        }
        
    }
    return array;
    


};

console.log(twoSum([2,1,3,8],5));