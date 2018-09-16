<!--
    To switch the method for sending data to the server from a get 
    request to a post request, we introduce the  method attr in the 
    form tag and give it a value of "post". 
-->

<p>Guessing game...</p>
<form method="post">
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" size="40" id="guess"/></p>
   <input type="submit"/>
</form>
<pre>
$_POST:
<?php
   print_r($_POST);
?>
$_GET:
<?php
   print_r($_GET);
?>
</pre>