/* 
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。
*/

var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
      //i，j较小的那个先向内移动 如果高的指针先移动，那肯定不如当前的面积大
      const minHeight = height[i] < height[j] ? height[i++] : height[j--];
      const area = (j - i + 1) * minHeight;//计算面积
      console.log(area)
      max = Math.max(max, area);
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));