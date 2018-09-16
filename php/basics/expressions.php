<?php
    ## Expressions: 
    
    // Expressions evaluate to a value. The value can be a string, number, boolean, etc.

    $x = "15" + 37; // 52 agresive type conversion 
    echo($x);
    echo("\n\n");

    ## Increment/decrement:

    // not recommended...
    $x = 12;
    $y = 3 + $x++;
    echo($x . " " . $y);
    echo("\n\n");

    // equivalent to
    $x = 12;
    $y = 3 + $x;
    $x = $x + 1;
    echo($x . " " . $y);
    echo("\n\n");

    ## String concatenation: 
    
    // the '.' operator will convert to everything to string 
    $a = "hello " . "world!";
    echo($a . "\n\n");

    ## Ternary operator: 
    
    // The ternary operator comes from C. It allows conditional
    // expressions. It is like a one-line if-then-else
    
    $www = 123;
    $msg = $www > 100 ? "Large" : "Small";
    echo("First: $msg \n\n");
    
    $msg = ($www % 2 == 0) ? "Even" : "Odd";
    echo("Second: $msg \n\n");

    $msg = ($www % 2) ? "Odd" : "Even"; # it will be 1 (true)
    echo("Third: $msg \n\n");

    // If you use the shortcut ternary operator like this, it will cause a notice if $_GET['username'] is not set:

    //   $val = $_GET['username'] ?: 'default';  # Notice: Undefined index: username in line 35
    
    // So instead you have to do something like this:
        
    $val = isset($_GET['username']) ? $_GET['username'] : 'default';
    echo("$val\n\n");
    
    // The null coalescing operator is equivalent to the above statement, and will return 'default' if 
    // $_GET['username'] is not set or is null:
        
    $val = $_GET['username'] ?? 'default';
    echo("$val\n\n");
    //Note that it does not check truthiness. It checks only if it is set and not null.

    ## Side-effect assignment: 

    echo "\n";
    $out = "Hello"; 
    $out = $out . " "; 
    $out .= "World!";
    $out .= "\n";
    echo $out;
    $count = 0;
    $count += 1;
    echo "Count: $count\n\n";

    ## Variable conversion/casting:
    
    $a = 56; $b = 12;
    $c = $a / $b;
    echo "C: $c\n"; //force float

    $d = "100" + 36.25 + TRUE; // "100" becomes 100.0 and TRUE = 1
    echo "D: ". $d . "\n";
    echo "D2: ". (string) $d . "\n"; 
    
    $e = (int) 9.9 - 1; // 9.9 into 9
    echo "E: $e\n";
    
    $f = "sam" + 25; // "sam" becomes a 0
    echo "F: $f\n";
    
    $g = "sam" . 25; // 25 gets converted by the string operator
    echo "G: $g\n";

    echo("\n");


    // The concatenation operator tries to convert its operands to strings.
    // TRUE becomes an integer 1 and then becomes a string. FALSE is “not 
    // there” - it is even “smaller” than zero, at least when it comes to width.
    
    echo "A".FALSE."B\n";
    echo "X".TRUE."Y\n";
    echo("\n");

    ## Equality versus Identity:

    // The equality operator (==) in PHP is far more agressive than in most other languages when it 
    // comes to data conversion during expression evaluation.
    
    if ( 123 == "123" ) print ("Equality 1\n");
    if ( 123 == "100"+23 ) print ("Equality 2\n");
    if ( FALSE == "0" ) print ("Equality 3\n");         // All equalities print...
    if ( (5 < 6) == "2"-"1" ) print ("Equality 4\n");
    if ( (5 < 6) === TRUE ) print ("Equality 5\n");
    echo("\n");

    ## The strpos() function:
    $vv = "Hello World!";
    echo "First:" . strpos($vv, "Wo") . "\n";
    echo "Second: " . strpos($vv, "He") . "\n";
    echo "Third: " . strpos($vv, "ZZ") . "\n";  # prints nothing...FALSE doesn't print!
    
    if (strpos($vv, "He") == FALSE ) echo "Wrong A\n";
    if (strpos($vv, "ZZ") == FALSE ) echo "Right B\n";
    if (strpos($vv, "He") !== FALSE ) echo "Right C\n";
    if (strpos($vv, "ZZ") === FALSE ) echo "Right D\n";
    
    print_r(FALSE); 
    print FALSE;
    echo "Where were they?\n";
?>