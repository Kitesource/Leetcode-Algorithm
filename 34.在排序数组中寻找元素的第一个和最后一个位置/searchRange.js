/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] === target) {
      let tempLeft = (tempRight = mid);
      // 已找到target，向前后寻找起点和终点
      while (nums[tempLeft - 1] === target) tempLeft--;
      while (nums[tempRight + 1] === target) tempRight++;

      return [tempLeft, tempRight];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return [-1, -1];
};
