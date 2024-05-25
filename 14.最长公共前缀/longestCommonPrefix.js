
/* 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
*/

// 逐位比较，比较全部通过时res增加当前字符，不通过时直接返回res。
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let res = '';
  if (!strs.length) return res;
  for (let j=0; j<strs[0].length; j++) {//第j位
      for (let i=1; i<strs.length; i++) {//第i个
          if (strs[i][j] !== strs[0][j]) return res
      }
      res += strs[0][j];
  }
  return res;
};

// 递归
var longestCommonPrefix2 = function (strs,res = '') {
  if (!strs.length) return res;
  if (strs.length == 1) return strs[0];
  for (var i = 1; i < strs.length; i++) {
      if (!strs[i][0]) return res
      if (strs[i][0] != strs[0][0]) return res
      strs[i] = strs[i].slice(1,strs[i].length);
  }
  res += strs[0][0];
  strs[0] = strs[0].slice(1,strs[0].length);
  return longestCommonPrefix2(strs, res);
};