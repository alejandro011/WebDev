<html>

<head>
</head>

<body>
	<p>Change the contents of the text field and then tab away from the field to 
		trigger the change event. Do not use Enter or
		the form will get submitted.</p>
	
	<form id="target">
		<input type="text" name="one" value="Hello there" style="vertical-align: middle;" />
		<img id="spinner" src="spinner.gif" height="25" style="vertical-align: middle; display:none;">
	</form>

<hr/>
<div id="result"></div>
<hr/>

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript">

$('#target').change(function (event) {  // whenever a change happens execute function
	$('#spinner').show();
	var form = $('#target');
	var txt = form.find('input[name="one"]').val();  // value in txt is from the form input w/ name="one"
	console.log('Sending POST');
	
	$.post('autoecho.php', {  // the url we're going to send the post to
			'val': txt  // val is a post key and txt is the variable defined above
		},
		function (data) {  // data is the http response from autoecho.php (the post that comes back)
			console.log(data);
			$('#result').empty().append(data);
			$('#spinner').hide();
		}
	
	).error(function () {
		$('#target').css('background-color', 'red');
		alert("Dang!");
	});
});

</script>

</body>
