# Legacy JavaScript Algorithms and Data Structures-V7 Certification
A structured collection of my [freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) certification solutions — learning to code, solving challenges, and documenting my journey from “why isn’t this working?” to “oh… now it works.”
</br>
If this repository helped you in any way, feel free to leave a ⭐ — it’s greatly appreciated!
</br>

## Courses
1. [**Basic JavaScript**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Basic%20JavaScript.js) **(113 Tasks)**

2. [**ES6 Challenges**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/ES6.js) **(29 Tasks)**

ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.
   
Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.
The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:
- Arrow functions
- Classes
- Modules
- Promises
- Generators
- `let` and `const`

Note: Not all browsers support ES6 features. If you use ES6 in your own projects, you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6.

3. [**Regular Expressions Challenges**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Regular-Expressions.js) **(33 Tasks)**

Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text. Regular expressions can appear cryptic because a few characters have special meaning. The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want. This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.

4. [**Debugging**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Debugging) **(12 Tasks)**

Debugging is a valuable—and often necessary—skill for programmers. It comes after testing your code and realizing that something isn’t working as expected. Debugging is the process of identifying what’s wrong and fixing it.

Even well-written code can contain errors, and these issues generally fall into three categories:

Syntax errors: Mistakes in code structure that prevent the program from running
Runtime errors: Errors that occur while the program is executing
Semantic (logical) errors: When the code runs but produces incorrect results

Modern code editors (and experience) can help catch syntax errors quickly. However, runtime and semantic errors are often harder to identify. They might cause your program to crash, run indefinitely, or produce incorrect output.

Think of debugging as understanding why your code behaves the way it does.

#Syntax Error Example
```js
funtcion willNotWork(
  console.log("Yuck");
}  
  // "function" keyword is misspelled and there's a missing closing parenthesis
```
#Runtime Error Example
```js
function loopy() {
  while(true) {
    console.log("Hello, JS!");
  }
}
// Calling loopy starts an infinite loop, which may freeze or crash your browser
```
#Semantic Error Example
```js
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
```
Debugging can be frustrating, but a structured approach makes it easier:

   Check values step-by-step using tools like ```console.log()```
   
   Verify data types and outputs at different stages
   
   Use process of elimination:
         If Function A works, the issue may be in Function B
   
   Divide and conquer:
         Check the middle of your code to narrow down where the bug is

5. [**Basic Data Structures**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Basic-Data-Structures) **(20 Tasks)**

Data can be stored and accessed in many different ways, both in JavaScript and other programming languages.
In this section, you will learn how to work with arrays, including how to manipulate them and access or copy their contents.
You will also explore JavaScript objects, learning how to access and modify their data using both dot notation and bracket notation.
By the end of this section, you should understand the key properties and differences between arrays and objects, as well as how to choose the most appropriate one for a given task.

6. [**Basic Algorithm Scripting**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Basic-Algorithm-Scripting) **(16 Tasks)**

A computer algorithm is a sequence of steps followed to achieve a specific outcome. To write an algorithm, you must first understand the problem and then solve it using code.

To make problem-solving easier, it helps to break a problem into smaller parts. Each part can then be solved step by step. For example, when building a calculator, you shouldn’t try to solve everything at once. Start by figuring out how to take input. Next, implement each arithmetic operation individually. Finally, display the result.

In this section, we will learn how to solve basic algorithm problems using JavaScript. This will help improve your problem-solving skills and prepare you for more complex challenges in the future.

Hint: If you get stuck, try using ```console.log()``` to log variable values to the console. This will help to debug problems.

7. [**Object Oriented Programming**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Object-Oriented-Programming) **(26 Tasks)**

At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

8. [**Functional Programming**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Functional-Programming) **(24 Tasks)**

Functional programming is an approach to software development centered around evaluating functions. Similar to mathematics, functions take inputs and map them to outputs to produce a result. By combining simple functions in different ways, you can build more complex programs.

Functional programming follows a few core principles:

Independence from state: Functions should not rely on external or global variables. They should depend only on the arguments passed to them.
Immutability: Functions should avoid modifying existing data or changing the program’s state. Instead, they should return new data.
Minimal side effects: Functions should not cause unexpected changes outside their scope (such as modifying global variables or performing hidden operations).

This approach breaks programs into small, reusable, and testable pieces, making code easier to understand, maintain, and debug.

In this section, you will learn the basics of functional programming in JavaScript and how to apply these principles in practice.

9. [**Intermediate Algorithm Scripting**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Intermediate-Algorithm-Scripting) **(21 Tasks)**


10. [**JavaScript Algorithms and Data Structures Projects**](https://github.com/gauravdev-x/JavaScript-Algorithms-and-Data-Structures-V7/blob/main/Intermediate-Algorithm-Scripting) **(5 Projects)

These challenges are similar to algorithm scripting challenges, but they are more difficult. They are designed to help you demonstrate how much you have learned.

In this section, you will build the following small JavaScript programs:
Palindrome Checker
Roman Numeral Converter
Caesar’s Cipher
Telephone Number Validator
Cash Register

## Projects
This section contains the projects I developed to complete the freeCodeCamp learning path and earn the certification, demonstrating practical coding skills along the way.
