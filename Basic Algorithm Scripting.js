
//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
convertCtoF(30);


//Reverse a String
function reverseString(str) {
  let temp = str.split("");
  str = "";
  for (let i = temp.length - 1; i >= 0; i--){
    str += temp[i];
  }
  return str;
}
reverseString("hello");

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));


//Factorialize a Number
//1st_way
function factorialize(num) {
  if (num == 0) return 1;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num
}
console.log(factorialize(5));

//2nd_way
function factorialize(num) {
  if (num === 0){
    return 1;
  }
  else if (num === 1){
    return 1;
  }
  else{
    return factorialize(num - 1) * num;
  }
}
factorialize(5);


//Find the Longest Word in a String
function findLongestWordLength(str) {
  let arrStr = str.split(' ');
  let result = 0;
  for (let str of arrStr) {
    if (str.length > result) {
      result = str.length;
    }
  }
  return result;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//Return Largest Numbers in Arrays
//1st_way
function largestOfFour(arr) {
  let newArr = [];
  for (let num of arr) {
    let highest = num[0];

    for (let anotherNum of num)
      if (anotherNum > highest) {
        highest = anotherNum
      }
    newArr.push(highest);
  }
  return newArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//2nd_way
function findLongestWordLength(str) {
  var longestLength = 0;
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++){
    var word = words[i];
    var length = word.length;

    if (length > longestLength){
      longestLength = length;
    }
  }
  return longestLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target;
}
confirmEnding("Bastian", "n");


//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
console.log(repeatStringNumTimes("abc", 3));


//Truncate a String
function truncateString(str, num) {
  if (str.length > num) return str.slice(0, num) + '...'
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//Finders Keepers
function findElement(arr, func) {
  for (let item of arr) {
    if (func(item)) return item
  }
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


//Boo who
function booWho(bool) {
  return typeof (bool) == 'boolean';
}
booWho(null);


//Title Case a Sentence
function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  let result = splitStr.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot");


//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  const newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


//Falsy Bouncer
function bouncer(arr) {
  return arr;
}
bouncer([7, 'ate', '', false, 9]);


//Where do I Belong
function getIndexToIns(arr, num) {
  let index = 0;
  for (let item of arr) {
    if (item < num) index++;
  }
  return index;
}
console.log(getIndexToIns([40, 60], 50));


//Mutations
function mutation(arr) {
  const item1 = arr[0].toLowerCase();
  const item2 = arr[1].toLowerCase();
  for (let i = 0; i < item2.length; i++) {
    if (item1.indexOf(item2[i]) == -1) return false;
  }
  return true;
}
mutation(["hello", "hey"]);


//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
