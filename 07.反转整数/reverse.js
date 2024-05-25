/* 
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

// 123 => 321
// 120 => 21

*/
// 弹出 x 的末尾数字 digit
// digit = x % 10
// x /= 10

// 将数字 digit 推入 rev 末尾
// rev = rev * 10 + digit

var reverse = function(x) {
  let rev = 0;
  while (x !== 0) {
      const digit = x % 10;
      x = ~~(x / 10); // 两次按位取反，保持原值， 强制输出int类型
      rev = rev * 10 + digit;
      if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
      }
  }
  return rev;
};

// ~~"123" // 123
// ~~"123.4" // 123
// ~~123 // 123
// ~~123.4 // 123 

// ~~true // 1
// ~~false // 0
// ~~null // 0
// ~~undefined // 0