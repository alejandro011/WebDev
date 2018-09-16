//Scoping and hoisting

//JavaScript functions: 
//a function is a block of code that performs a particular task

function sum2Nums(num1, num2) {
    return num1 + num2;
}

var sumResult = sum2Nums(3, 4);
console.log(sumResult);

var sumResult = sum2Nums("are", "anue");
console.log(sumResult);

/*
Scoping:
Scope defines the context in which variables and also functions can be 
accessed. The lifetime of a variable starts when it is declared.

Global Scope:
A variable declared outside the function has a global scope. Global variables can
be accessed and modified throughout the program. 

Global variables are declared with a keyword var.
If a variable is initialized without being declared, it is automatically
considered to be global. Global variables are available to any code in a
JavaScript program

Local Scope:
In contrast, a variable declared within a function, has a local scope. Local variables 
can only be accessed and modified within that function. 

Local variables are declared
with the keywords let or var. In contrast to global variables that are accessible
and modifiable from anywhere in the code, local variables are only available
within the function they are declared
*/

/*
Hoisting:
This means that the declaration of a variable is used before the variable is actually 
declared. Only variables declared with the keyword var can be hoisted. Hoisted variables 
return undefined.
*/

console.log(x);
var x;

/*
Function declaration is also hoisted. This way, we can invoke a function before it is
declared. Hoisting lifts the declaration of a function to the top of a code block.
*/

var addOneResult = addOne(5);
console.log(addOneResult);

function addOne(num) {
    return num + 1;
}