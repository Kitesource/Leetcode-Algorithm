
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

*/
var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const paris = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const stk = [];
    for (let ch of s) {
        if (paris.hasOwnProperty(ch)) {
            if (!stk.length || stk[stk.length - 1] !== paris[ch]) {
                return false;
            }
            stk.pop();
        }
        else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
console.log(isValid('([{}])'));