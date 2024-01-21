/*
You are climbing a staircase. Its takes n steps to reach the top
Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top.

this is another dynamic programming question. It is helpful to recognize these patterns by drawing out sub tree diagrams
*/

function stairCase(n) {
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

const test = stairCase(3);
const test1 = stairCase(5);

console.log(test);
console.log(test1);
