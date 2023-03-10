/**
 * @param {number} n
 * @return {boolean}
 */ 
 var isPalindrome = function(n) {
  if(Number.isNaN(n)) return false 
  if(n < 0) return false

  const reverseArr = String(n).split('').reverse().join('')
  return String(n) === reverseArr
};

console.log(isPalindrome(10))