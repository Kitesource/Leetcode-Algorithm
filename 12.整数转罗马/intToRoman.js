/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  const specialMap = {
    'M': 1000,
    'CM': 900,
    "D": 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }
  const roman = []
  for (let [Roman, int] of Object.entries(specialMap)) {
    // console.log(Roman, int);
    while(num >= int ) {
      num -= int
      roman.push(Roman)
    }
    if (num === 0) {
      break;
    }
  }

  return roman.join('')
};

console.log(intToRoman(10))