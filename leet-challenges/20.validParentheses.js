function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
        const lastItem = stack.pop()
        if (lastItem )
    }
  }
  return stack.length === 0;
}

const s1 = "()[]{}";

const s2 = "()";

const s3 = "(]";

const output = isValid(s1);
