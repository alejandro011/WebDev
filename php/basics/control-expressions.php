<?php

## Conditional - if:
//  Logical operators (== != < > <= >= (&& (and)) (|| (or)) (! (not)) )

    $ans = 42;
    if ( $ans == 42 ) {
       print "Hello world!\n";
    } else {
       print "Wrong answer\n";
    } 
    echo("\n");

## Conditional - elseif:

    $x = 7;
    if ( $x < 2 ) {
        print "Small\n";
    } elseif ( $x < 10 ) {
        print "Medium\n";
    } else {
        print "LARGE\n";
    }
    print "All done\n";
    echo("\n");

## while loop:
// A while loop is a “zero-trip” loop with the test at the top 
// before the frst iteration starts.    

    $fuel = 10;
    while ($fuel > 1) {
        print "fuel = $fuel\n";
        $fuel = $fuel - 1;
    }
    echo("\n");

## do-while loop:
// A do-while loop is a “one-trip” loop with the test at the 
// bottom after the frst iteration completes.

    $count = 1;
    do {
        echo "$count times 5 is " . $count * 5;
        echo "\n";
    } while (++$count <= 5);
    echo("\n");

## for loop:

    for($count=1; $count<=6; $count++ ) {
        echo "$count times 6 is " . $count * 6;
        echo "\n";
    }
    echo("\n");

## break-statement:
// The break statement ends the current loop and jumps to the statement 
// immediately following the loop.

    for($count=1; $count<=600; $count++ ) {
        if ( $count == 5 ) break;
            echo "Count: $count\n";
    }
    echo "Done\n";
    echo("\n");

## continue-statement:
// The continue statement ends the current iteration. jumps to the top of
// the loop, and starts the next iteration.

    for($count=1; $count<=10; $count++ ) {
        if ( ($count % 2) == 0 ) continue;
            echo "Count: $count\n";
    }
    echo "Done\n";
    echo("\n");

    

    
?>