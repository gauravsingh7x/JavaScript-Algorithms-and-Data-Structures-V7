
//Sum All Numbers in a Range
function sumAll(arr) {
  let result = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));



//Diff Two Arrays
function diffArray(arr1, arr2) {
        return arr1
                .concat(arr2)
                .filter(value =>
                        !arr1.includes(value) || !arr2.includes(value))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



//Seek and Destroy
function destroyer(arr, ...args) {
  return arr.filter(item => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



//Wherefore art thou
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  // Only change code below this line
  return collection.filter(prop => {
    return keys.every(key => {
      return prop.hasOwnProperty(key) && prop[key] == source[key]
    });
  });

  // Only change code above this line

}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));



//Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));



//Pig Latin
function translatePigLatin(str) {
  var output;

  if (isVowel(str[0])){
    output = str + "way";
  }

  else{
    let consonantCluster = str[0];
    let i = 1;

    while (i < str.length){
      let character = str[i];

      if (isVowel(character)){
        break;
      }

      else{
        consonantCluster += character;
        i += 1;
      }
    }

    output = str.slice(consonantCluster.length) + consonantCluster + "ay";
  }

  console.log(output);
  return output;
}

function isVowel(character){
  let test = character.toLowerCase();

  if (test === "a" || test === "e" || test === "i" || test === "o" || test === "u"){
    return true;
  }

  return false;
}
translatePigLatin("consonant");
// translatePigLatin("rhythm");



//Search and Replace
function myReplace(str, before, after) {
  const i = str.indexOf(before);

  return str[i].toUpperCase() === str[i]
    ? str.replace(
      before, (after = after[0].toUpperCase() + after.slice(1))
    )
    : str.replace(
      before, (after = after[0].toLowerCase() + after.slice(1))
    );
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



//DNA Pairing
function matchPair(element) {
  switch (element) {
    case 'A':
      return ['A', 'T'];
    case 'T':
      return ['T', 'A'];
    case 'C':
      return ['C', 'G'];
    case 'G':
      return ['G', 'C'];
  }
}

function pairElement(str) {
  return str
    .split('')
    .map(element => matchPair(element));
}

console.log(pairElement("GCG"));



//Missing letters
function fearNotLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const first = str[0];
  const firstIndex = alphabets.indexOf(first)
  const diff = firstIndex;

  for (let i = 1; i < str.length; i++){
    let alphabet = alphabets[i + diff];

    if (str[i] != alphabet){
      return alphabet;
    }
  }

  return undefined;
}

fearNotLetter("abce");



//Sorted Union
function uniteUnique() {
  let output = [];
  let number;
  let array;

  for (let i = 0; i < arguments.length; i++){
    array = arguments[i];

    for (let j = 0; j < array.length; j++){
      number = array[j];

      if (!output.includes(number)){
        output.push(number);
      }
    }
  }
  
  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



//Convert HTML Entities
function convertHTML(str) {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;")
}

convertHTML("Dolce & Gabbana");



//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let a = 1, b = 1, sum = 0;

  while (a <= num) {
    if (a % 2) sum += a;
    [a, b] = [b, a + b];
  }

  return sum;
}



//Sum All Primes
function sumPrimes(num) {
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}



//Smallest Common Multiple
const smallestCommons = ([a, b]) => {
  const [min, max] = [Math.min(a, b), Math.max(a, b)];
  const gcd = (x, y) => y ? gcd(y, x % y) : x;

  let res = min;
  for (let i = min + 1; i <= max; i++) {
    res = (res * i) / gcd(res, i);
  }

  return res;
};



//Drop it
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}



//Steamroller
function steamrollArray(arr) {
  var output = [];

  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      output = output.concat(steamrollArray(arr[i]))
    }

    else{
      output.push(arr[i]);
    }
  }

  console.log(arr, output)
  return output;
}

steamrollArray([1, [2], [3, [[4]]]]);



//Binary Agents
function binaryAgent(str) {
  const items = str.split(" ");
  const output = [];

  for (let i = 0; i < items.length; i++){
    output.push(String.fromCharCode(parseInt(items[i], 2)));
  }
  
  return output.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//Everything Be True
function truthCheck(collection, pre) {
  let object;
  let value;

  for (let i = 0; i < collection.length; i++){
    object = collection[i];
    value = object[pre];

    if (!value){
      return false;
    }
  }

  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");



//Arguments Optional
function addTogether() {
  if (arguments.length == 1){
    if (typeof arguments[0] != 'number'){
      return undefined;
    }

    else{
      return (a) => {
        if (typeof a != 'number'){
          return undefined;
        }

        else{
          return arguments[0] + a;
        }
      }
    }
  }

  else{
    if (typeof arguments[0] != 'number' || typeof arguments[1] != 'number'){
      return undefined;
    }

    else{
      return arguments[0] + arguments[1];
    }
  }
}

addTogether(2,3);



//Make a Person
const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(first, last) {
    firstName = first;
    lastName = last;
  };
};



//Map the Debris
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(obj => {
    const a = earthRadius + obj.avgAlt;

    const T = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM)
    );

    return {
      name: obj.name,
      orbitalPeriod: T
    };
  });
}



