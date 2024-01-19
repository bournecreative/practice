function strStr(haystack, needle) {
  let pointer = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[i]) {
      i = i - pointer;
      pointer = 0;
    } else if (pointer === needle.length - 1) return i - pointer;
    else {
      pointer++;
    }
  }
  return -1;
}
