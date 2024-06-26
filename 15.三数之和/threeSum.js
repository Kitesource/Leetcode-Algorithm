

/* 
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
*/

/* 
首先对数组进行排序，排序后固定一个数 
nums[i]，再使用左右指针指向 
nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 
sum 判断是否满足为 0，满足则添加进结果集
如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
如果 nums[i] == nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
当sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R−−
时间复杂度：O(n^2)，n 为数组长度
1*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(!nums || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环

      if(nums[i] == nums[i-1]) continue; // 去重

      let L = i+1;
      let R = len-1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
              L++;
              R--;
          }
          else if (sum < 0) L++;
          else if (sum > 0) R--;
      }
  }        
  return ans;
};
