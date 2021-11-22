const str = "hey bai String!";

function ReverseString(str) {
  //what is the base case which I need to return ?
  //what is the smallest amount of work I can do in each iteration?
  if (str === "") {
    return "";
  }
  //   reversed = reversed.concat(str.slice(0, -1))
  return ReverseString(str.substring(1)) + str.charAt(0);
  // ReverseString(str.substring(1)) : shrinks the problem space
  // str.charAt(0): smallest unit of work to contribute
}

// console.log(ReverseString(str))
// console.log(str.slice(0, -1))

function ReverseString1(str) {
  let newStr = "";
  while (str.length > 0) {
    newStr = newStr + str.charAt(str.length - 1);
    //     str = str.slice(0, str.length - 1)
    str = str.substring(0, str.length - 1);
  }
  return newStr;
}

console.log(ReverseString1(str));
