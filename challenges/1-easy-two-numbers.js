/*
Given an array of integers and an integer target, return the indices of the two numbers that when added equal the target integer.
Input: nums = [15,2,11,15,1], target = 13
Output: [1,2]
*/

/*
Brute force method. This is considered brute force because we have a loop inside of another loop, which means we will have to 
run through the array once for every single number within the array (Quadratic runtime). 
This algorithm has a big o notation of n². As the array grows, so too does the time to complete.
*/

function bruteTwoNums(nums, target) {
    for (let i =0; i < nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

const bTwoNums = bruteTwoNums([15, 2, 11, 15, 1], 13)
console.log(bTwoNums)