
//Note : There is multiple variable with same name in diffrent soltuions


// This is an in-line comment
/* This 
is 
multi line 
comment 
*/


var myName;
// Value
var a;
a = 7;
var b;
// Assign a to b
b = a;

var m = 9;
// String
var myFirstName = "Gaurav";
var myLastName = "Singh";

// Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " Singh!";

// Understanding Case Sensitivity in Variables
// use camelCase in both declaration and assignment sections.
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Add Two Numbers with JavaScript
const sum = 10 + 10;

// Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

// Divide One Number by Another with JavaScript
const quotient = 66 / 2;

// Increment a Number with JavaScript
let myVar = 87;
// myVar = myVar + 1;
myVar++;

// Decrement a Number with JavaScript
let myVar = 11;
// myVar = myVar - 1;
myVar--;

// Create Decimal Numbers with JavaScript
const myDecimal = 5.7;

// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
const divide = 4.4 / 2.0;

// Finding a Remainder in JavaScript
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes
const myStr = '<a href= "http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
const myStr = "This is the start. "+"This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// Constructing Strings with Variables
const myName = "Samarth";
const myStr = "My name is"+myName+" and I am well!";

// Appending Variables to Strings
const someAdjective = "awesome!!";
let myStr = "Learning to code is ";
myStr += someAdjective

// Find the Length of a String
let lastNameLength = 0;
const lastName = "Gaurav";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Gaurav";
firstLetterOfLastName = lastName[0];

// Understand String Immutability
let myStr = "Jello World";
// myStr[0] = "H"; // Fix Me
myStr = "Hello World"

// Use Bracket Notation to Find the Nth Character in a String
const lastName = "Gaurav";
const thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String
const lastName = "Gaurav";
const lastLetterOfLastName = lastName[lastName.length - 1]; 

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My "+myNoun+" is "+myAdjective+" and "+myVerb+" very "+myAdverb+".";

// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Samarth", 21];

// Nest one Array within Another Array
const myArray = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
const myArray = [50,60,70];
let myData = myArray[0];

// Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

// Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop Method
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
const myList = [
    ["Chocolate Bar", 15],
    ["Milk", 2],
    ["Bread", 1],
    ["Eggs", 12],
    ["Butter", 1]
];

// Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);

// Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));


// Global Scope and Functions
// Declare your variable here
const myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}


// Local Scope and Functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();


// Global vs. Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}


// Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
    sum = sum + 3;
}  
function addFive() {
    sum += 5;
}
addThree();
addFive();


// Assignment with a Returned Value
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);


// Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Understanding Boolean Values
function welcomeToBooleans() {
    return true;
}


// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}


// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}  
testEqual(10);


// Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}


// Practice comparing different values
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");


// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);


// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}


// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}   
testGreaterThan(10);


// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);


// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);


// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);


// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);


// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);


// Introducing Else Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);


// Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
testElseIf(7);


// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}


// Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }
}
testSize(7);


// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else {
        return names[6];
    }
}
golfScore(5, 4);


// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
caseInSwitch(1);


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
switchOfStuff(1);


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
sequentialSizes(1);


// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
chainToSwitch(7);


// Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);


// Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);


// Counting Cards
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; 
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--; 
            break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');


// Build JavaScript Objects
var myDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["Jerry", "Spike"]
};


// Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


// Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
// Only change code below this line
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];


// Accessing Object Properties with Variables
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];


// Updating Object Properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";


// Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";

// Delete Properties from a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;


// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}


// Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found";
}


// Manipulating Complex Objects
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    {
        "artist": "Beethoven",
        "title": "Symphony No. 5",
        "release_year": 1808,
        "formats": ["CD", "MP3", "LP"],
        "gold": true
    }
];


// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];


// Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1];


// Record Collection
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
    // Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    }
    else if (prop === "tracks") {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    }
    else {
        records[id][prop] = value;
    }
    return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// Iterate with JavaScript While Loops
var myArray = [];
var i = 5;
while(i >= 0) {
    myArray.push(i);
    i--;
}


// Iterate with JavaScript For Loops
var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}


// Iterate Odd Numbers With a For Loop
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

// Count Backwards With a For Loop
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}


// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}


// Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);


// Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
}
while (i < 5);


// Replace Loops using Recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n-1) + arr[n-1];
    }
}


// Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");


// Generate Random Fractions with JavaScript
function randomFraction() {
    return Math.random();
}


// Generate Random Whole Numbers with JavaScript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}


// Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");


// Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2);
}


// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}


// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}


// Use Recursion to Create a Countdown
function countdown(n){
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
countdown(5);


// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
}


// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
    return new Date();
};