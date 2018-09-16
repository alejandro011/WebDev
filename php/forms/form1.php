
<!--
* the type attr tells the browser that the input is going to be text
* the name attribute tells the browser how to submit (the name of the variable (key)) 
  the data that we're going to submit to the server 
* size sets a max size for the the text input
* id (css) has to do with semantically marking the label for accessibility 
-->   

<p>Guessing game...</p>
<form>
   <p><label for="guess">Input Guess</label>
   <input type="text" name="guess" size="40" id="guess"/></p>
   <input type="submit"/>
</form>