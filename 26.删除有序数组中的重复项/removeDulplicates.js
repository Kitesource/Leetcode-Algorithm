/* 
给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length <= 1) return nums.length;

  let low = 0;
  for(let fast = 1; fast < nums.length; fast++){
      // 移动快指针，当快指针对应元素 不等于 慢指针对应元素时
      // low++ row指针对应元素替换为fast对应元素
      if(nums[low] !== nums[fast]){
          low++;
          nums[low] = nums[fast];
      }
  }
  return low + 1;
};