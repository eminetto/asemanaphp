<?php

	// Configuration 
    $to = "name@example.com"; // Your email address. 
    $subject = "New subscriber via the Signup Landing Page"; // Email subject line 
    
    $from = $_REQUEST['subscribe_email']; 
    $name ="New subscriber";
    $headers = "From: $from";

    $body = "Subscriber email address:\n\n".$from;  

    $send = mail($to, $subject, $body, $headers);

?>
