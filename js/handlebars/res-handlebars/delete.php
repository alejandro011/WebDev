<?php
// Make the database connection and leave it in the variable $pdo
require_once 'pdo.php';
require_once 'util.php';

session_start();

// If the user is not logged in redirect back to index.php
// with an error
if ( ! isset($_SESSION['user_id']) ) {
    die("ACCESS DENIED");
    return;
}

// If the user requested cancel go back to index.php
if ( isset($_POST['cancel']) ) {
    header('Location: index.php');
    return;
}

// Make sure the REQUEST parameter is present
if ( ! isset($_REQUEST['profile_id']) ) {
    $_SESSION['error'] = "Missing profile_id";
    header('Location: index.php');
    return;
}

// Load up the profile in question
$stmt = $pdo->prepare('SELECT * FROM Profile
    WHERE profile_id = :prof AND user_id = :uid');
$stmt->execute(array( ':prof' => $_REQUEST['profile_id'], 
    ':uid' => $_SESSION['user_id']));
$profile = $stmt->fetch(PDO::FETCH_ASSOC);
if ( $profile === false ) {
    $_SESSION['error'] = "Could not load profile";
    header('Location: index.php');
    return;
}

// Handle the incoming data
if ( isset($_POST['delete']) ) {

    $stmt = $pdo->prepare('DELETE FROM Profile
        WHERE profile_id = :prof AND user_id = :uid');
    $stmt->execute(array( ':prof' => $_REQUEST['profile_id'], 
        ':uid' => $_SESSION['user_id']));
    $_SESSION['success'] = "Profile deleted";
    header("Location: index.php");
    return;
}

?>
<!DOCTYPE html>
<html>
<head>
<title>Dr. Chuck's Profile Add</title>
<?php require_once "head.php"; ?>
</head>
<body>
<div class="container">
<?php
flashMessages();
?>
<h1>Deleteing Profile</h1>
<form method="post" action="delete.php">
<p>First Name:
<?= htmlentities($profile['first_name']); ?>
</p>
<p>Last Name:
<?= htmlentities($profile['last_name']); ?>
</p>
<input type="hidden" name="profile_id"
value="<?= htmlentities($_REQUEST['profile_id']); ?>"
/>
<input type="submit" name="delete" value="Delete">
<input type="submit" name="cancel" value="Cancel">
</p>
</form>
</div>
</body>
</html>
