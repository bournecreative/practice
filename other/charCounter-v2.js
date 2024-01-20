/* identify the number of characters and the lengths per character group
Example
aaa => a3
aaabbaa => a3b2a2
aabbccccc => a2b2c5
*/

/*

*/

function charCounter(str) {
  const arr = str.split("");
  let count = 0;
  const hash = {};
  for (let i = 0; i < str.trim().length; i++) {
    if (str[i - 1] && str[i] === str[i - 1]) {
      count += 1;
      if (i === str.length - 1) {
        hash[str[i] + count] = count;
      }
    } else if (str[i - 1] && str[i] !== str[i - 1]) {
      hash[str[i - 1] + count] = count;
      count = 0;
      count += 1;
      if (i === str.length - 1) {
        hash[str[i] + count] = count;
      }
    } else {
      count = 1;
    }
  }

  const final = Object.keys(hash).join("");
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
