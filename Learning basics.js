//LESSON1: SHOWING JAVASCRIPT COMMENTS
/*Les 2: Data types:
Undefined, null,boolean, string,symbol,number, and object
*/
//Les3: STORING VALUES WITH ASSINGMENT OPERATOR
var a; //Declaring a variable
var b =2; //declaring and assinging
console.log(a)
a=7;
b=a;
console.log(a)
//Les 3: Intializing variables w/ Assignment operator
var a=9;/*declaring and initalizing with assingment operator which is = sign
 We are initalizing a to 9 using the assingment operator*/

// {UNINITIALIZED VARIABLES}initializing 3 varibales or their values are undefined
var a= 5;
var b= 10;
var c= "I am a";
//Do not change code below this line
a= a +1;
b= b +5;
c = c+ "string!";
//CASE SENSIBILITY IN VARIABLES
//Declaration
var StudLyCapVar;
var properCamelcase;
var TitleCaseOver;

//Assignments
StudLyCapVar = 10;
properCamelcase ="A string";
TitleCaseOver = 9000;

//Adding Numbers
var sum= 10 + 10;
console.log (sum); // Answer :- 20
//Subtracting Numbers
var difference = 45-33;
console.log (difference); //Answer:- 12
//Multiplying Numbers
var product= 8 * 10;
console.log (product); //Answer:- 80
//Dividing Numbers
var quotient = 66 /33;
console.log (quotient); //Answer:- 2
//Incrementing numbers - It means adding 1 to a number
var myVar =87;

// Only change code below this line
myVar = myVar + 1;
//OR 
myVar++
//Decrementing Numbers
var myVar= 11;
myVar=myVar-1
//OR
myVar--;
//Decimals
var ourDecimal=5.7
//Only change code below this line
var myDecimal = 0.009

//Multiply Decimals
var product =2.0 * 2.5;
//To check answer use console.log answer is 5

console.log (product); //Answer:- 5
//Divide Decimals
var quotient= 4.4 / 2.0;
//Finding a Remainder - % operator gives the reminder of the division of two numbers

var remainder;
remainder = 11 % 3; //***Tutor said 11/3 is 9 but I doubt It */

//Compound assignmnent with Augmented addition
var a = 3;
var b = 17;
var c = 12;
// Only modify code below this line
a = a + 12; /* can also be written as follows using the += operator. we are adding the value (12)
 to the variable (a) and assigning the answer to that variable */ a += 12;
b = 9 +b;  /* can also be written as */ b += 9;
c = c + 7; /* can also be written as */ c += 7;

//Compound Assignment with Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

//Only modify code below this line
a = a - 6;  /* OR use -= operator which just subtracts the number from the original value (11) 
above and then assings that new value to the variable a*/ a -= 6;
b= b -15;   /*OR */   b -= 15;
c= c - 1;  /* OR */ c -= 1;

//Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;
//Only modify code below this line
a *= 5;
b *= 3;
c *= 10;

//Compound Assignment with Augumented Division
 var a = 48;
 var b = 108;
 var c = 33;
 //Only modify code below this line [dividing the variable by a new number and assigning that answer to the variable]
 a /= 48;
 b /= 108;
 c /= 33;

 //Declare String Variables
 var firstName = "Timothy";
 var lastName = "Mwaro";
 //Only change code below this line
 var myFirstName = "Manyiri";
 var myLastName =  "Atom";
 //Escaping Literal Quotes in Strings
 var myStr = "I am a \"double qouted\"string inside\"double qoutes";
 console.log (myStr) /* Answer is:- "I am a"double qouted" string inside" double quotes"" **with out backslashes*/
 
 //Quoting Strings with Single qoutes
 var myStr = '<a href="https://www.example.com" target="blank"></a>';
 //OR we can use backticks
 `'<a href="https://www.example.com" target="blank"></a>'`;//Everything appear except backticks
 /***
  CODE OUTPUT
  \'Single qoute
  \"double qoute
  \\ backslash
  \n newline
  \r carriage return
  \t tab
  \b  backspace
  \f form feed
  *****/
 var myStr ="FirstLine\n\t\\SecondLine\nThirdLine";

 //Concatenating Strings with Plus Operator -Thisis simply adding two strings
 var ourStr ="I come first." + "I come second";
 // only change code below this line -The 2 lines below have a space between them. *note space before 2nd qoutation mark
 var mystr = "This is the first line. " + "This is the second line";

 //Concatenating Strings with plus Equals Operator
 //Example
 var ourStr = "I come first. ";
 ourStr += "I come second.";
 //Only change code below this line
var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

//constructing Strings with Variables-concatenating strings with variables

var ourName = "freeCodeCamp"
var ourStr = "Hello, our name is " +ourName + ", how are you?";

//Only change code below this line
var myName = "Timothy"
var myStr = "My name is " + myName + " and I am well!";
 console.log (myStr); //Answer is:- My name is Timothy and I am well!

//Appending Variables to strings
//Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
//Only change code below this line
var SomeAdjective = "Worthwhile";
var myStr = "Learning to code is ";
myStr += SomeAdjective;
 console.log (myStr); //Answer is:- Learning to code is worthwhile

//Find Length of String
//Example
var firstNamelength = 0;
var firstName = "Ada";
firstNamelength = firstName.length; //var firstNamelength is reasingned another value which is first.Name.length
console.log (firstNamelength) //Answer:- 3 because Ada has 3 characters

//Bracket Notation to find First Character in String
//Example
var firstLetterOfFirstName = " ";
var firstName = "Ada";
firstLetterOfFirstName = firstName [0];
console.log (firstLetterOfFirstName); //Answer is:- A
// Set up
var fistLetterOfLastName = "";
var lastName = "Lovelace";
//only change code below this line 
fistLetterOfLastName = lastName[0];
console.log (firstLetterOfFirstName); //Answer is:-  L

