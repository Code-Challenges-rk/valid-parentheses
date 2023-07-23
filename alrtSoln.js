function isValid(s) {
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
  
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
  console.log(isValid("()"));        // Output: true
  console.log(isValid("()[]{}"));    // Output: true
  console.log(isValid("(]"));        // Output: false
  