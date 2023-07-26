function isValid(s) {
  const stack = [];
  const bracketMap = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (bracketMap.hasOwnProperty(char)) {
      if (!stack.length || stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else if (bracketMap[char] === undefined) {
      // If char is not a closing or opening bracket, the string is invalid
      return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false

function isCorrect(s) {
  let countMap = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
  };

  for (const char of s) {
    if (countMap.hasOwnProperty(char)) {
      if (char === ")" && countMap["("] > 0) {
        countMap["("]--;
      } else if (char === "}" && countMap["{"] > 0) {
        countMap["{"]--;
      } else if (char === "]" && countMap["["] > 0) {
        countMap["["]--;
      } else {
        countMap[char]++;
      }
    } else {
      // If char is not a valid bracket, the string is invalid
      return false;
    }
  }

  return Object.values(countMap).every((count) => count === 0);
}

// Test cases
console.log(isCorrect("()")); // Output: true
console.log(isCorrect("()[]{}")); // Output: true
console.log(isCorrect("(]")); // Output: false