//string Immutability- You can only change all characters not one
//Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World";
console.log (myStr); //Answer is:-false
//Bracket Notatio to Find the Nth Character in String
//Example-[to get the 2nd letter in a string]
var firstName = "Ada";
var secondLetterOfFirstName = firstName [1];
//Example-2[to get thirdletter in a string]
var lastName = "Lovelace";
//Only change code below this line
var thirdLetterOfLastName = lastName [2];

//Bracket Notation to Find Last character in String
//Example
 var firstName = "Ada";
 var lastLetterOfFirstName = firstName[firstName.length -1];
//setup
var lastName = "Lovelace";
//Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length -1];
//console.log (lastLetterOfLastName) will be:- e

//Bracket Notation to Find Nth -to -Last Character in String
//Example -to find last letter from the last
var fistName = "Ada";
var thirdToLastLetterOfFirstName = firstName [firstName.length -3];
//Note that you can find 2nd ltter from the last by putting -2

//Word blanks
function wordBlanks(myNoun, myAdjective, myVerb, _myAdverb) {
    //Your code below this line
    var result = "";
    var result = "The " + myAdjective + " " +myNoun + " " + myVerb + "to the store";
    //Your code above this line
    return result;
}
//change the word here to test your function
console.log (wordBlanks ("dog", "big", "ran", "quickly"));
// console Answer will be:- The big dog ran to the store quickly.
console.log (wordBlanks("bike", "slow", "flew","slowly"))
//console Answer will be:- THe slow bike flew to the store slowly.

//Store Multiple Values with Arrays
//Example -Array with a string and number
var ourArray = ["John", 23];
//Example 2
var myArray = ["Quincy", 1];

//Nested Arrays or Multidimensional Arrays
//Example
var ourArray = [["the universe", 42], ["Everything", 101010]];
//Only change code below this line
var myArray = [["Bulls", 23], ["White sox", 45]];

//Access Array Data with Indexes
//Example
var ourArray = [50,60,70];
var ourData = ourArray [0]; //console.log equals 50
//Setup
var myArray = [50,60,70];
//Only change cod below this line
var myData = myArray [0];
console.log (myData) //console equals 50

//Modify Arrays with Indexes
//Example 
var ourArray = [18,64,99];
ourArray [1] = 45; //ourArray now equals [18,45,99].
//Setup
var myArray = [18,64, 99];
//Only change code below this line.
myArray [0] = 45;
console.log (myArray) //console.log equals [45,64,99]

//Access Multi-Dimensional Arrays with Indexes
//setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
//only change code below this line
var MyData = myArray[0] [0];// 1st [0] is the 1st Array [1,2,3] in the big Array while the second [0] is the 1s element within the 1st Array
//Example 2: To select 8 we enter the following code below-
var myData = myArray [2] [1];

//Manipulate Arrays with push()
//Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
//ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]];
//set up
var myArray = [["John", 23], ["cat", 2]];
//Only change code below this line.
myArray.push(["dog", 3]) //myArray equals to [["John", 23], ["cat", 2], ["dog", 3]]

//Manipulating Arrays with pop ()
//Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
//removedFromOurArray now equals 3, and ourArray now equals [1,2];
//Setup
var myArray = [["John",23], ["cat",2]];
//Onlychange code below this line
var removedFromMyArray = myArray.pop();
console.log (myArray)// equals to [["John"; 23]] while console.log (removedFromMyArray) equals ["cat",2] 

//Manipulate Arrays with: shift () or the shift function
//Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift ();
//removedFromOurArray now equals "Stimpson" and ourArray now equals ["J",["cat"]]
//setup
var myArray = [["John", 23], ["dog", 3]];
// only change code below  this line.
var removedFromMyArray = myArray.shift ();
//removedFromMyArray equals ["John", 23] and myArray is now ["dog", 3]

//Manipulate Arrays with Unshift ()
//Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray now equals ["J", "cat"]
ourArray.unshift("happy");
//ourArray now equals ["Happy", "J","cat"]
//Set up
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();//myArray  equals to ["dog", 3]
//only change code below this line
myArray.shift (["paul", 35])// myArray equals to [["paul", 35], ["dog", 3] ]

//Shopping List
var myList = [["cereal", 3], ["milk,2"], ["bananas", 3], ["juice", 2], ["eggs",12]]

//Write Reusable code with Functions
//Example
function ourReusableFunction(){
    console.log ("Heyya,world");
}
ourReusableFunction();//repeating ourReusableFunction(); will make Heyya, world repeat also
//Only change code below this line
function reusableFunction() {
    console.log("Hi world");
}
reusableFunction();

//Passing Values to Functions with Arguments
//Example
function ourFunctionWithArgs (a,b) {
    console.log (a-b);
}
ourFunctionWithArgs (10, 5); // Output is 5
//Only change code beloe this line
function functionWithArgs (a,b) {
    console.log (a+b);
}
functionWithArgs(10,5); //Output is 15

//Global Scope and Functions -scope refers to the visibility of variables
//variables outside a function block have global scope-**Global scope means it is visible everywhere
var myGlobal = 10;

 function fun1() {
    //Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
 }
 //Only change code above this line
 function fun2(){
    var output = "";
    if (typeof myGlobal!= "undefined"){
        output += "my Global: " + myGlobal;
    }
    if (typeof myGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log (output);
 }
fun1();
fun2();

//Local Scope and Functions
function myLocalScope () {
    var myVar = 5;//This variable is only viasible within the function
    console.log(myVar);
}
myLocalScope();//Calling the function outside- It can not access my VAriable outside the funtion. You will get an error

//Global vs .Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear ="Sweater";
    return outerWear;
}
console.log(Myoutfit());/*It was T-shirt before var outerWear="Sweater" was added.
var OuterWear="T-shirt" takes precedent over the local variable 
return OuterWear although all are global variables.*/

