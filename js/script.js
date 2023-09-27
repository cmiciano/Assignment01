

// STEP 1
/*
let someMonth // let some_month
function theMonth() // function the Month()
let currentMonth // let current-month
let summerMonth // let summer_month
let myLibraryFunction // let MyLibrary-function
*/

// STEP 2
/*
2 // Numeric literal expression
‘Hi’ // string literal expression
True // Boolean literal expression
Null // null literal expression
*/

// STEP 3

/*
let exp1 = 2 += 2
let exp2 = 30 % 4
*/

// STEP 4
/*
let strfirstName; // First Name
let strLastName; // Last Name
let strAddress; // Address 
let strCity; // City 
let strState; // State
let numZipCode; // Zip Code
let numAge; // Age
let strReferralSource; // Referral Source
let boolContact; // May We Contact You
*/

// STEP 5

// First way to declare variable
// is this the three types of ways to declare or whether or not its in a line ??

/*
// First way declaring and assigning at the same time
const strFirstName = ‘Charlene’
var numZipCode = 91910
let boolContact = true 

// Second way declaring and assigining all in one line
let strFirstName = 'Charlene', numZipCode = 91910, boolContact = true

// Third way declaring on one line then assigning on the next line
const strFirstName;
strFirstName = 'Charlene'

var numZipCode;
numZipCode = 91910

let booContact;
boolContact = true
*/


// STEP 6

/*
let numAsNumTest = 3
let numAsStrTest = ‘2’
console.log(numAsNumTest + numAsStrTest) // coerces number 3 into a string, and concatenates them, outputs 32 
*/

// STEP 7

/*
let firstVar;
firstVar = true + 'test string' // (what if i do true + ‘1’ would it coerce ‘1’)
console.log(firstVar) // outputs truetest string, coerces boolean to string and concatenates

let secondVar;
secondVar = 2 + true
console.log(secondVar) //outputs 3, coerces boolean to number and adds them
*/

// STEP 8
// No string is not valid, you need to escape the quotation marks and the apostrophe to have it print correctly
/*
let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"'
console.log(someString)
*/


// STEP 9
/*
let nullVar = null ??
console.log(nullVar)

let undefVar = undefined;
console.log(undefVar)

*/


// STEP 10
/*
let strVar = 'test string'
console.log(typeof strVar)


let numVar = 1
console.log(typeof numVar)


let blnVar = true
console.log(typeof blnVar)


let objVar = new Object();
console.log(typeof objVar)


let undefVar = undefined;
console.log(typeof undefVar)
*/


// STEP 11
/*
alert('Hello ' + 'Charlene Miciano' + ', welcome to the JavaScript class!')
*/

// STEP 12
/*
let myName = 'Charlene Miciano'
alert('Hello ' + myName + ', welcome to the JavaScript class!')
*/

// Step 13
/*
let myName = 'Charlene Miciano'
let course = 'JavaScript'
alert('Hello ' + myName + ', welcome to the ' + course + ' class!')
*/

// Step 15
/*
let myNamePrompt = window.prompt('Please enter your name')
let course = 'JavaScript'
alert('Hello ' + myNamePrompt + '.' + '\n' + 'Welcome to the ' + course + ' class!')
*/

// STEP 16
/*
let myNamePrompt = window.prompt('Please enter your name')
let coursePrompt = window.prompt('Please enter the course you\'re taking')
alert('Hello ' + myNamePrompt + '.' + '\n' + 'Welcome to the ' + coursePrompt + ' class!')
*/

// STEP 17
/*
let x = 10;
let y = 20;
console.log(x + y)
*/

// STEP 18
/*
let x = 20;
x+=20
console.log(x) //result is 40
*/

// STEP 19
/*
let x = 20;
x *= 5
console.log(x) // result is 100
*/

// STEP 20
/*
let x = 20 % 3
console.log(x)
*/

// STEP 21 // app evaluates to true ?? should it be an actual application or just a console print
/*
let var1 = 5
let var2 = 5

document.write("Var1 is equal to " + var1 + "\n")
document.write("<br>")
document.write("Var2 is equal to " + var2)
document.write("<br>")
document.write("Is Var1 equal to Var2? " + (var1 == 5 && var2 == 5))

console.log(var1 == 5 && var2 == 5)

*/

// STEP 22


/*

let var3 = 5
let var4 = '5'
let var5 = 3 + 2

document.write("Var3 is equal to " + var3 + " and is of type " + typeof(var3))
document.write("<br>") 
document.write("Var4 is equal to " + var4 + " and is of type " + typeof(var4))
document.write("<br>")
document.write("Var5 is equal to " + var5 + " and is of type " + typeof(var5))
document.write("<br>")

document.write("The expression (Var3 equal in value and type to var4) OR (does var5 NOT EQUAL 5) returns " +  (var3 === var4) || (var5 != 5))
console.log( (var3 === var4) || (var5 != 5))


*/