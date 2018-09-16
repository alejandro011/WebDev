<?php
if ( !isset($_POST['val']) ) {
	return;
}
sleep(1);
echo('You sent: '.$_POST['val']);  // just takes the post data and echo's it
?>