console.log(outerWear);
//Output will be Sweater and T-shirt respectivelly

//Return a value from a Function with Return
function minusSeven (num){
    return num -7;
}
console.log (minusSeven (10)); //equals 3
//Example 2
function timesFive(num) {
    return num * 5;
}
console.log (timesFive (5));

//Understanding Undefined Value Returned from aFunction
//Example
var sum = 0;
function addThree (){
    sum +=3;//Its not returning anything.COnsole.log(AddThree) will be undefined
}
//Example 2
function addFive(){
    sum +=5;//same case here-console.log(addFive )will be undefined
}//You will need to specify a retun value

//Assignment with Return Value
var changed = 0 ;
function change (num) {
    return (num + 5) / 3;
}
changed = change (10); //changed equals (num+5)/3 and it is set and given a value of change(10)
//Example 2
var processed = 0;
function processArg(num){
    return (num + 3) / 5;
}
processed = processArg (7);//Tutor says you can assign a value using return. **Problem is what is num?


//Stand in Line- In computer science a cue is an abstract data structure where items are kept in order.
/*New items can be added to the back of the cue and items 
are taken off from the front of the cue.*/

function nextInLine (arr,item) {
    //Your code here
    arr.push (item);//arr means array which is testArr below
    return arr.shift ();
}
var testArr = [1,2,3,4,5];

console.log ("Before: ") +JSON.stringify(testArr);
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

/*Answers will be:
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
*/
//Tutor-Why do we have to remove and return 1-we have pushed 6 already

//Boolean Values
function welcomeToBooleans(){
    return false;
}//it should be indented

//Use Conditional logic with If Statements
function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, It's true";
    }
    return "No, It's false";
}
function trueOrFalse (wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true)); //Answer is:- Yes,that was true

//Comparison with Equality Operator
//Setup
function testEqual (val){
    if (val == 12) {//change this line NOTE == IS THE EQUALITY OPERATOR
        return "Equal";
    }
    return "Not Equal";
}
//change this value to test
console.log (testEqual (10)); //Answer equals "Not Equal"

//Comparison with the Strict Equality Operator
//Setup
function testStrict (val){
if (val === 7){//change this line
    return "Equal";
}
return "Not Equal";
}
//Change this value to test
console.log(testStrict (10)); // Answer Equals to:- "Not Equal"
/*
3 == 3  True
3 == '3' True
3 === '3' Not True
3 === 3 True
*/

//Practice Comparing Different Values
//Setup
function compareEquality (a, b) {
    if (a === b)  {//Change this line
    return "Equal";
    }
    return "Not Equal";
}
//Change this value to test
console.log (compareEquality(10, "10")) //Answer is:- "Not Equal"

//Comparison with the Inequality Operator (!=)
//Setup
function testNotEqual (val) {
    if (val != 99) {//Change this line
    return "Not Equal";
    }
    return "Equal";
}
//Change this value to test
console.log (testNotEqual(10));  //"Not Equal" 10 is not Equal to 99

//Comparison with the Strict Inequality Operator
//Setup
function testStrictNotEqual (val) {
    //Only change code Below this line
    if (val !== 17){
        //Only change code above this linr
        return "Not Equal";
    }
     return "Equal";
}
//Change this value to test
console.log (testStrictNotEqual (10)) // Answer is:- "Not Equal"

//Comparisons with the Logical and Operator
function testGreaterThan (val) {
    if (val > 100){//Change this line
        return "OVer 100";
    }
    if(val > 10) {//Change this line
         return "Over 10 ";
    }
    return "10 or Under";
}
//Change this value to test
console.log (testGreaterThan (10)); //Answer :- "10 or Under"

//COmparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual (val){
    if (val >= 20){ //Change this line
        return "10 or Over";
    }
    if (val >=10){ //Change this line
     return "10 or Over"
    }
     return "Less than 10";
}
//Change this value to test
console.log(testGreaterOrEqual (10));//Answer equals:- "10 or Over"


//Comparison with the Less Than Operator
function testLessThan (val){
    if (val < 25) { //Change this line
      return "under 25";
    }
    if (val < 55) {//Changr this line
        return "Under 55";
    }
     return "55 or Over";
}
//Change this value to test
console.log (testLessThan(10));//Answer is:-"Under 25"

