
//Use an Array to Store a Collection of Data
let yourArray = ['coxinha', 1, 'refri', 1, true]; // Change this line


//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = '2B';
// Only change code above this line
console.log(myArray);


//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));


//Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);


//Add Items Using splice()
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//Copy Array Items Using slice()
function forecast(arr) {
  // Only change code below this line
  const newArr = arr.slice(2, 4);
  return newArr;
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));


//Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}
console.log(spreadOut());


//Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) != -1;
  // Only change code above this line
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let index of arr) {
    if (index.indexOf(elem) === -1) {
      newArr.push(index);
    }
  }
  // Only change code above this line
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//Create complex multi-dimensional arrays
let myNestedArray = [ // lv 1
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], // lv 2
  [
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'] // lv 3
  ],
  [
    [
      ['concat', false, true, 'spread', 'array', 'deeper'] // lv 4
    ]
  ],
  [
    [
      [
        ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest'] // lv 5
      ]
    ]
  ],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'] // lv 2
  // Only change code above this line
];



//Add Key-Value Pairs to JavaScript Objects
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line
console.log(foods);


//Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line
console.log(userActivity);


//Access Property Names with Bracket Notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem]
  // Only change code above this line
}
console.log(checkInventory("apples"));


//Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);


//Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);


//Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(userObj) {
  // Only change code below this line
  return userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')
  // Only change code above this line
}
console.log(isEveryoneHere(users));


//Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      count ++;
    }
  }
  return count;
  // Only change code above this line
}


//Generate an Array of All Object Keys with Object.keys()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}
console.log(getArrayOfUsers(users));


//Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, 'Pete'));


