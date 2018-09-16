<?php
    ## Defining functions:
    function greet() {
        print "Hello\n";
    }
    greet();
    greet();
    echo("\n");

    ## Function calls:
    function greeting() {
        return "Hello";
    } 
    print greeting() . " Glenn\n";
    print greeting() . " Sally\n";
    echo("\n");

    ## Default arguments:
    function howdy($lang='es') {
        if ( $lang == 'es' ) return "Hola";
        if ( $lang == 'fr' ) return "Bonjour";
        return "Hello";
    }
    print howdy() . " Glenn\n";
    print howdy('fr') . " Sally\n";
    echo("\n");

    ## Call by value:
    function double($alias) { 
        $alias = $alias * 2; 
        return $alias;
    }
    $val = 10;
    $dval = double($val);
    echo "Value = $val Doubled = $dval\n";  # value doesn't change
    echo("\n");

    ## Call by reference:
    
    // Sometimes we want a function to change one of its arguments, so we
    // indicate that an argument is “by reference” using ( & ).
    
    function triple(&$realthing) {
        $realthing = $realthing * 3;
    }
    $val = 10;
    triple($val);
    echo "Triple = $val\n";
    echo("\n");

    // This is the case when we use the function sort(). 

    $fruits = array("lemon", "orange", "banana", "apple");
    sort($fruits);  // the original array gets changed 
    foreach ($fruits as $key => $val) {
        echo "fruits[" . $key . "] = " . $val . "\n";
    }   
    echo("\n");

    ## Scope and Modularity:

    ## Normal scope (isolated):
    function tryzap() {
        $val = 100;
    }
    $val = 10;
    tryzap();
    echo "TryZap = $val\n";
    echo("\n");

    ## Global Scope (shared):
    function dozap() {
        global $val;
        $val = 100;
    }
    $val = 10;
    dozap();
    echo "DoZap = $val\n";
    echo("\n");

    ## Including files in PHP:
    // include "header.php"; - Pull the fle in here
    // include_once "header.php"; - Pull the fle in here unless it has already been pulled in before
    // require "header.php"; - Pull in the fle here and die if it is missing
    // require_once "header.php"; - You can guess what this means...

?>