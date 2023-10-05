/*
    Given integer x, return if x is a palindrome or not. A palindrome is an integer that reads the same backwards and forwards.
*/

var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('') ? true : false
};

const test1 = isPalindrome(10)
const test2 = isPalindrome(-33)
const test3 = isPalindrome(101)

console.log(test1)
console.log(test2)
console.log(test3)