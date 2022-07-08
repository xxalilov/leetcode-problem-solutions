/**
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

 */

var isPalindrome = function (x) {
  let str = String(x).replace(/[^z0-9]/g, "");
  var len = str.length;
  if (x < 0) {
    return false;
  }

  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
