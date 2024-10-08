<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $wood_color = htmlspecialchars($_POST['wood-color']);
    $size = htmlspecialchars($_POST['size']);
    $accessories = isset($_POST['accessories']) ? implode(", ", $_POST['accessories']) : 'None'; // Collect multiple accessories
    $address = htmlspecialchars($_POST['address']);

    // Prepare the email
    $to = 'saadezeina@hotmail.com';
    $subject = 'New Contact Form Submission';
    $message = "Name: $name\nPhone: $phone\nWood Color: $wood_color\nSize: $size\nAccessories: $accessories\nDelivery Address: $address";
    $headers = 'From: noreply@example.com' . "\r\n"; // Replace with your sender email

    // Send the email
    mail($to, $subject, $message, $headers);

    // Redirect or send a response
    echo "Thank you for your submission!";
}
?>
