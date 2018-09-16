<!-- 
    Inside the php code we can take a look at the input values that the user introduces via the form.
    To do that php has super global variables. In this case we use $_GET. This variable holds the key-value pair 
    that is introduced in the url (the query string after the question mark in the url) after the user submits the 
    form. 
-->

<p>Guessing game...</p>
<form>
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" size="40" id="guess"/></p>
   <input type="submit"/>
</form>
<pre>
$_GET:
<?php
   print_r($_GET);
?>
</pre>