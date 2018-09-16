//Conditional statements

//There are four ways to construct a conditional statement in JavaScript

//if and if-else conditionals:

var x = 5;

if (x > 0) {
    text = "x is positive"
} else {
    text = "x is not positive"
}

console.log(text);

//else if conditionals:

x = -7;

if (x > 0) {
    text = "x is positive"
} else if (x < 0) {
    text = "x is negative"
} else {
    text = "x is zero"
}

console.log(text);

//Switch conditionals:

var king = "something";
var king = "Ned";

switch (king) {
    case "Ned":
        console.log("this is the first name");
        break;
    case "Stark":
        console.log("this is the last name");
        break;
    case "40":
        console.log("This is the age");
        break;
    default:
        console.log("This is the title");
}