//Comparison with the Less Than Or equal to
function testLessOrEqual (val) {
    if (val <= 12){ //Change this line
        return "smaller Than or Equal to 12";
    }
    if (val <= 24) {//Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
//Change this value to test
console.log (testLessOrEqual (10)); //Answer equals:-"Smaller Than or Equal to 12"

//Comparison with the Logical And Operator
function testLogicalAnd (val) {
    //Only change code below this line
    if (val <= 50 && val  >= 25){
        return "Yes";
    }
    //Only change code above this line
    return "No";
}
//Change this value to test
console.log(testLogicalAnd(10)); // Answer is:- "No"

//Comparisons with the Logical or Operator. NOTE THAT || IS OR
function testLogicalOr (val){//Only change code bwlow this line
    if (val < 10 || val >20){
    return "Outside";
    }
    //Only change code above this line
    return "Inside";
}
//Change this value to test
console.log(testLogicalOr(15)); //Answer is:- "Outside"

//Else Statement //Tutor: why is it result and not return in the if statement
function testElse (val){
if (val > 5) {
    result = "Bigger than 5";
}   else{
    result ="5 or smaller";
}
//Only change code above this line
   return result;
}
//Change this value to test
console.log (testElse (4)); //Answer is:- "5 or Smaller"

//Else If Statements
function testElseIf (val) {
    if (val > 10){
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
//Change this value to test
Console.log (testElseIf(7)); //Answer is:- "Between 5 and 10"

//Logical Order in If Else Statements
 function orderMyLogical (val) {
    if (val > 5){
        return "Less than 5";
    } else if (val < 10 ){
        return "Less than 10";
    } else{
        return "Greater than or Equal to 10";
    }
 }
 //Change this value to test
 console.log (orderMyLogical (3)); //Anwser is:- "Less than 10"

//Chaining If Else Statements
function testSize (num){
    if (num < 5){
        return "Tiny"
    }   else if (num < 10){
        return "Small"
    }   else if (num < 15) {
        return "Medium"
    }   else if (num < 20) {
        return "Large"
    }   else {
        return "Huge"
    }
}
console.log (testSize (7));

//Golf Code
var names =[ "Hole-in-one!","Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore (par, strokes){
    if(strokes == 1) {
        return names [0]
    }else if (strokes <= par -2){
        return names [1]
    }else if (strokes == par -1){
        return names [2]
    } else if (strokes == par){
        return names [3]
    }else if (strokes == par + 1){
        return names [4]
    }else if (strokes == par + 2){
        return names [5]
    }else if (strokes == par + 3){
        return names [6]
    }
    return "Change Me";
}
console.log (golfScore(5,4));

//switch statements
function caseInSwitch (val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha"; // Equality operator = is === (STRICT)
            answer = "beta";
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta";
            break;
    }
        return answer;
} 
console.log (caseInSwitch(1)); //Answer is:- "alpha"
 
//Default Option in Switch Statements -its like an elseif statement
 function switchOfStuff (val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;   
        case "b":
            answer ="bird";
            break;
        case "c":
            answer = "cat";
            break;  
        default:   //its like an else statement
            answer = "stuff"; 
            break;      
    }
        return answer;
 }
 console.log(switchOfStuff(2)) // Answer is:- :"Default"


 //Multiple Identical Options In Switch Statements
 function sequentialSizes (val) {
    var answer = "";
    switch (val) {
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
console.log (sequentialSizes(1));

//Replacing If Else Chains with Switch
//ITS AN EXERCISE OF SIMPLY CHANGING
 
//Returning Boolean Values from Function
function isLess (a, b) {
    //Fix this code
    return a < b; /*WRITE THIS INSTEAD OF
    if (a < b) {
        return true;
    } else {return false;}
    */
}
//Change these values to test
console.log (isLess(10,15)); //"true"

//Returning Early Pattern from Functions
//setup
function abTest (a, b) {
    //Only change code below this line
    if (a < 0 || b< 0){
        return undefined;
    }
    //only change code above this line
    return Math.round (Math.pow (Math.sqrt(a) + Math.sqrt(b),2));
}
console.log(abTest(-2,2)); //Answer:- "Undefined"

//Counting Cards
var Count = 0;
function cc (card) {
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        Count ++;
          break;
        case 10:
        case "J":
        case "Q": 
        case "K":
        case "A":
         Count-- ;
           break;
    }
    var holdbet = "hold "
    if (Count > 0){
        holdbet = "Bet"
    }
    return Count + "" + holdbet
}
cc (2); cc ('K'); cc(7); cc ('K'); cc ('A');  //Tutor-I did not understand the game

console.log(cc (4))

//Build JavaScript Objects
//Example
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
 //Only change code below this line.
 var myDog = {
    "name" : "Quincy", //"name" is a property and "Quincy" a value
    "legs": 3,   
    "tails": 2,
     "friends": []     //"friends" is a property and [] a value
 };

 //Accessing object Properties with Dot Notation;
 //Setup
 var testObj ={
    "hat": "ballcap",
    "shirt":"jersey",
    "shoes": "cleats",
 };
 //Only change code below this line
 var hatValue = testObj.hat; //change this line *NB* .notation is the . before hat and shirt]
 var shirtValue = testObj.shirt; //change this line

 //Accessing Object Properties with Bracket Notation
//Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drinks": "water",
};
//Only change code below this line
var entreeValue = testObj["an entree"]; //change this line *NB* []notation is the [] before and after "an entree"
var drinkValue = testObj['the drink']; //change this line *NB* [] notation is used mostly because of space between 'an' and 'entree' or'the' and 'drink'

//Accessing Object Properties with Variables
//Set up
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};
//Only change code below this line
var playerNumber = 16; //change this line
var player = testObj[playerNumber]; //change this line
//player is set to the word,. the string "Montana". We use variable to look up object property;


//Updating Object Properties
//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happy Camper";
//Setup
var myDog = {
    "name": "coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
//Only change code below this line
myDog.name = "Happycoder"; //We have set the object property to a new value

//Add New Properties to an Object
//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark ="bow-wow"; //New property added to Object "bark": "bow-wow"
//Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails":1,
    "friends": ["freecodeCamp Campers"]
};
//Only chamge code below this line
myDog['bark'] = "woof!";//New propeert added object is:- 'bark' :woof!"

//Delete Properties From an Object
//Example
var  ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
delete ourDog.bark; // We have deleted "bark" property from ourDog Object 

//Setup
var myDog = {
    "name": "Happy Coder",
    "legs":  4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
//Only Change code below this line.
delete myDog.tails; //"tails" property has been deleted from the myDog Object


//Using Objects for Lookups 
function phoneticLookup (val) {
    var result = "";
    //Only change code below this line
    //Replace  and delete switch statement with object
    var lookup = {
         "alpha": "Adams",
         "bravo": "Boston",
         "charlie": "chicago",
         "delta": "Denver",
         "echo" : "Easy",
         "foxtrot":"frank"
    };
    result = lookup [val];  
    //Only change code above this line
    return result;
}

//Change this value to test
console.logphoneticLookup ("charlie"); //Answer:- "chicago"

//Testing Objects for Properties
 //Setup
 var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
 };
 function checkObj (checkProp) {
    //Your Code Here
    if (myObj.hasOwnProperty(checkProp)){ //The hasOwnProperty Method
        return myObj[checkProp]; //Returning the value of that Property
    }   else{
        return "Not Found"
    }
 }
 //Test your code by modifying these values
 console.log (checkObj("gift")); //Answer:- "Pony"

 //Manipulating Complex Objects

 var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
        "gold": true
    },
    //Add record here
    {
        "artist" : "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
 ]// Each object hold data in a property (Key value format) in this myMusis Array


 //Accessing Nested Objects
 // Below, observe  objects with other Objects nested inside them
 var myStorage = {
     "car":{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
         },
         "outside": {
            "trunk": "jack"
         }
        }    
 };

 var gloveBoxContents = myStorage.car.inside["glove box"];//use[] because of space between  //Change first line to access specific objects property values
 console.log (gloveBoxContents) //Answer is:-Maps


 //Accessing Nested Arrays
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
            "birch",
        ]
    }
 ];

 //Only change code below this line
 var secondTree = myPlants [1]. list[1]; //change this line
 console.log (myPlants) // Answer is:- "pine"

 //Record collection
 //Set up -Below is an Object which is a record collection
 var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
     "2468": {/* 2468 is the id , "album" is the prop or property and 
     "1999" the value*/
         "album": "1999",
         "artist": "Prince",
         "tracks": [
            "1999",
            "Little Red corvette"
         ]
     }, 
     "1245": {
        "artist" : "Robert Palmer",
         "tracks": []
     },
      "5439": {
        "album": "ABBA Gold"
      }
 };
 //Keep a copy of the colllection for tests
 var collectionCopy = JSON.parse(JSON.Stringify (collection));
