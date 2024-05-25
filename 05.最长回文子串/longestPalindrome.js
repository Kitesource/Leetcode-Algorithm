/* 
一种是回文子串长度为奇数（如aba，中心是b）
另一种回文子串长度为偶数（如abba，中心是b，b）

循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i)
    // 回文子串长度是偶数
    helper(i, i + 1) 
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻 
    // 如果此轮询得到回文串长度大于之前记录， 记录此轮循边界
    const str = s.slice(m+1, n)
    if (str.length > res.length) res = str
  }
  return res
}
