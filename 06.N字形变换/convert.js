/* 
如果 down 为 true，则 +=1
loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中

如果 down 为 false，则表示向右，则 −=1
loc−=1，字符串数组下标向前移动，将当前字符加入当前字符串中
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if(numRows == 1)
      return s;

  const len = Math.min(s.length, numRows);
  const rows = [];
  for(let i = 0; i< len; i++) rows[i] = "";

  let loc = 0;// loc 变量表示当前字符串数组的下标
  let down = false; // down 变量表示是否向下

  for(const c of s) {
      rows[loc] += c;
      if(loc == 0 || loc == numRows - 1) down = !down;
      loc += down ? 1 : -1;
  }
  let str = ''
  for(const row of rows) {
    str += row;
  }
  return str;
}

console.log(convert('LEETCODE', 3)); // LCETOEED