/* JSON.Parse(JSON.Stringfy (collection) is used to make a copy of the collection)  **/
 //Only change code below this line -
 /*if prop value is an empty string prop is deleted
   *if prop already has a value push new value to end of current value      */
 function updateRecords (id, prop, value) {/* prop means property*/
        if (value === "") {
            delete collection [id] [prop];
        } else if (prop === "tracks") {/* if collectio [id] [prop] exists 
        then it is equal to collection [id] [prop] BUT if it does not exist it is equal to
        an empty array which is []
        Given that it now exists push value to end of array
         */
            collection [id] [prop] = collection [id] [prop] || [];
            collection [id][prop].push(value)
        }  else { /*if the value is not equal to an empty tag "" and 
        if the prop is not equal to  "tracks" 
        then push value into the property 
        and set the value to be equal to property*/
            collection[id][prop] =value;
         }
       return collection; //The full collection is returned after updating it (updating is adding or deleting)
 } 
 
 //TEST
  console.log (updateRecords (2468, "tracks", "test")); // "test" is pushed to end of array value of the property "tracks"
 console.log (updateRecords(5439, "artist", "ABBA")); //New "artist" has been added and value set to "ABBA" 
  

 //Iterate with while Loops
 var myArray = [];
 var i = 0;
 while (i < 5) {
    myArray.push (i);
    i++;
 }
 console.log(myArray); //Answer = [0,1,2,3,4]


 //Iterate with For Loops
 //Example
 var ourArray = [];
 for(var i= 0; i < 5; i++){
    ourArray.push (i);
 }
 //Setup
 var myArray = [];

 // Only change code below this line
 for (var i = 1; i<6; i++) {//Iteration done five different times and the end of each iteration we increment i by 1 (++1) until the condition was met (i<6)
    myArray.push (i);
 }  
 console.log(myArray); // Answer is:- [1, 2, 3 ,4, 5 ]

 //Iterate Odd Numbers with a For Loop
 //Example
 var ourArray = [];

 for (var i= 0; i< 10; i +=2) {
    ourArray.push(i);
 }
 console.log (ourArray); //Answer will be:- [0, 2, 4, 6, 8]
 //Setup
 var myArray = [];
 //Only change code below this line.
 for (var i = 1; i< 10; i += 2) {
    myArray.push(i);
 }
 console.log(myArray);//Answer is:- [1, 3, 5, 7, 9]


 // Count Backwards with a For Loop
 var  OurArray = [];
 for (var i= 10; i > 0; i -= 2) {
    ourArray.push (i);
 }
 console.log (ourArray); //Answer is:- [10, 8, 6, 4, 2]
 //Setup
 var myArray = [];
  for (var i =9; i > 0; i -=2) {
    myArray.push (i);
  }
  console.log (myArray); //[9, 7, 5, 3, 1]

  //Iterate Through an Array with a For Loop 
  //Example
var ourArr = [9,10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr [i]; //Tutor- is the bracket notation being used to push anything? (BRACKET NOTATION WITH INDEX i IS USED TO ACCESS ALL  ARRAY ELEMENTS)
}
console.log(ourTotal); //Answer is :- 42 The for loop adds all the numbers in the Array
 //Setup
 var myArr = [2, 3, 4, 5,6];
  var total = 0;

 for (var i = 0; i <myArr.length; i++ ) { //Tutor I do not know why there is no direct addition
    total += myArr[i];
 }
  console.log(total); //Answer is:- 20

//Nesting For Loops
function multiplyAll (arr) {//multiplyAll is defined in this function
    var product = 1;

    for (var i= 0; i < arr.length; i++){ //This the outer array passed in below
        for (var j= 0; j < arr[i].length; j++){ //These are the inner arrays-one by one
            product *= arr[i][j]; //Tutor to mutiply all you must reference all?
        }
    }
    return product;
}

