function fib(n) {
  let f;
  if (n <= 0) return 0;
  if (n <= 2) {
    f = 1;
  } else {
    f = fib(n - 1) + fib(n - 2);
  }
  return f;
}

const test = fib(3);
console.log(test);
