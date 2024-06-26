/* 
给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。
 s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 
"acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
返回所有串联字串在 s 中的开始索引。你可以以 任意顺序 返回答案。
*/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s.length || !words.length) return []

  let wordLen = words[0].length;
  let outArray = [];
  let sub = []
  words.sort();

  const str1 = words.toString()
  for(let i = 0; i < s.length; i++){
      for(let j=0; j < words.length; j++){
          sub.push(s.substr(i + wordLen * j,wordLen))   
      }
      sub.sort()
      if(sub.toString() === str1){
          outArray.push(i)
      }
      sub = []
  }
  return outArray
};