/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums.length) return 0;

  for(let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1)
          // [0,1,2,2,3,0,4,2] 2
          // 移除一个元素时，i需要自减
          i--;
      }
  }
  return nums.length;
};