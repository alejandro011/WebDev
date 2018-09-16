<!--
    Persisting form data:

    When we submit forms and there is an error, we just expect that the 
    data will remain in the form when the page is redisplayed. The 
    application needs to make sure to put the previous values back into the form.

    To achieve this we introduce the variable $oldguess. At the begining of the php  
    code, we can see that we are asking if $_POST['guess'] is set and if is already set, we 
    extract its value and store it in $oldguess. 

    Moving to the form tag, we see that its input has a default value equal to $oldguess.
    So, this means that whenever the form sends data via post, the value that was send will 
    be shown again in the form part of the html document.

    Note: in the default value of the form there is implicit an echo statement
    &<;?= $oldguess ?> 
    
    Is the same as
    
    &<;?php echo($oldguess); ?>

    Although this is sometimes the expected behaviour of web pages, this violates
    the most fundamental rule of php application security. For fix see form5.php
-->

<?php
   $oldguess = isset($_POST['guess']) ? $_POST['guess'] : '';
?>
<p>Guessing game...</p>
<form method="post">
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" id="guess" 
      size="40" value="<?= $oldguess ?>" /></p>
   <input type="submit"/>
</form>
<pre>
$_POST:
<?php
   print_r($_POST);
?>
</pre>
