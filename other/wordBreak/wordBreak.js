/* Brute force attempt. Should be solved using dynamic programming approach */

function wordBreak(s, wordDict) {
  const check = [];
  let char = "";
  const wordDictSorted = wordDict.sort((a, b) => b.length - a.length);
  console.log(wordDictSorted);
  for (let i = 0; i < s.length; i++) {
    char += s[i];
    for (let j = 0; j < wordDictSorted.length; j++) {
      if (char === wordDict[j]) {
        console.log(char);
        check.push(char);
        char = "";
      }
    }
  }
  console.log("final", check.join("") === s);
  return check.join("") === s;
}
