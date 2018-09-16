/*
The for loop:
It consists of three segments separated by a semicolon.
The first statement initializes one or several values and is executed exactly once.
In the example below, statement 1 is the initiation of the loop counter i. The second 
statement is the loop termination
condition, which is i less than 5 in the example.
Once this statement evaluates to false, the loop terminates.
Finally, the third statement is the updater i++ in the example.
This statement is invoked after each loop iteration.
Typically, it increments or decrements the counter. 
*/

//Example1:

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log('\n');

//Example2:

for (var i = 0; i < 10; i = i + 2) {
    console.log(i);
}

console.log('\n');

/*
A for/in loop is especially useful when working
with Objects. It iterates over the properties of an Object and returns the name 
of each of the properties.
*/

var king = {
    firstName: "Ned",
    lastName: "Stark",
    age: 40
};

for (let i in king) {
    console.log(i);
}

console.log(Object.keys(king));
console.log(Object.values(king));

console.log('\n');

/*
The for/of loop should be the choice when iterating over Array values.
As a matter of fact, using for/of for other referenced types fails with a type error.
*/

var kingArray = ["Ned", "Stark", 40];

for (let i of kingArray) {
    console.log(i);
}

for (let i in kingArray) {
    console.log(i);
}

console.log('\n');

/*
The while loop:
The for loop is repeated a specific number of times. The while loop
in contrast, is repeated an unknown number of times as long as a condition is met. A while
loop works by first evaluating it's condition.
If it is true, the code block within the while loop is executed untiil the condition
evaluates to false. Once the condition is false, the while loop terminates.
*/

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log('\n');

/*
The do/while loop:
The while loop first evaluates
the condition and then executes the code if the condition is true. The do while loop 
does it in the opposite way.
It first executes the code and then evaluates the condition.
Because the condition is evaluated only after the code is executed,
the code is executed at least once even if the condition is false.
*/

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5)