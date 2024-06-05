// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's

const longestOnes = function (nums, k) {
    let left = right = 0;
    let zeroCount = 0;
    let result = 0;

    while (right < nums.length) {
        if (nums[right] === 1 && zeroCount <= 2) {
            right++;
        } else if (nums[right] === 0) {
            right++;
            zeroCount++;
        }

        if (zeroCount >= k) {
            result = right - left + 1;
            left++;
            zeroCount = 0;
        }
    }

    return result;

};

const result1 = longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2); // 6
const result2 = longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3); // 10

console.log(result1);
console.log(result2);