var product = multiplyAll ([[1,2],[3,4],[5,6,7]]); /*multiplyAll is called up here[to reassign var product]
 the array above has been passed in the function*/

console.log(product); //Answer is 5040

//Iterate with Do...while Loops
 //Setup
 var myArray = [];
 var i = 10;

 //Only change code below this line
 do{
    myArray.push(i);
    i++;
 } while (i < 5)
console.log(i, myArray); //Answer is:- [11][10] 
/*Second square bracket is empty because code runs once and finds 11 in the loops then breaks since condition is false
Condition is False since i intialized to 10 (var i= 10) can not go with condition i<5 */ 


//Profile Lookup
//Coding challenge

var contacts = [//This is an Array of Objects in our contact list
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes":  ["pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "35374623528",
        "Likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "35578909098",
        "likes": ["Intriguing cases", "violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["javaScript", "Gaming", "Foxes"]
    }
];
//Using the function below: If we pass in name and property, it should return the value of the property
//If name passed in does not corespond our contacts then function should return "No such contact"

function lookUpProfile( name, prop){
    for (var i = 0; i <contacts.length; i++) { //the for statement is to simply create a loop
        if(contacts [i].firstName === name) {//Remember-When using an if statement locate property value using dot notation and square brackets           
         return contacts [i][prop] || "No such property"; // contacts[i] [prop] locates the property value and || is the OR operator for an alternate return ("No such property") if property does not exist
        }

    } 
    return "No such contact";
}

//Change these values to test your functions
var data = lookUpProfile ("Akira", "likes");

console.log (data); //Answer is:- "pizza", "Coding", "Brownie Points"

//Generating Random Fractions
 //Creating a random decimal number in javascript with the Math.random function 
 
 function randomFraction() {

    return Math.random(); //Math.random is between 0 and 0.99999 (it can not be 1)
 }
 console.log (randomFraction());//Answer is:- 0.23813741879825767

 //Generate Random whole Numbers
 //Math.floor function round down to the nearest whole number

 var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //We should get whole number between 0-19

 function randomWholeNum() {

    return Math.floor(Math.random() * 10); //We should get whole numbers between 0-9 
 }
 console.log (randomWholeNum());//Reload to get all numbers 0-9

//Generate Random Whole Numbers within a Range
//Calculation to get a number between min and max

//Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor (Math.random() * (ourMax-ourMin + 1)) + ourMin;
}
ourRandomRange(1,9); 
console.log (ourRandomRange); //Answer:-Numbers between 1 & 9
//Only change code below thid line
function randomRange (myMin, myMax) {

    return Math.floor(Math.random() * (ourMax- ourMin + 1)) + ourMin;
}
var myRandom = randomRange (5,15);

console.log(myRandom); //Answer:- Numbers between 15 & 5

//Use the ParseInt Function
//This function converts a string to an Integer
function convertToInteger (str) {
    return parseInt (str);
}

convertToInteger ("56"); //"56" which is a string will beconverted into an Interger

//Use the parseInt Function with a Radix
//Radix specifies the base of the number in the string

function convertToInterger (str) {
    return parseInt (str, 2); // 2 argurment passed in the return parseInt function is the one converting string to binary (it's a base 2)
}

convertToInteger ("10011");  /*The computer will know that the 
string passed in the convertToInteger statement is binary
 because of the 2 above passed in return statement in the function above*/

 //Use of Conditional (Ternary) Operator

/* Properties of a ternary operator 
- Condition ? statement-if-true : statement-if-false */

//Change function below using the ternary operator
function checkEqual (a,b) {
    if (a ===b) {
        return true;
    }
    else {
        return false;
    }
}
checkEqual (1,2);

//ANSWER
function checkEqual (a,b){
    return a===b ? true : false; //NOTE:- This can be simply written as return a===b;
}
checkEqual (1,2);

