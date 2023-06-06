var average = function(salary) {
    let minSalary = 0;
    let maxSalary = 0;
    let newSalary = [];
    let avgSalary = Math.floor(salary.length / 2);
    let temp = 0;
    for(let i = 0; i < salary.length; i++) {
         for (let j = i+1; j <salary.length; j++) {
            minSalary = salary[i];

            if (minSalary < salary[j] && minSalary !== newSalary[0]) {

                newSalary.unshift(minSalary);
                
            } else {
                continue;
            }
            console.log(`iteration ${i}, minSalary: ${minSalary}, secSalary: ${salary[j]}, array: ${newSalary}`);

         }

    }
    return newSalary;
};

const salary = [4000,1500,3000,1000,2000,5000];
console.log(average(salary));