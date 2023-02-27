var lengthOfLongestSubstring = function(str) {
  const arr = [] // 用来存最长子串
  let max = 0 //最长子串长度
  for(let i = 0, len = str.length; i < len; i++) {
    const index = arr.indexOf(str.charAt(i))
    if (index > -1) {
      // 字符 在arr中存在， 在arr中删除该字符及其之前的字符
      arr.splice(0, index + 1)
    }
    // 不存在则push进数组
    arr.push(str.charAt(i))
    max = Math.max(arr.length, max)
  }
  return max
}