//Use Multiple Conditional (Ternary) Operators
//You can nest ternary opeartor within each other
function checkSign (num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log (checkSign (-10)); //Answer is:- Negative


//Differences between the var and let Kewords
 let catName = "Quincy";
 let quote;
 catName = "Beau"; /* catName variable is set to "Beau"
  When using let you can not declare the same variable twice. 
  You can use let and const to be me strict when declaring variables */

function catTalk () {
    "use strict"; /** use strict enables strict mode at the top or just in a function to catch/find variables declared without
    using var, let or const*/
    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk ();


//Compare Scopes of the var and let Keywords
//var is declared globally or  locally if declared inside a function
//let is limited to the scope of block statement or expesssion it was declared in

function checkScope() {
    "use strict";
    let i ="function scope";
    if (true) {
        let i = "block scope";
        console.log ("Block scope i is:",i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();
//Console Answer is:- Block scope i is: "block scope"
//                 :- Function scope i is: "function scope"


//Declare a Read-Only Variable with the const keyword
function printManyTimes (str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i= 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes  ("freeCodeCamp");
//Main lesson hear is that we can not reassign the const SENTENCES another value
//console.log is:- freeCodeCamp is cool! 
//for loops makes the console.log result appear MANY TIMES



//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInplace() {
    "use strict";
    //s= [2, 5, 7]; //This how we can reassign a const 
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInplace();

console.log(s); //Answer is:- [2, 5, 7]

//Prevent Object Mutation
function freezeObj () {
    "use strict";
    const MATH_CONSTANTS ={
        PI: 3.14
    };
    Objects.freeze (MATH_CONSTANTS); //objects.freeze prevents data mutation
    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log (ex);  //The try catch block
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj ();

console.log (PI); //Answer is:- TypeError


//Use Arrow Functions to write Concise Anonymous Functions
//Below is an anonymous function
var magic = function (){
    return new Date();
};
//Here another way of writing by converting it into an arrow function

const magic = () => new Date();

//Write Arrow Functions with Parameters
//converte function below into an arrow function
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2); 
};

console.log (myConcat( [1, 2], [3, 4, 5]));//
//The function below is an arrow function -NB. var is changed to const for good measure
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log (myConcat( [1, 2], [3, 4, 5]));
//Answer is:-[1, 2, 3, 4, 5]


//Write Higher Order Arrow Functions

 const realNumberArray = [4, 5.6, -9.8, 42, 6, 8.34, -2];

 const squareList = (arr) => {
   const squaredIntegers = arr.filter (num => Number.isInteger(num) && num > 0).map (x => x* x);
   return squaredIntegers;
 };//We can use arrow functions to fit all arguments in one line
 const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);//Answer is:- [16, 1764, 36]


//Write Higher Order Arrow Functions ** using the default parameters
/*In the below example-if a value is not passed in 
it will be set to 1 automatically but if not
 it will be set to be set to whatever is passed in */
  
const increment = (function(){
    return function increment (number, value = 1){
        return number + value;
    };
})();
console.log(increment (5, 2)); //Answer is:- 7
console.log (increment(5)); //Answer is:- 6


//Use the Rest Operator with Function Parameters
//The rest operator is three dots
const sum = (function(){
    return function sum (x,y,z) {
        const args = [x, y, z]; 
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log (sum(1, 2, 3)); //Answer is:- 6
//When using the rest operator the code above is witten as:
const sum = (function(){
    return function sum(...args) {
        return args.reduce((a, b) => a +b, 0);
    };
})();
console.log (sum(1, 2, 3, 4)); //Answer is:-10
//we can pass in more than three numbers


//Use the Spread Operator to Evaluate Arrays In-Place
/* The spread operator is also three dots 
It takes an array and spreads it into its individual parts */
 
const arr1 =['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;// The spread operator- It can only be used in an argument to a function or an array literal
(function(){
    arr2 = [...arr1]; //Change this line- arr2 is equal to the contents of arr1- it is a copy which never changes
    arr1 [0] = 'potato'
})();
console.log(arr2); //Answer is:-['JAN', 'FEB', 'MAR', 'APR', 'MAY']
//contents of arr1 are spread out into arr2
 

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54}; /*we want to take each individuAL
element in the object above and assign to individual variables. */  

//The old way of assigning 
var x = voxel.x; //x = 3.6
var y = voxel.y; //y = 7.4
var z = voxel.z; //z = 6.54
//The destucturing way is shown below in the destructuring syntax;
const { x: a, y :b, z = c} = voxel; //a = 3.6, b = 7.4, c = 6.54
/*The code above is read as:-
Get the field of x from the vowel object and copy it into the value a
Get the field of y from the object and copy it into the value b
Get the field of z from the object and copy it into the value c */

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw (avgTemperatures) {
    "use strict";
    //change code below this line
    const {tomorrow : tempOfTomorrow } = avgTemperatures; //change this line
    // change code above this line
    /* Get the tomorrow field from the average temperature object and 
    assign it to the tempofTommorrow variable */
    return tempOfTomorrow;
}// we got the tomorrow variable ou t of avgTemperatures
console.log(getTempofTmrw (AVG_TEMPERATURES)); //Answer is 79


//Destructuring Assignment with Nested Ojects
 const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
 };

 function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow: {max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
 }

 console.log(getMaxOfTmrw(LOCAL_FORECAST));//Answer is:-84.6


 //Use Destructuring Assignment to Assing variables from Arrays
 const [z, x, ,y] = [1, 2, 3, 4, 5, 6];//Observe space between x and y- it is used to skip 3 in the array
 console.log(z, x, y); //Answer is:- 1,2,4

 let a = 8, b = 6;
 (() => {
     "use strict";
     [a,b] = [b, a] // Values assigned to a and b here are switched-They have switched places
 })();
 console.log(a); //Answer:- 6
 console.log(b); //Answer:- 8

//Use Destructuring Assignment with the Rest Operator
//Tutor is it the spread operator or rest operator?
const source  = [1,2,3,4,5,6,7,8,9,10]; 
function removeFirstTwo(list) {
    const [ , , ...arr] = list;

    return arr; //we want to return the array with the first two elements missing
}
const arr = removeFirstTwo (source);
console.log(arr); // Answer is:-[3, 4, 5, 6, 7, 8,9,10]
console.log(source);//Answer is:- [1,2,3,4,5,6,7,8,9,10]

//Use Destructuring Assignment to pass an Object as a Function's Parameters
 const stats = {// This is a stats object
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85,
 };
 /*The function below is destructured
 const half = (function() {

    return function half (stats) { //The half function with stats argument
        return (stats.max + stats.min)/ 2.0; //stats.max and stats.min are values 56.78 and  -8.75 of variables max and min
    };
 })(); */
 // USING DESTRUCTURING TO ONLY PASS IN WHAT WE NEED

 const half = (function() {

    return function half ({max, min}){
        return (max + min)/ 2.0;
    };
})(); 
 console.log (stats);
 console.log (half(stats)); /*The stats is getting passed when called here 
 It is passing in the whole stats object  //Answer:- {max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -8.75, average: 35.85  }
//Tutor why is the outup still whole and and just max and min variables */



//Create Strings using Template Literals
//Template literals are a special type of strings -They make creation of complex strings easier
 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

//Template literal with multi-line and string interpolation //Below is an examples. Notice the backticks
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; //Observe the dollar signs before a variable in the curly braces 
 
console.log (greeting);//Answer:- Hello, my name is Zodaic Hasbro! I am 56 years old.

 
//Coding challenge!
/* Use the make list function to create a list based on the array thats passed in: */
const result = {
    sucess: ["max-length", "no-amd", "prefer-a rrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList (arr) {
    const resultDisplayArray = [];
    for ( let i= 0; i< arr.length; i++){
        resultDisplayArray.push(`<li class= "text-warning">${arr [i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure); //we call in make list function and pass in result.failure variable to get output from cost result array 

console.log(resultDisplayArray) /* Answer is:- ["<li class ="text-warning"> no-var</li>","<li class ="text-warning"> var-on-top</li>", 
"<li class ="text-warning"> line break</li>" ] */


//Write Concise Object Literal Declarations Using SImple Fields
//Tutor. What is a Key Value pair? (AN OBJECT HAS A KEY AND A VALUE)
const createPerson = (name, age, gender) => ({name, age, gender} );//This arrow function takes in 3 variables: name, age and gender and it is going to return the object

   /* return{ INSTEAD OF WRITING THE RETURN THIS WAY YOU CAN SIMPLIFY IT AS- ({name, age, gender} )
        name:name,
        age: age,
        gender: gender
    };*/ 

console.log(createPerson("Zodiac Hasbro", 56, "male"));
//Answer is:-{name:"Zodiac Hasbro", age: 56, gender: "male"}

//Write Concise Declaration Functions
//An object can contain a function
const bicycle = {
    gear: 2,
    //setGear: function (newGear) { //This is the long way to put a function within an object
    setGear (newGear) { //This is the new way
        "use strict";
        this.gear = newGear ;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);// Answer is:- 3

//Use class Syntax to Define a Constructor Function
 //ES 6 provides a syntax to help create objects using the class key word
 var SpaceShuttle = function(targetPlanet) { //This a a constructor function- used to construct the object (TARGET PLANET IS JUPITER PASSED IN BELOW)
    this.targetPlanet = targetPlanet; //The target planet is set to this.targetplanet
 }
 var zeus = new SpaceShuttle('Jupiter'); //Older way of creating an Object using the new keyword -SPaceShuttle Object is antanciated //Tutor what is antanciated?

 console.log(zeus.targetPlanet) //Answeris:- Jupiter
  //Class syntax replaces the cluster function creation -This is illustated below
  
  class SpaceShuttle{// Observe the CLass Key Word and Constructor
    constructor (targetPlanet){ 
        this.targetPlanet = targetPlanet;
    }
  }
  var zeus = new SpaceShuttle ('Jupiter');

  console.log(zeus.targetPlanet) //Answer is:- Jupiter

  //Illustration 2 of how you can use the class syntax
  function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
  }
const Vegetable = makeClass(); //Answer is :- Vegetable
const carrot = new Vegetable ('carrot'); 
console.log(carrot.name); //Answer is:- Carrot

 //Use getters and setters to Control Access to an Object
 /* With a class Object you often want to get values from the
  object and set a value of a property within the Object*/ 

  class Book { //The class Object
    constructor (author) {
        this.author = author;
    }
    //getter
    get writer() { //getter functions are meant to simply return of get the value of an object's private variable to the user without the user directly accessing the private variable
        return this._author; //_author is the private variable
    }
    //setter
    set writer (updatedAuthor) { //This change could involve calculations or overwritting the previous values completely
        this._author = UpdatedAuthor;
    }
  }

/*In the challenge below we are going construct the class and temperature
 is going to be in Fahrenheit but we will create a getter and setter to obtain the temperature in celsius
 Notice-Temperature which is in Fahrenheit is converted to celsius in the class Thermostat below*/

 function makeClass () {
    class Thermostat {
        constructor (temp) { //Temp is in Fahrenheit
         this._temp = 5/9 *(temp-32); //this means the variable _temp is only accessible within this class while the _ signifies the variable is aprivate one 
        }
        get temperature () {
            return this._temp; //The thermostat class created temp in Fahrenheit but we are now storing it in celsius
        }
         set temperature (updatedTemp) {
            this._temp = updatedTemp; //this.temp is set to updatedTemp
         }
    }
    return Thermostat;
 }
const Thermostat = makeClass(); //MakeCLass function is going to return the thermostat object above
const thermos = new Thermostat (76); //The Thermostat Object is Entaciated using the new Key word
let temp = thermos.temperature; //thermos.temperature uses the getter {GETTER AND SETTERS ARE ACCESSED SIMILAR TO PROPERTIES-using the dot notation}
thermos.temperature = 26;  //Thermos.temperature is set with updatedTemp in the setter
 temp = thermos.temperature;
 console.log(temp); //Answer is:- 26

 //Understand the differences Between Import and require
// older way of importing functions and code from other files was using the require function
//Below is code from the current file
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);//Answer is: HELLO!

//This other code is from another file called String_function.js
export const capitalizeString = str => str.toUpperCase()/*The export statement
is exporting the const capitalizeString variable  which equals (=) an arrow  function str => str.toUpperCase() in order to make each letter uppercase */



//Use export to Reuse a Code Block
//You can also export a function like shown below
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString};//The whole function will be exported

export const foo = "bar";
export const bar = "foo";
 
//Use * to Import Everything from a File
import * as capitalizeStrings from "capitilize_strings";//capitalizeStrings is an Object name whereyou will put everything imported

//Create an Export Fallback with export default
// Export deafult is used when you want to import only one thing from a file (the fall back -one thing)

export default function subtract (x,y) {return x -y;}

//Import a Default Export
 // We are exporting the subtract function -We do not not curly braces around subtract because its a default export 
 import subtract from "math_functions";

 Subtract (7,4);