/* 
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length, len2 = nums2.length
  const sortMergeArrs = [...nums1, ...nums2].sort((a, b) => a - b)
  if ((len1 + len2) % 2) {
      const middle = parseInt((len1+len2)/2) + 1;
      return sortMergeArrs[middle-1];
  }
  const middle = parseInt((len1+len2)/2);
  return parseFloat((sortMergeArrs[middle-1] + sortMergeArrs[middle]) / 2);
};