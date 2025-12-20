<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "failed";
    exit;
}

$to = "info@cycity.space";
$subject = "New Contact Message";

// Sanitize Input
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$msg = trim($_POST["message"] ?? "");

if (empty($name) || empty($email) || empty($msg)) {
    echo "failed";
    exit;
}

$message = "You have received a new message from your website contact form:\n\n";
$message .= "Name: $name\n";
message .= "Email: $email\n";
$message .= "Phone: $phone\n\n";
$message .= "Message:\n$msg\n";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "sent";
} else {
    echo "failed";
}
?>
