//Functions and Objects

//Objects, part 1

/*
JavaScript object is a set of properties of Key, Value pairs. Arrays, 
functions, regular expressions and dates are objects as well.
We can create an object by invoking the standard object constructor 
with a keyword new.
*/

let cls1 = new Object();
cls1.name = 'Power of node';
cls1.year = 2016;
console.log(cls1);

/*
An object literal that is a list of properties in curly braces 
allows us to specify object's properties at once.
*/

let cls2 = {
    name: "Power of node",
    year: 2016
};
console.log(cls2);

//Property Values:

/*A property value can be of any type, including functions.
Functions that are properties of an object are called methods.
Inside of a method, *this* keyword refers to the object the method 
is invoked on.
*/

let cls3 = {
    name: "Power of node",
    year: 2016,
    printMethod: function () {
        console.log(this.name + ',' + this.year);
    }
};

cls3.printMethod();

/*
We have already seen defining and accessing properties.
We can also change and delete them. To change your property, we simply 
assign a new value. Delete operator allows us to remove a property from
an object. Remember, using delete operator is not the same as assigning
undefined to a property. When we assign undefined to a certain property, 
it is not removed.
*/

cls3.theme = 'A Javascript course';
console.log(cls3);

delete cls3.theme;
console.log(cls3);

//Iterating over properties:

/*
For/in loop allows us to iterate over objects properties names. 
Once we have a name, we can get a corresponding value by using the 
square bracket notation.
*/

for (p in cls3) {
    console.log(p + ',' + cls3[p]);
}

//Checking Property Existence:

/*
We can also check if a certain property exists using hasOwnProperty() method.
This method takes a name of a property as an argument and returns true if 
such a property exists. Otherwise, it returns false.
*/

console.log(cls3.hasOwnProperty('year'));
console.log(cls3.hasOwnProperty('month'));

//Comparing Objects:

/*
An important thing to remember is that an object is only equal to itself. In other words,
equality operator returns true only if both
variables hold a reference to the same object. It will return false in all other cases,
even if objects have the same set of properties with the same names and the same values.
*/

lecture = cls3;
console.log(lecture === cls3);

console.log({
    name: 'value'
} === {
    name: 'value'
});

//Prototypal inheritance:

/*
In JavaScript, each object has a special connection to another object - to a prototype.
When we try to access a certain property that is absent in an object, JavaScript will look 
for that property in the prototype. We can say that object inherits its prototype properties.
Special object object.prototype is a prototype of all
objects created via an object literal or an object constructor.
Object.prototype has hasOwnProperty() methods and that's exactly what we have invoked.

What happens when we add a property to a prototype?
All objects inheriting from this prototype get immediate access to the new property.
*/

Object.prototype.easterEgg = 'Hello World';
console.log(cls3.easterEgg);

//Constructor functions (Classes):

/*
With constructor functions we can create groups of objects. Each object 
belonging to a group, has similar contents and behavior. How exactly does a constructor 
function work? 
First, we invoke it with a 'new' keyword.
New keyword creates a new object.

The value of constructor function special property, called prototype, becomes the 
prototype of the newly created object.
The keyword this returns our new object inside the constructor function, allowing us to
define and initialize object's properties.

Each function has a prototype property.
The value of prototype property is an object.
This object becomes the prototype of every object
created by a corresponding constructor function. 
*/

function Swordsman(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.damage = dmg;
    this.attacks = 2;
};

let swordsGuy = new Swordsman('Jaime', 100, 40);
console.log(swordsGuy);

console.log(Object.getPrototypeOf(swordsGuy) === Swordsman.prototype);

Swordsman.prototype.getTotalDamage = function(){
    return this.attacks*this.damage;
}

console.log(swordsGuy.getTotalDamage());



