// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

/* 
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
// dfs Depth First Search
var letterCombinations = function(digits) {
  if(!digits.length) return []
  const letterMap = {
      '1': '',
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
  }
  const res = []

  const dfs = (curStr, i) =>  { // curStr是当前字符串，i是扫描的指针

      if (i > digits.length - 1) { // 指针越界(指针超出digits的长度范围)，递归的出口
          res.push(curStr)
          return
      }

      const letters = letterMap[digits[i]]
      for (let word of letters) {
          dfs(curStr + word, i + 1)
      }
  }
  dfs('', 0)
  return res
};

// bfs Breadth First Search
const letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  const queue = [];
  queue.push('');
  for (let i = 0; i < digits.length; i++) { // bfs的层数，即digits的长度
    const levelSize = queue.length;         // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) {   // 逐个让当前层的节点出列
      const curStr = queue.shift();         // 出列

      const letters = map[digits[i]];       

      for (const l of letters) {
        queue.push(curStr + l); // 生成新的字母串入列
      }
    }
  }
  return queue; // 队列中全是最后一层生成的字母串
};