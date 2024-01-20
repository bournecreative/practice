/* identify the number of characters and the lengths per character group
Example
aaa => a3
aaabbaa => a3b2a2
aabbccccc => a2b2c5
*/

/*
This is a simpler version of my initial solution using arrays. I still have this awful conditional logic determining when to count and terminate the counting based on if the current character matches the previous character.

The improvement over my initial solution is that I am not using 2 arrays to maintain the end result and the current count of characters that match.
*/

function charCounter(str) {
  const arr = str.split("");
  let count = 0;
  let final = "";

  for (let i = 0; i < str.trim().length; i++) {
    if (str[i] === str[i - 1]) {
      count += 1;
      if (i === str.length - 1) {
        final = final + str[i] + count;
        count = 0;
      }
    } else if (str[i - 1] && str[i] !== str[i - 1]) {
      final = final + str[i - 1] + count;
      count = 0;
      count += 1;
    } else {
      count = 1;
    }
  }
  return final;
}

const test1 = charCounter("aaa");
const test2 = charCounter("aaabbaa");
const test3 = charCounter("aabbcccccaaaddda");
const test4 = charCounter("");

console.log("test 1", test1);
console.log("test 2", test2);
console.log("test 3", test3);
console.log("test 4", test4);
