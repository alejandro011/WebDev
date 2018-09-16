//Functions and Objects

//Functions, part 3

/*
Functions also have name and length properties (attributes).
The value of the name property is function's name.
In case of an anonymous function, it is an empty string.
The value of the length property is an amount of parameters.
*/

anonymousFunc = (function () {}).name;
console.log(anonymousFunc + "(empty string)");

const foo = function bar(a, b, c) {};
console.log(foo.name);
console.log(foo.length + '\n');

//Function.prototype:

/*
We know that objects have prototypes and we know that
functions are objects. It's not surprising
then that each function object is connected to a prototype as well.
Function.prototype is the prototype of functions.
*/

console.log(Object.getPrototypeOf(foo) === Function.prototype);


//Functions inherit apply() and call() methods from Function.prototype:

/*
apply() and call() methods allow to call a function as if
it was a method of the object that is passed as a first argument.
In other words, 'this' keyword returns passed object.
*/

const print = function () {
    console.log(this.name + ',' + this.year) //'this' is replaced by the actual object                                
};

let cls = {
    name: "Power of node",
    year: 2016
};

print.apply(cls);
print.call(cls);

/*
The first argument passed to apply()
and call() methods becomes the value returned by 'this' keyword.
*/

const return_this = function () {
    return this;
};
console.log(return_this.apply(cls) === cls + '\n');

/*
After the first argument passed to apply()
or call(), other arguments become arguments of the function.
Remember, call() and apply() treat them differently.
call() method takes these arguments simply as arguments, while
apply() method takes an array and turns it into arguments.
*/

let cls2 = {
    name: "Power of node",
    year: 2016
};

const print2 = function (times) {
    for (let i = 0; i < times; i++) {
        console.log(this.name + ',' + this.year)
    }
};

print2.call(cls2, 3);
print2.apply(cls2, [3]);
console.log('\n');

//Array of arguments with apply():

/*
Since apply() takes an array and turns it into arguments for 
function, we can use apply() when we are stuck with an array.
For example, we want to get the maximum value of an
array of numbers with the Math.max(), but the Math.max()
method doesn't work with arrays. We can
easily solve this problem with apply().
*/

console.log(Math.max(3, 5, 9));
console.log(Math.max([3, 5, 9]));
console.log(Math.max.apply(null, [3, 5, 9]));
console.log('\n');

//Spread operator:

/*
There's an even simpler way of unpacking an array of arguments.
Spread operator allows us to turn an array into arguments for function.
Its syntax is very simple - three dots before an argument.
Please do not confuse it with rest parameters:
    - If we are defining a function, it's rest parameters.
    - If we are calling a function, it's a spread operator.
*/

console.log(Math.max(...[3, 5, 9]));
console.log('\n');


//Arguments as an array: 

/*
We know that arguments it's not an array...
*/

//Note on arguments:
function func2(str1) {
    return arguments;
};
console.log(func2('zero', 'one', 'two', 'three')); //{ '0': 'zero', '1': 'one', '2': 'two', '3': 'three' }

/*
...but now we know that we can create an array with the same 
contents as arguments using call() method.
Slice is an array method that returns a copy of an array.
Passing an argument's object to slice by a call() or apply(), returns an
array containing the same elements as argument's object.
*/

console.log(['zero', 'one', 'two', 'three'].indexOf('three'));

function func(str1) {
    let args = Array.prototype.slice.call(arguments);
    return args.indexOf('three');
};

console.log(func('zero', 'one', 'two', 'three'));

//Calling one object's method on another object:

/*
So, in JavaScript we can call one object's methods on another object 
using apply() and call(), or we can
simply add methods to another object, as in the current example.
This is possible thanks to a very important feature of JavaScript, 
called late binding.
*/


let cls3 = {
    name: "Power of node",
    year: 2016,
    print: function () {
        console.log(this.name + ',' + this.year);
    }
};

let anotherCls3 = {
    name: 'Autonomous Navigation',
    year: 2016
};

anotherCls3.print = cls3.print;
anotherCls3.print();
console.log('\n');

//Late binding:

/*
So what's it about? Well, late binding means that keyword 'this'
becomes bound to an object at the invocation time.
In other words, object returned by 'this' keyword is selected only 
when we invoke a function.

However, there is one way to change this behavior.
Function.prototype.bind method
returns a new function bound to a specified object.
'this' keyword always
returns bound object inside a bound function.
*/

let cls4 = {
    name: "Power of node",
    year: 2016
};

cls4.print = (function () {
    console.log(this.name + ',' + this.year);
}).bind(cls4);

let anotherCls4 = {
    name: 'Autonomous Navigation',
    year: 2016
};

anotherCls4.print = cls4.print;
anotherCls4.print();
console.log('\n');

//'this' keyword:

/*
the value returned by 'this' keyword is decided at 
invocation time. But, is there a default value? in other
words, what does 'this' return if a function hasn't been bound 
to an object and is not invoked as a method, or via apply() or
call()? 

By default, 'this' returns the global object. 
*/

function checkThisOut() {
    console.log(this);
};
//checkThisOut();
console.log('\n');

/*
In the browser, it's the window object. 'this' also returns the
global object in an inner function that is in a function that 
is called by a method.
*/

let cls5 = {
    name: 'Autonomous Navigation',
    year: 2016,
    testInnerFunc: function () {
        return (function () {
            console.log(this);
        }());
    }
}
//cls5.testInnerFunc();

/*
However, we already know how to deal with such a problem.
We can either bind an inner function or cache value of this keyword in another variable.
For example, that or self and access it from an inner function.
In this example, we decided to use that.
*/

let cls6 = {
    name: 'Autonomous Navigation',
    year: 2016,
    testInnerFunc: function () {
        let that = this;
        return (function () {
            console.log(that);
        }());
    }
}
cls6.testInnerFunc();




