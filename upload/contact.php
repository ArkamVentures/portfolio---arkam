<?php
/**
 * Contact Form Handler
 * Compatible with InfinityFree hosting and other shared hosting platforms
 * 
 * Instructions:
 * 1. Update the $to email address below with your actual email
 * 2. Upload this file to the same directory as your index.html
 * 3. Test the form after uploading
 */

header('Content-Type: application/json');

// Allow requests from the same origin
$allowed_origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header("Access-Control-Allow-Origin: $allowed_origin");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8')) : '';
$email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8')) : '';
$subject = isset($_POST['subject']) ? trim(htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8')) : '';
$message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// Validate name length
if (strlen($name) < 2 || strlen($name) > 100) {
    echo json_encode(['success' => false, 'message' => 'Name must be between 2 and 100 characters']);
    exit;
}

// Validate subject length
if (strlen($subject) < 2 || strlen($subject) > 200) {
    echo json_encode(['success' => false, 'message' => 'Subject must be between 2 and 200 characters']);
    exit;
}

// Validate message length
if (strlen($message) < 10 || strlen($message) > 5000) {
    echo json_encode(['success' => false, 'message' => 'Message must be between 10 and 5000 characters']);
    exit;
}

// ========================
// EMAIL CONFIGURATION
// ========================
// IMPORTANT: Replace with your actual email address
$to = "your-email@example.com";  // <-- UPDATE THIS EMAIL ADDRESS

// Email subject
$email_subject = "Portfolio Contact: $subject";

// Email body
$email_body = "You have received a new message from your portfolio website.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n\n";
$email_body .= "---\n";
$email_body .= "Sent from: " . (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'Portfolio') . "\n";
$email_body .= "Date: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Attempt to send email
$mail_sent = mail($to, $email_subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    // Log error for debugging (on production, check your server error logs)
    error_log("Portfolio contact form failed to send email. Check mail server configuration.");
    
    echo json_encode([
        'success' => false, 
        'message' => 'Oops! Something went wrong. Please try again later.'
    ]);
}
?>
