//Functions and Objects

//Objects, part 2

/*
We already know that constructor functions and prototypes allow us 
to create groups of similar objects with similar data
and similar behavior. But, we have a problem.
We can't control access to objects properties. 
Our swordsman's properties are exposed to the outside world.
*/

function Swordsman1(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.damage = dmg;
    this.attacks = 2;
    this.getTotalDamage = function () {
        return this.attacks * this.damage;
    };
};

let swordsGuy1 = new Swordsman1('Jaime', 100, 40);
console.log(swordsGuy1.getTotalDamage());
console.log(swordsGuy1.damage);

/*
Let's say, we've been exposing swordsGuy's hit points and
directly changing it from other parts of our code, subtracting damage 
from hit points directly. Now, we decide to implement different types 
of armor with each type reducing damage by a certain percentage.
That means, we have to go over all places where we
directly interact with hit points and take armor into account.
*/

/*This problem is solved in languages, such as Java and C++ by declaring
some attributes as public exposed to the outside and
others as private that is accessible only by the objects methods.
Unfortunately, JavaScript has no mechanism of declaring certain 
attributes as private. Is there any way to solve this problem?
Indeed, there is and we have already seen it.

Closures allow us to create variables that can only be accessed 
by an enclosing function.
*/

function Swordsman2(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    let damage = dmg;
    let attacks = 2;
    this.getTotalDamage = function () {
        return attacks * damage;
    };
};


let swordsGuy2 = new Swordsman2('Jaime', 100, 40);
console.log(swordsGuy2.getTotalDamage());
console.log(swordsGuy2.dmg);
console.log(swordsGuy2.damage);

/*
We have turned objects properties damage and attacks into variables 
in a constructor function. getTotalDamage(), being an inner function, 
has access to these variables. It keeps access even after constructor 
invocation has been completed. Can we somehow access them as objects 
properties? In this example, we try to do exactly that - we try to 
use parameter name dmg and variable name damage, but all in vain.
Thus, objects methods getTotalDamage() has access to damage and attacks 
variables. But, there is no other way to access these values from the 
outside. They are safely hidden.
*/

//Access control Vs. prototypes:

/*
We know now how to create groups of similar objects and how to implement 
access control. Prototypes and closures are mutually exclusive in a 
certain sense, because prototype methods cannot access data hidden within 
closures.
*/

//Prototype chains:

/*
We can create an object via constructor function and make this object a
prototype of another object, building a chain of prototypes.
*/

function Lannister() {
    Lannister.prototype.battleCry = function () {
        return 'Hear me roar!'
    };
}

function Swordsman3() {};
Swordsman3.prototype = new Lannister;
let swordsGuy3 = new Swordsman3();
console.log(swordsGuy3.battleCry());

/*
In this example, we define a constructor function Lannister.
We add battleCry method to the corresponding prototype.
Then, we define another constructor function Swordsman3 and
make an object created with the Lannister constructor a
corresponding prototype for Swordsmen3 constructor.
Finally, we create a Swordsman3 object with a Swordsmen3 constructor.
Prototype of Swordsman object is an object created with a Lannister 
constructor, whose Prototype is a Lannister.prototype object.
Thus, Swordsman3 object inherit methods from Swordsman3.prototype and
Lannister.prototype.
*/

//Object.create

/*
There is an even simpler way to do it.
Object.create method allows us to create objects with custom 
prototypes without defining constructors. It takes one object as an 
argument and then returns another object, whose prototype is the 
first object. When we invoke a specific method on an object,
JavaScript first looks for a method with a given name in the object.
Then, in the objects prototype, then in the objects prototypes prototype
etc, etc, all the way up to the Object.prototype, which is always 
located at the very root of prototype hierarchy. The first found 
method is used.
*/

let lannister = {
    battleCry: function () {
        return 'Hear me roar!'
    }
};

let swordsGuy4 = Object.create(lannister)
console.log(Object.getPrototypeOf(swordsGuy4) === lannister); //true
console.log(swordsGuy4.battleCry());

