
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *///  [1,3,5,6] 7
var searchInsert = function(nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (target <= nums[mid]) {
          ans = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return ans;
};