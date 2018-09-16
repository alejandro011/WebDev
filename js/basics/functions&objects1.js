//Functions and Objects

//Functions, part 1

/*
To declare a function use keyword function followed
by function's name, a list of parameters in parentheses and function's body that
is manipulations that this function does in curly braces. 

Another way to create a
function is by using a function expression. A function expression
consists of the keyword function, list of parameters and a function's body. A name
is not mandatory. We can assign a function created with a function
expression to a variable
*/

const myFactorial = function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    };
};

//var factorialEval = factorial(3); //ReferenceError: factorial is not defined
//console.log(factorialEval);

var myFactorialEval = myFactorial(3);
console.log(myFactorialEval);

//Working with arguments:

function func(str1, str2) {
    return str2;
};

var funcEval = func("just one argument");
console.log(funcEval); // undefined

// Also, we can specify a default value for a parameter

function exp(base, power = 10) {
    return Math.pow(base, power);
}

var expEval = exp(2);
console.log(expEval);

/*
What if the number of variants is larger than the number of parameters?

Well, excessive arguments will not be assigned to any parameters. They simply
will not be used. However, they are not discarded and we still can access them
thanks to a special variable - arguments. An argument object contains all the
arguments passed to a function.
*/

function func2(str1, str2) {
    return arguments[3];
};

console.log(func2("zero", "one", "two", "three"));