//Functions and Objects

//Functions, part 2

/*
Here, we will take a detailed look at
working with functions arguments, scopes and variable shadowing, 
and one of the most powerful features of 
JavaScript - higher-order functions.
*/

//Working with arguments object:

/*
We can access a function's arguments using the special 
variable arguments
*/

function func1(str1, str2) {
    console.log(arguments[3]);
    console.log(arguments.length);
};

func1('zero', 'one', 'two', 'three');

/*
Arguments object looks like an array, but,
it is not an array. Arguments object does not have array 
methods.
*/

console.log(['zero', 'one', 'two', 'three'].indexOf('three'));

function func2(str1) {
    arguments.indexOf('three');
};

//func2('zero','one','two','three'); TypeError: arguments.indexOf is not a function

//Rest paramenters:

/*
Working with arguments object is not the only way to handle an
indefinite number of arguments. Rest parameter syntax, which is very simple -
three dots before a parameter name - allows us to catch all arguments
starting at a certain position and assign them as an array to a parameter.
*/

function func3(str1, str2, ...otherArgs) {
    return otherArgs.indexOf('three');
};

console.log(func3('zero', 'one', 'two', 'three'));

/*
otherArgs contains all arguments beginning from the second argument of func3.
func3('zero', 'one', 'two', 'three') will return 1, because 'three' is the 
sencond argument in otherArgs. 

Unlike arguments, otherArgs is an actual array
*/

//Functions create a new scope 

/*
A variable declared in a scope is accessible inside all of the inner scopes. 
Let's rephrase: inside a function we can access all of the variables
declared in these functions outer scope. We can both read and write such
variables. 
*/

function printName() {
    let name1 = 'GoT';
    const innerFn = function () {
        console.log(name1);
    };
    innerFn();
};

printName();

let name2 = 'Game of Thrones';

function rebranding1() {
    name2 = "A song of fire and ice";
};

rebranding1();
console.log(name2);

//Variable shadowing:

/*
Declaring a variable with the same name as a variable in an outer scope blocks
access to the outer variable in an inner scope. 

An outer scope variable is shadowed by an inner
scope variable. That is, manipulations with an inner scope variable have no
effect on an outer scope variable
*/

let name3 = 'Game of Thrones';

function rebranding2() {
    let name3 = "A song of fire and ice";
};

rebranding2();
console.log(name3);

//Higher order functions:

/*
a higher-order function is a function that takes a function as an
argument or returns a function as a return value.
*/

function Add(x) {
    return function innerAdd(y) {
        return x + y;
    };
};
console.log(Add(4)(5));

/*
Let's take a closer look at this example. What exactly is going on here?
We have defined function Add that takes an integer as an argument and 
returns another function innerAdd.
innerAdd also takes an integer as an argument and returns some of these 
integers. Do you understand how we invoke this function with two sets of
parentheses? First, we invoke Add with four as an argument that returns 
innerAdd and we immediately invoke it passing 5 as an argument.

We invoke innerAdd after Add function has been
invoked, right? It's done, it's over. So, how can innerAdd access variable x?
To understand that we need to understand the idea of Closures.
*/

//Closures:

/*
JavaScript inner function has access to outer variables even when an outer 
function has been run. We can say that a function *encloses* its environment.
Thus, a closure is a function plus the function's context.
*/

//IIFE (Immediately invoked function expressions): 

/*
Immediately invoked function expressions are very often used together 
with closures in JavaScript. 
*/


//    ( function(){
//        statements;
//    }() );


//Example:

const counter = (function () {
    let counterValue = 0;
    return function () {
        return ++counterValue;
    }
}() );

console.log(counter());
console.log(counter());

/*
Notes:
i++ means 'tell me the value of i, then increment'
++i means 'increment i, then tell me the value'
*/