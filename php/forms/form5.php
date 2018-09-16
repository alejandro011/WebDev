<!-- 
    The problem posed in form4.php gets solved by introducing the 
    the function htmlentities(). 
-->

<?php
   $oldguess = isset($_POST['guess']) ? $_POST['guess'] : '';
?>
<p>Guessing game...</p>
<form method="post">
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" id="guess" 
      size="40" value="<?= htmlentities($oldguess) ?>" /></p>
   <input type="submit"/>
</form>
<pre>
$_POST:
<?php
   print_r($_POST);
?>
</pre>
