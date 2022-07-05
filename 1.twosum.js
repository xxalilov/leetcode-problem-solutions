/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that   * they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element * twice.
 * You can return the answer in any order.
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 */

/**
 * My Solution
 Runtime: 133 ms, faster than 41.33% of JavaScript online submissions for Two Sum.
 Memory Usage: 42.6 MB, less than 49.50% of JavaScript online submissions for Two Sum.
 * 
 */
function twoSum(nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return (result = [i, j]);
      }
    }
  }
  return result;
}

console.log(twoSum([3, 2, 3], 6));
