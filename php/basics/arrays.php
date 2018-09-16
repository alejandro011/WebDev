<?php
    ## Associative Arrays:
    // Can be key => value or simply indexed by numbers

    $stuff = array("Hi", "There");
    echo $stuff[1], "\n";
    echo("\n");

    
    $stuff = array("name" => "Chuck",
                   "course" => "WA4E");
    echo $stuff["course"], "\n";
    echo("\n");

    ## Dumping an Array: the function print_r() 

    $something = array("name" => "Chuck",
                       "course" => "WA4E");
    echo("<pre>\n");
    print_r($something);
    echo("\n</pre>\n");
    echo("\n");

    ## var_dump vs. print_r

    $stuff = array("name" => "Chuck", 
                   "course" => "SI664"); 
    var_dump($stuff);  # a little more verbose than print_r
    echo("\n");

    $thing = FALSE;
    echo("One\n");
    print_r($thing); # doesn't print anything...
    echo("Two\n");
    var_dump($thing); # prints bool(false)
    echo("\n\n");

    ## Building Up an Array:

    $va = array();
    $va[] = "Hello"; # puts it at the end
    $va[] = "World"; # again, puts it at the end
    print_r($va);
    echo("\n");

    // Or,
    $za = array();
    $za["name"] = "Chuck";
    $za["course"] = "WA4E";
    print_r($za);
    echo("\n");

    ## Looping Through an Array:

    $stuff = array("name" => "Chuck",
                   "course" => "SI664");
    
    foreach($stuff as $k => $v ) {
       echo "Key=",$k," Val=",$v,"\n";
    }
    echo("\n");

    ## Doing the same but now with an indexed array:
    // Will work for non-compact arrays (e.g. with vals in indexes 2 and 4 only)
    
    $stuff = array("Chuck","SI664");
    
    foreach($stuff as $k => $v ) {
       echo "Key=",$k," Val=",$v,"\n";
    }
    echo("\n");

    ## Counted loop through an array:
    //Only works for compact arrays (with no missing entries)

    $stuff = array("Chuck","SI664");
    
    for($i=0; $i < count($stuff); $i++) {
       echo "I=",$i," Val=",$stuff[$i],"\n";
    }
    echo("\n");

    ## Arrays of Arrays:

    $products = array( 'paper' => array(
        'copier' => "Copier & Multipurpose",
        'inkjet' => "Inkjet Printer",
        'laser' => "Laser Printer",
        'photo' => "Photographic Paper"),
        
        'pens' => array(
        'ball' => "Ball Point", 
        'hilite' => "Highlighters", 
        'marker' => "Markers"),
        
        'misc' => array(
        'tape' => "Sticky Tape", 
        'glue' => "Adhesives", 
        'clips' => "Paperclips")
    );
    echo $products["pens"]["marker"];
    echo("\n\n");

    ## Array functions:

    ## Is a key present in an array?

    $za = array();
    $za["name"] = "Chuck";
    $za["course"] = "WA4E";
    
    if (array_key_exists('course',$za) ) {
        echo("Course exists\n");
    } else {
        echo("Course does not exist\n");
    }

    // isset() asks not only if the key is present but also asks if the value is not null
    // If the two are TRUE, then it returns TRUE
    echo isset($za['name']) ? "name is set\n" : "name is not set\n";
    echo isset($za['addr']) ? "addr is set\n" : "addr is not set\n";
    echo("\n");

    ## Null Coalescing operator:
    $za = array();
    $za["name"] = "Chuck";
    $za["course"] = "WA4E";
    
    // PHP >= 7.0.0 only
    $name = $za['name'] ?? 'not found';
    $addr = $za['addr'] ?? 'not found';
    echo("Name = $name\n");
    echo("Addr = $addr\n");

    // PHP < 7.0.0 equivalent
    $name = isset($za['name']) ? $za['name'] : 'not found';
    echo("Name = $name\n");
    echo("\n");

    ## count() and is_array() functions:

    $za = array();
    $za["name"] = "Chuck";
    $za["course"] = "WA4E";
    print "Count: " . count($za) . "\n";

    if (  is_array($za) ) {
        echo '$za is an array' . "\n";
    } else {
        echo '$za is not an array' . "\n";
    }
    echo("\n");

    ## sort(), ksort() and asort():

    $za = array();
    $za["name"] = "Chuck";
    $za["course"] = "WA4E";
    $za["topic"] = "PHP";
    print_r($za);
    sort($za);  # SORTS BY VALUE and changes the array: removes keys and introduces indexes
    print_r($za);
    echo("\n");

    $za = array();
    $za["name"] = "Chuck"; 
    $za["course"] = "WA4E"; 
    $za["topic"] = "PHP"; 
    print_r($za);
    
    ksort($za);  # SORTS BY KEY and doesn't change the array
    print_r($za); 
    asort($za); # SORTS BY VALUE and doesn't change the array
    print_r($za);
    echo("\n");

    ## explode() function: explode(delimiter, input string)
    
    $inp = "This is a sentence with seven words";
    $temp = explode(' ', $inp);
    print_r($temp);
    echo("\n");

    ## Arrays and URL Parameters:

    // Another place where we see arrays in php is in the parsing
    // of URLs parameters in the request-response cycle. For example:

    //    http://www.wa4e.com/code/arrays/get-01.php?x=2&y=4

    // At the end of the URL we see that there are two parameters: x=2 and y=4
    
    // What happens is that php puts these parameters into a super global array called $_GET.
    // This means that a channel of comunication opens up between the URL and the php code.

    





?>
