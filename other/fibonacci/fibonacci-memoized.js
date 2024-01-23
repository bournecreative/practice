let memo = {};
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    let f = fib(n - 1) + fib(n - 2);
    memo[n] = f;
    return f;
  }
}
/*
memoize (remember) & re-use solutions to subproblems that help
solve the problem. This improved our run time from T(n) = T(n-1) + T(n-2) + O(1)
to O(n).
*/
const test = fib(3);
console.log(test);

const test1 = fib(0);
console.log(test1);
