
/**
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 当前左右括号都有大于 0 个可以使用的时候，才产生分支；
 * 产生左分支的时候，只看当前是否还有左括号可以使用；
 * 产生右分支的时候，还受到左分支的限制，右边剩余可以使用的括号数量一定得在严格大于左边剩余的数量的时候，才可以产生分支；
 * 在左边和右边剩余的括号数都等于 0 0 的时候结算。
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n <= 0) {
      return ''
  }
  const res = []
  const dfs = (leftRemain, rightRemain, str) => {
      if (str.length === 2 * n) {
          res.push(str)
          return
      }
      // 左括号( 剩余数量大于0, 拼接在str，并且数量-1 继续递归
      if (leftRemain > 0) {
          dfs(leftRemain - 1, rightRemain, str + '(')
      }
      // 若右括号)剩余数量 大于 左括号数量， 剩余有括号数量拼接str 并 -1，继续递归
      if (rightRemain > leftRemain) {
          dfs(leftRemain, rightRemain - 1, str + ')')
      }
  }
  dfs(n, n, '')
  return res
};