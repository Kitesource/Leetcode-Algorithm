
/* 
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

题解： https://leetcode.cn/problems/longest-valid-parentheses/solution/shou-hua-tu-jie-zhan-de-xiang-xi-si-lu-by-hyj8/
*/
const longestValidParentheses = (s) => {
  let maxLen = 0;
  const stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == '(') {       // 左括号的索引，入栈
      stack.push(i);
    } else {              // 遍历到右括号
      stack.pop();        // 栈顶的左括号被匹配，出栈
      if (stack.length) { // 栈未空
        const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
        maxLen = Math.max(maxLen, curMaxLen);          // 挑战最大值
      } else {            // 栈空了
        stack.push(i);    // 入栈充当参照
      }
    }
  }
  return maxLen;
};
