var romanToInt = function(s) {
  const specialMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let ans = 0;
  for (let i = 0, n = s.length ; i < n; i++) {
      const value = specialMap[s[i]];
      if (i < n - 1 && value < specialMap[s[i + 1]]) {
          ans -= value;
      } else {
          ans += value;
      }
  }
  return ans;
};
console.log(romanToInt('IV'));