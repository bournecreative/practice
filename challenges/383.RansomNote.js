/*
* This solution takes the characters from our selection words and creates a hash. For each letter we track the character count
Example 
If selection word = moon
hash['o'] = 2

We then loop through the target word's characters. If a character does not exist or its count has been reduced to zero we return false.
For each character found we decrement the hash count

Edge Case
Selection word is less then target word. This case will always return false as the selection does not contain enough words.
*/

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const hash = {};
  for (let i = 0; i < magazine.length; i++) {
    if (hash[magazine[i]]) {
      hash[magazine[i]] = hash[magazine[i]] + 1;
    } else {
      hash[magazine[i]] = 1;
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    const test = hash[ransomNote[j]] || 0;
    if (test === 0) return false;
    hash[ransomNote[j]] = hash[ransomNote[j]] - 1;
  }
  return true;
}
