//1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log(maxOfTwoNumbers(7, 5));

//2
const maxOfThree = (x, y, z) => {
  let max = 0;
  if (x >= y && x >= z) {
    max = x;
  } else if (y >= x && y >= z) {
    max = y;
  } else if (z >= x && z >= y) {
    max = z;
  }
  return max;
};

console.log(maxOfThree(7, 5, 9));

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

console.log(isCharAVowel("a"));

console.log(isCharAVowel("b"));

//4
const sumArray = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(sumArray([1, 4, 6, 7, 8]));

//5
const multiplyArray = (nums) => {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

console.log(multiplyArray([1, 4, 6, 7, 8]));

//6
const numofArgs = (...args) => {
  return args.length;
};

console.log(numofArgs(4, 65, 6, 8, 8, 7, 5, 4, 4, 12));

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
//8
const longestStringInArray = (strs) => {
  let longest = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length) {
      longest = strs[i];
    }
  }

  return longest;
};

console.log(
  longestStringInArray([
    "string",
    "ts",
    "aaaaaaaaaaaaaaaaaaa",
    "long",
    "shortest",
  ])
);

//9
const stringsLongerThan = (strs, len) => {
  let longstrs = [];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > len) {
      longstrs.push(strs[i]);
    }
  }

  return longstrs;
};

console.log(
  stringsLongerThan(
    ["string", "ts", "aaaaaaaaaaaaaaaaaaa", "long", "shortest"],
    5
  )
);
