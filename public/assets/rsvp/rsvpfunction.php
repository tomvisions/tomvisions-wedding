<?php
    $to = "websitetemplatesthatrock@gmail.com"; // put your email address here
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "RSVP from: $name @ $from"; // subject and the name and email of the person

    $fields = array();
    $fields{"name"} = "Name";
    $fields{"email"} = "Email";
    $fields{"guests"} = "Guests";
    $fields{"attending"} = "Attending";
    $fields{"phone"} = "Phone";
    $fields{"message"} = "Message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n\n",$b,$_REQUEST[$a]); }

   //$send = mail($to, $subject, $body, $headers);
    
     if(mail($to, $subject, $body, $headers)){
        echo '
        <h3 class="clearfix text-center">
        <span class="ti ti-heart center-block"></span><br>
        Your RSVP was sent successfully. We&rsquo;ll see you there!
        </h3>';
           } else {
        echo '<h3 class="clearfix text-center">
        <span class="ti ti-alert center-block"></span><br>
        Something went wacky with the email server, just email us directly. Sorry for the issue.
        </h3>';
    }    

?>