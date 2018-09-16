/*
JavaScript is an untyped language. This means that unlike in other languages,
such as Java and C, in JavaScript we do not declare the data type of variables
explicitly. JavaScript automatically converts one data type to another when
it's needed.
*/

/* 
different types of values that a variable can be initialized with: string, number, 
boolean, undefined (NaN), null (non-existent) (primitive data types).
*/

var floatNum = 0.3456;
var negDecimal = -2.345;
var intNum = 23;
var expNum = 2.34e-5;

//Basic Arithmetic Operations: +-*/

var modNum = 10 % 3; // 1
var negInf = 3e-1000; // -Infinity

//Math object functions:

var powNum = Math.pow(2,10);
var absNum = Math.abs(-6);
var ceilNum = Math.ceil(5.67); // result = 6
var sqrtNum = Math.sqrt(36); // 6 

//String Operations:

var sentenceLength = "This is a sentence".length; // 18
var charAt17 = "This is a new sentence".charAt(17); // t . The first character position will be 0  
console.log(sentenceLength);
console.log(charAt17);

//Boolean Type and operations:

var x = true;
var y = false;

var boolResult1 = x == 1; //true
var boolResult2 = y == 0; //true
console.log(boolResult1);
console.log(boolResult2);

/*
==  equal to
!=  not equal to
=== equal value and equal type
>  larger than
<= less than or equal to 
*/ 

/*
Undefined Type: 
Undefined is returned when the variable was declared, but never initialized. 
That means, it never got a value assigned to it. It is also possible to manually assign
undefined to a variable as a value
*/

/*
Null type:
Null means nothing and is used to indicate an absence of a value. It is considered good 
practice to use null in your code instead of undefined
*/

var foo = null; 

var nullResult1 = null == undefined; // true...
var nullResult2 = null === undefined; // false...
console.log(nullResult1);
console.log(nullResult2);


//Reference Data Types: 
// arrays (indexed list-like object) and objects (mapping between keys and values)  

/*
An array: 
is another reference data type, which also stores a collection of
values. While each value in an object has a name - that's the key name, 
the values in an array are indexed by a number. The first
value in an array has index 0, the second value has index 1 and so on.
Similar to objects, arrays are dynamic and
untyped, meaning that they can change their size as needed and can store
values of different data types, including other arrays and objects. 
*/

var kingArray = ["Ned", "Stark", "40"];
var arrayEval0 = kingArray[0]; // "Ned"

kingArray[0] = 'newNed'; // new value
kingArray.push("some new string"); // ["newNed", "Stark", "40", "some new string"]
console.log(kingArray);
var arrayLength = kingArray.length; // 4
console.log(arrayLength);


/*
An object:
a reference data type that consists of a collection of named values. These named
values are also called properties, they describe the object. A property is a
mapping between keys and values. Keys are always represented as strings and
values can be of any data type
*/

var king = { firstName: "Ned", lastName:"Stark", age:40};

var objectKeysArray = Object.keys(king); // ["firstName", "lastName", "age"]
console.log(king.firstName); // "Ned"

king.age = 35;

console.log(king.age); // 35

var king2 = { firstName: {stName: 'name', halo: 14}, lastName:"Stark", age:40};

console.log(king2.firstName); // {stName: "name", halo: 14}
console.log(king2.firstName.halo); // 14
console.log(king2["firstName"]); // {stName: "name", halo: 14}
console.log(king2["firstName"]['halo']); // 14



