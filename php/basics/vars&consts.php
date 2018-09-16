<?php
## Variables and Constants:

$x = 2;
$y = $x + 3;
print $y;

/* syntax error... y is not declared as a variable
$x = 2;
y = $x + 3;
print $x;
*/

//Notice: Use of undefined constant x - assumed 'x' in vars&consts.php on line 16
$x = 5;
$y = array("x" => "Hello");
print $y[x];
echo "\n\n";

## Printing strings / string concatenation / double quoted strings: 

echo "This is a string\n";

echo "you can have newlines 
in string just by continuing 
in a new line\n";

## Echo variables:

$expand = 12;
echo "Printing the variable expand = $expand\n\n";

## Single quoted strings:

echo 'This is a string\n';

echo 'you can have newlines 
in string just by continuing 
in a new line\n';

$expand = 12;
echo 'Printing the variable expand = $expand\n';

#comments also can be done using #...

?>


