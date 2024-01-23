function robber(arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return [arr[0]];
  }
  if (arr.length === 2) {
    return Math.max(arr[0], arr[1]);
  }
  for (let i = 2; i < arr.length; i++) {
    arr[i] = Math.max(arr[i - 2] + arr[i], (arr[i - 3] || 0) + arr[i]);
  }
  // this updated arr reflects the totals that can be achieved
  console.log(arr);
  return Math.max(arr[arr.length - 1], arr[arr.length - 2]);
}

const test1 = robber([1, 2, 3, 1]);
const test2 = robber([1, 2, 3, 1, 5]);
console.log(test1);
console.log(test2);
