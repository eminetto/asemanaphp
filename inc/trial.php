<?php

	// Configuration 
    $to = "name@example.com"; // Your email address. 
    $subject = "New trial signup via the Signup Landing Page"; // Email subject line 
    
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];
    $message = $_REQUEST['message'];
    $headers = "From: $from";

    $fields = array();
    $fields{"name"} = "Name";
    $fields{"email"} = "Email";
    $fields{"phone"} = "Phone";
    $fields{"message"} = "Message";

    $body = "Details:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
