<!--Model View Controller: ...when we do computation, when we talk to the database, when we generate output -->

<?php
    //MODEL - Coding at the top: Completely process incoming data (if any) - produce no output. No html
    $oldguess = '';
    $message = false;
    if ( isset($_POST['guess']) ) {
        // Trick for integer / numeric parameters
        $oldguess = $_POST['guess'] + 0;
        if ( $oldguess == 42 ) {
            $message = "Great job!";
        } else if ( $oldguess < 42 ) {
            $message = "Too low";
        } else  {
            $message = "Too high...";
        }
    }
?>
<!-- CONTEXT - variables that get passed from the MODEL to the VIEW -->
<html>
<!-- VIEW - Template at the bottom: produce the output page. No database -->
<head>
    <title>A Guessing game</title>
</head>
<body style="font-family: sans-serif;">
<p>Guessing game...</p>
<?php
   if ( $message !== false )  {
        echo("<p>$message</p>\n");
    }
?>
<form method="post">
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" id="guess" size="40"
     value="<?= htmlentities($oldguess) ?>"/></p>
   <input type="submit"/>
</form>
</body>
