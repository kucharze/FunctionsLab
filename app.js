//2
const maxOfThree = (x, y, z) => {
  let max = 0;
  if (x > y && x > z) {
    max = x;
  } else if (y > x && y > z) {
    max = y;
  } else if (z > x && z > y) {
    max = z;
  }
  return max;
};

//3
const isCharAVowel = (char) => {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "e" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
};

//4
const sumArray = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

//5
const multiplyArray = (nums) => {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

//7
const reverseString = (str) => {
  let newString = [];
  let list = str.split("");

  for (let i = list.length - 1; i >= 0; i--) {
    newString.push(list[i]);
  }

  return newString.join("");
};

console.log(reverseString("string"));
