<?php
 
if($_POST) {
    $firstname = "";
    $visitor_email = "";
    $email_title = "asunto por defecto";    
    $subject = "";

    $recipient = "artyko@mail.com";

    if(isset($_POST['firstname'])) {
      $firstname = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
   
     
    if(isset($_POST['subject'])) {
        $subject = htmlspecialchars($_POST['subject']);
    }
     
   
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
     
    if(mail($recipient, $email_title, $subject, $headers)) {
        echo "<p>Gracias $firstname. En cuanto podamos nos pondremos en contacto contigo. Gracias;).</p>";
    } else {
        echo '<p>Lo siento no hemos podido enciar el correo ¿quizá apdemos hablar por tlf 685976417? gracias.</p>';
    }
     
} else {
    echo '<p>Vaya.... parece que algo ha salido mal... intentalo otra vez por favor, gracias.</p>';
}
 
?>