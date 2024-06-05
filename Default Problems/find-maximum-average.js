var findMaxAverage = function (nums, k) {
    let maxAverage = 0;
    let curr = 0;
    let right = 0;

    // loop through array using window length
    // calc the sum 
    // divide by 4
    // set result to curr max average

    // set maxAverage to curr

    // loop through array using array length as condition for execution start on k
    // calculate new window's max average and set it to curr
    // set maxAverage = either itself or new curr - whichever has the highest value

    for (let i = 0; i < k; i++) {
        curr += nums[i] / k;
    }

    maxAverage = curr;

    // sliding window code 
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] / k;
        curr -= nums[i - k] / k;
        maxAverage = Math.max(maxAverage, curr);
    }


    // my own concept - it takes to long to compete this algorithm
    // for (let i = 0; i < nums.length - k; i++) {
    //     curr = 0;

    //     while (right < k) {
    //         curr += nums[i + right] / k;
    //         right++;
    //     }
    //     right = 0;
    //     maxAverage = Math.max(maxAverage, curr);
    // }

    return maxAverage;
};

const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);

console.log(result);