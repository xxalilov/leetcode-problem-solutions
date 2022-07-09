/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()[]{}"
Output: true

Runtime: 68 ms, faster than 87.60% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 43.2 MB, less than 14.47% of JavaScript online submissions for Valid Parentheses.
 */

var isValid = function (s) {
  const stack = [];
  const str = s.trim();

  if (Math.round(str.length % 2) === 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (["(", "[", "{"].includes(str[i])) {
      stack.push(str[i]);
    } else {
      switch (str[i]) {
        case ")":
          if (stack.pop() !== "(") {
            return false;
          }
          break;
        case "]":
          if (stack.pop() !== "[") {
            return false;
          }
          break;
        case "}":
          if (stack.pop() !== "{") {
            return false;
          }
          break;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(()){{}}[[]]"));
