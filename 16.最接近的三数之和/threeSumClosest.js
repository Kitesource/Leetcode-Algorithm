
/* 
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。
*/

/* 
数组排序 升序
循环每一项， 另外用两个指针指向数组其他元素， 三数相加的和与 目标值相减取绝对值
三数之和 比 目标值小 left++
三数之和 比 目标值大 right--
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length
  let res = Math.pow(2, 53)
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
      let left = i + 1
      let right = len - 1

      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right]

          if (Math.abs(sum - target) < Math.abs(res - target)) {
              res = sum
          }

          if (sum === target) {
            return res
          }

          if (sum < target) {
              left++
          } else {
              right--
          }
      }
  }
  return res
};