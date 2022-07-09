/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Runtime: 67 ms, faster than 93.30% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 42.9 MB, less than 35.63% of JavaScript online submissions for Longest Common Prefix.
 */

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix([""]));
