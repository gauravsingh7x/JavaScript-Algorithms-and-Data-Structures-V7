
//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


//Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);


//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


//Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line


//Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);


//Match Characters that Occur Zero or More Times
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);


//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


//Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line


//Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


//Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


//Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


//Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


//Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;


//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;


//Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);


//Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


//Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/gi; // Change this line
let result = ohRegex.test(ohStr);


//Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
let result = haRegex.test(haStr);


//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);


//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);


//Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);


//Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin\sD.|Eleanor)\sRoosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line


//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);


//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);


//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // My solution
// let wsRegex = /^\s+|\s+$/g; // Official solution
let result = hello.replace(wsRegex, ''); // Change this line