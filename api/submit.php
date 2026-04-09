<?php
/**
 * GI-SMART Admission Form – GoDaddy / PHP backend
 * Upload this file to your hosting root (e.g. public_html/submit.php)
 * Test: https://gi-smart.com/submit.php?ping=1
 */
error_reporting(0);
ini_set('display_errors', '0');
@ini_set('log_errors', '1');
@ini_set('max_execution_time', '90');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if (function_exists('ob_start')) { ob_start(); }
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
function sendJson($data) {
    if (function_exists('ob_get_level') && ob_get_level()) { @ob_end_clean(); }
    http_response_code(200);
    echo json_encode($data);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    sendJson(['ok' => true, 'message' => 'submit.php is running. Use POST to submit the form.']);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJson(['success' => false, 'message' => 'Method not allowed']);
}

function sendSmtp($to, $subject, $fullMessage, $fromEmail, $fromName, $replyTo = '') {
    try {
        $host = defined('SMTP_HOST') ? SMTP_HOST : 'smtp.gmail.com';
        $port = (int) (defined('SMTP_PORT') ? SMTP_PORT : 587);
        $user = defined('SMTP_USER') ? trim((string)SMTP_USER) : '';
        $pass = defined('SMTP_PASS') ? str_replace(' ', '', (string)SMTP_PASS) : '';
        if ($user === '' || $pass === '') return false;
        $errno = 0;
        $errstr = '';
        $useSsl = ($port === 465);
        $scheme = $useSsl ? 'ssl' : 'tcp';
        $fp = @stream_socket_client("{$scheme}://{$host}:{$port}", $errno, $errstr, 15, STREAM_CLIENT_CONNECT);
        if (!$fp) return false;
        @fgets($fp, 515);
        @fputs($fp, "EHLO localhost\r\n");
        $response = '';
        while ($line = @fgets($fp, 515)) { $response .= $line; if (strlen($line) < 4 || substr($line, 3, 1) === ' ') break; }
        if (!$useSsl && $port == 587 && strpos($response, 'STARTTLS') !== false) {
            @fputs($fp, "STARTTLS\r\n");
            @fgets($fp, 515);
            $crypto = defined('STREAM_CRYPTO_METHOD_TLS_CLIENT') ? STREAM_CRYPTO_METHOD_TLS_CLIENT : 2;
            if (!@stream_socket_enable_crypto($fp, true, $crypto)) { @fclose($fp); return false; }
            @fputs($fp, "EHLO localhost\r\n");
            while ($line = @fgets($fp, 515)) { if (strlen($line) < 4 || substr($line, 3, 1) === ' ') break; }
        }
        @fputs($fp, "AUTH LOGIN\r\n");
        @fgets($fp, 515);
        @fputs($fp, base64_encode($user) . "\r\n");
        @fgets($fp, 515);
        @fputs($fp, base64_encode($pass) . "\r\n");
        $auth = @fgets($fp, 515);
        if (!$auth || substr($auth, 0, 3) !== '235') { @fclose($fp); return false; }
        @fputs($fp, "MAIL FROM:<" . $fromEmail . ">\r\n");
        @fgets($fp, 515);
        @fputs($fp, "RCPT TO:<" . $to . ">\r\n");
        @fgets($fp, 515);
        @fputs($fp, "DATA\r\n");
        @fgets($fp, 515);
        $replyHeader = ($replyTo !== '') ? "\r\nReply-To: " . $replyTo : '';
        $data = "From: " . $fromName . " <" . $fromEmail . ">" . $replyHeader . "\r\nTo: " . $to . "\r\nSubject: " . $subject . "\r\n" . $fullMessage . "\r\n.\r\n";
        @fputs($fp, $data);
        $result = @fgets($fp, 515);
        @fputs($fp, "QUIT\r\n");
        @fclose($fp);
        return $result && substr($result, 0, 3) === '250';
    } catch (Exception $e) {
        return false;
    }
}

function sendResend($apiKey, $to, $subject, $html, $fromEmail, $fromName, $attachments = []) {
    $payload = [
        'from' => $fromName . ' <' . $fromEmail . '>',
        'to' => [$to],
        'subject' => $subject,
        'html' => $html,
    ];
    if (!empty($attachments)) {
        $payload['attachments'] = [];
        foreach ($attachments as $att) {
            $content = @file_get_contents($att['path']);
            if ($content !== false)
                $payload['attachments'][] = ['filename' => $att['name'], 'content' => base64_encode($content)];
        }
    }
    $ctx = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Authorization: Bearer " . $apiKey . "\r\nContent-Type: application/json\r\n",
            'content' => json_encode($payload),
            'timeout' => 20,
        ],
    ]);
    $res = @file_get_contents('https://api.resend.com/emails', false, $ctx);
    if ($res === false) return false;
    $data = json_decode($res, true);
    return isset($data['id']);
}

try {
if (!is_array($_POST)) { $_POST = []; }
if (!is_array($_FILES)) { $_FILES = []; }

// --- CONFIG (edit these) ---
define('NOTIFICATION_TO', 'jasmeet@landmarkglobal.co.in');
define('FROM_EMAIL', 'info@gi-smart.com');
define('FROM_NAME', 'GI-SMART Admissions');

// Resend (free 3000/month) – works on GoDaddy, no SMTP. Get API key at resend.com
define('RESEND_API_KEY', 're_YmVsciUV_NYnQfqLVXTsCGoDacz1fCsGp'); // Resend – leave empty to use SMTP/mail below

// GoDaddy/cPanel mail (used only if RESEND_API_KEY is empty)
define('USE_SMTP', true);
define('SMTP_HOST', 'mail.gi-smart.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'info@gi-smart.com');
define('SMTP_PASS', 'YOUR_EMAIL_ACCOUNT_PASSWORD'); // cPanel → Email Accounts → info@gi-smart.com password

// --- Labels (same as frontend) ---
$LABELS = [
    'firstName' => 'First Name',
    'lastName' => 'Last Name',
    'dateOfBirth' => 'Date of Birth',
    'gender' => 'Gender',
    'nationality' => 'Nationality',
    'passportNumber' => 'Passport Number',
    'passportExpiryDate' => 'Passport Expiry',
    'email' => 'Email',
    'phone' => 'Phone',
    'address' => 'Address',
    'city' => 'City',
    'country' => 'Country',
    'zipCode' => 'Zip Code',
    'programOfInterest' => 'Program of Interest',
    'intake' => 'Intake',
    'previousEducationLevel' => 'Previous Education',
    'institutionName' => 'Institution Name',
    'graduationYear' => 'Graduation Year',
    'gpaPercentage' => 'GPA / %',
    'englishProficiencyTest' => 'English Test',
    'testScore' => 'Test Score',
    'workExperience' => 'Work Experience',
    'campusRankFirst' => 'Campus (1st)',
    'programRankFirst' => 'Program (1st choice)',
    'programRankSecond' => 'Program (2nd choice)',
    'programRankThird' => 'Program (3rd choice)',
    'interestTwoPlusTwo' => '2+2 Option (Canada)',
    'additionalInformation' => 'Additional Info',
    'cvResume' => 'CV/Resume',
    'passport' => 'Passport',
    'academicTranscripts' => 'Transcripts',
    'academicCertificates' => 'Certificates',
    'englishTestCertificate' => 'English Certificate',
];

$INTAKE = ['fall-2026' => 'Fall 2026 (September 2026)', 'spring-2027' => 'Spring 2027', 'fall-2027' => 'Fall 2027'];
$PROGRAM = ['bba' => 'BBA – Bachelor of Business Administration', 'bcis' => 'BCIS – Bachelor of Computer Information Systems', 'baid' => 'BAID – Bachelor of Artificial Intelligence Design'];
$CAMPUS = ['paris' => 'Paris, France', 'karlsruhe' => 'Karlsruhe, Germany', 'bucharest' => 'Bucharest, Romania', 'dubai' => 'Dubai'];

$FILE_KEYS = ['cvResume', 'passport', 'academicTranscripts', 'academicCertificates', 'englishTestCertificate'];

function esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
}

function getVal($data, $key, $FILE_KEYS, $INTAKE, $PROGRAM, $CAMPUS) {
    if (in_array($key, $FILE_KEYS)) {
        return isset($data[$key]['name']) ? $data[$key]['name'] : '(not uploaded)';
    }
    $v = $data[$key] ?? '';
    if ($v === '' || $v === null) return '';
    if ($key === 'interestTwoPlusTwo' || $key === 'acknowledgedFeesAndRefund' || $key === 'agreeToPrivacy') {
        return ($v === 'true' || $v === true) ? 'Yes' : 'No';
    }
    if ($key === 'intake') return $INTAKE[$v] ?? $v;
    if ($key === 'programOfInterest') return $PROGRAM[$v] ?? $v;
    if ($key === 'campusRankFirst') return $CAMPUS[$v] ?? $v;
    if (strpos($key, 'programRank') === 0) return $PROGRAM[$v] ?? $v;
    return (string)$v;
}

function getLabel($key, $LABELS) {
    return $LABELS[$key] ?? ucfirst(preg_replace('/([A-Z])/', ' $1', $key));
}

// --- Build body from POST + FILES (safe for GoDaddy) ---
$body = [];
if (!empty($_POST)) {
    foreach ($_POST as $k => $v) {
        $body[$k] = is_string($v) ? $v : (string)$v;
    }
}
foreach ($FILE_KEYS as $k) {
    $body[$k] = ['name' => '', 'tmp_name' => '', 'size' => 0];
    if (!empty($_FILES[$k]) && isset($_FILES[$k]['error']) && $_FILES[$k]['error'] === UPLOAD_ERR_OK && !empty($_FILES[$k]['tmp_name']) && is_uploaded_file($_FILES[$k]['tmp_name'])) {
        $body[$k] = ['name' => isset($_FILES[$k]['name']) ? $_FILES[$k]['name'] : '', 'tmp_name' => $_FILES[$k]['tmp_name'], 'size' => (int)(isset($_FILES[$k]['size']) ? $_FILES[$k]['size'] : 0)];
    }
}

$firstName = $body['firstName'] ?? '';
$lastName = $body['lastName'] ?? '';
$email = $body['email'] ?? '';
$studentEmail = (is_string($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) ? $email : '';
$applicationId = 'GIS-' . substr((string)time(), -8);

// --- Build HTML email ---
$personal = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'nationality', 'passportNumber', 'passportExpiryDate'];
$contact = ['email', 'phone', 'address', 'city', 'country', 'zipCode'];
$academic = ['programOfInterest', 'intake', 'previousEducationLevel', 'institutionName', 'graduationYear', 'gpaPercentage', 'englishProficiencyTest', 'testScore', 'workExperience'];
$preferences = ['campusRankFirst', 'programRankFirst', 'programRankSecond', 'programRankThird', 'interestTwoPlusTwo'];
$extra = ['additionalInformation'];

$row = function($label, $value) {
    if ($value === '') return '';
    return '<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:40%;">' . esc($label) . '</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:13px;">' . esc($value) . '</td></tr>';
};
$sectionTitle = function($title) {
    return '<tr><td colspan="2" style="padding:12px 12px 8px;color:#0a1628;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">' . esc($title) . '</td></tr>';
};

$rows = '';
$getValClosure = function($key) use ($body, $FILE_KEYS, $INTAKE, $PROGRAM, $CAMPUS) {
    return getVal($body, $key, $FILE_KEYS, $INTAKE, $PROGRAM, $CAMPUS);
};
$getLabelClosure = function($key) use ($LABELS) { return getLabel($key, $LABELS); };

$rows .= $sectionTitle('Personal Information');
foreach ($personal as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }
$rows .= $sectionTitle('Contact Information');
foreach ($contact as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }
$rows .= $sectionTitle('Academic Information');
foreach ($academic as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }
$rows .= $sectionTitle('Campus & Program Preferences');
foreach ($preferences as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }
$rows .= $sectionTitle('Documents (uploaded)');
foreach ($FILE_KEYS as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }
$rows .= $sectionTitle('Additional Information');
foreach ($extra as $k) { $rows .= $row($getLabelClosure($k), $getValClosure($k)); }

$html = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#f3f4f6;font-family:sans-serif;">';
$html .= '<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">';
$html .= '<div style="background:linear-gradient(135deg,#0a1628 0%,#1a2332 100%);padding:24px;text-align:center;">';
$html .= '<div style="color:#ffd700;font-size:11px;letter-spacing:2px;">ADMISSIONS</div>';
$html .= '<h1 style="color:#fff;font-size:24px;margin:0;">GI-SMART</h1>';
$html .= '<p style="color:rgba(255,255,255,0.85);font-size:13px;margin:8px 0 0;">New application received</p></div>';
$html .= '<div style="padding:0 0 24px;"><table style="width:100%;border-collapse:collapse;">' . $rows . '</table></div>';
$html .= '<div style="background:#f9fafb;padding:16px 24px;text-align:center;border-top:1px solid #e5e7eb;">';
$html .= '<p style="margin:0;color:#6b7280;font-size:12px;">This is an automated notification from the GI-SMART admissions form.</p></div></div></body></html>';

$subject = 'GI-SMART Application [' . $applicationId . ']: ' . $firstName . ' ' . $lastName . ' (' . $email . ')';
$studentSubject = 'GI-SMART Application Received (' . $applicationId . ')';
$studentHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;background:#f3f4f6;font-family:sans-serif;">'
  . '<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">'
  . '<div style="background:linear-gradient(135deg,#0a1628 0%,#1a2332 100%);padding:24px;text-align:center;">'
  . '<h1 style="color:#fff;font-size:22px;margin:0;">GI-SMART</h1>'
  . '<p style="color:rgba(255,255,255,0.9);margin:8px 0 0;">Application Received</p>'
  . '</div>'
  . '<div style="padding:24px;color:#111827;">'
  . '<p>Dear ' . esc($firstName !== '' ? $firstName : 'Applicant') . ',</p>'
  . '<p>Thank you for submitting your application to GI-SMART.</p>'
  . '<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;margin:14px 0;">'
  . '<div style="font-size:13px;color:#6b7280;">Application ID</div>'
  . '<div style="font-size:18px;font-weight:700;color:#0a1628;">' . esc($applicationId) . '</div>'
  . '</div>'
  . '<p>Our admissions team has received your details and will contact you shortly.</p>'
  . '<p style="margin-top:24px;">Regards,<br/>GI-SMART Admissions</p>'
  . '</div></div></body></html>';

// --- Attachments (only if file exists and readable) ---
$attachments = [];
foreach ($FILE_KEYS as $k) {
    if (!empty($body[$k]['tmp_name']) && !empty($body[$k]['name']) && is_uploaded_file($body[$k]['tmp_name']) && $body[$k]['size'] > 0 && is_readable($body[$k]['tmp_name'])) {
        $attachments[] = ['path' => $body[$k]['tmp_name'], 'name' => $body[$k]['name']];
    }
}

// --- Send email ---
$boundary = '----=_Part_' . md5(uniqid());
$headers = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n\r\n";
$msg = "--" . $boundary . "\r\n";
$msg .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$msg .= $html . "\r\n";
foreach ($attachments as $att) {
    $content = @file_get_contents($att['path']);
    if ($content === false) continue;
    $msg .= "--" . $boundary . "\r\n";
    $msg .= "Content-Type: application/octet-stream; name=\"" . $att['name'] . "\"\r\n";
    $msg .= "Content-Transfer-Encoding: base64\r\n";
    $msg .= "Content-Disposition: attachment; filename=\"" . $att['name'] . "\"\r\n\r\n";
    $msg .= chunk_split(base64_encode($content)) . "\r\n";
}
$msg .= "--" . $boundary . "--";

$sent = false;
try {
    $resendKey = defined('RESEND_API_KEY') ? trim((string)RESEND_API_KEY) : '';
    if ($resendKey !== '' && strpos($resendKey, 're_') === 0) {
        $sent = sendResend($resendKey, NOTIFICATION_TO, $subject, $html, FROM_EMAIL, FROM_NAME, $attachments);
        if ($sent && $studentEmail !== '') {
            @sendResend($resendKey, $studentEmail, $studentSubject, $studentHtml, FROM_EMAIL, FROM_NAME, []);
        }
    }
    if (!$sent && USE_SMTP && defined('SMTP_USER') && SMTP_USER !== '' && defined('SMTP_PASS') && SMTP_PASS !== '' && strpos((string)SMTP_PASS, 'your-16-char') === false) {
        $fullMessage = "MIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n\r\n" . $msg;
        $smtpFrom = SMTP_USER;
        $replyTo = (defined('FROM_EMAIL') && FROM_EMAIL !== '' && FROM_EMAIL !== SMTP_USER) ? FROM_EMAIL : '';
        $sent = sendSmtp(NOTIFICATION_TO, $subject, $fullMessage, $smtpFrom, FROM_NAME, $replyTo);
        if ($sent && $studentEmail !== '') {
            $studentBoundary = '----=_Part_' . md5(uniqid('student', true));
            $studentMessage = "--" . $studentBoundary . "\r\n"
                . "Content-Type: text/html; charset=UTF-8\r\n\r\n"
                . $studentHtml . "\r\n"
                . "--" . $studentBoundary . "--";
            $studentFullMessage = "MIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"" . $studentBoundary . "\"\r\n\r\n" . $studentMessage;
            @sendSmtp($studentEmail, $studentSubject, $studentFullMessage, $smtpFrom, FROM_NAME, $replyTo);
        }
    }
    if (!$sent) {
        $sent = @mail(NOTIFICATION_TO, $subject, $msg, $headers);
        if ($sent && $studentEmail !== '') {
            $studentHeaders = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";
            $studentHeaders .= "MIME-Version: 1.0\r\n";
            $studentHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
            @mail($studentEmail, $studentSubject, $studentHtml, $studentHeaders);
        }
    }
} catch (Exception $e) {
    $sent = false;
}

if ($sent) {
    sendJson(['success' => true, 'message' => 'Application submitted successfully. Check spam folder if you don\'t see the email.']);
} else {
    sendJson(['success' => false, 'message' => 'Email could not be sent. Add RESEND_API_KEY in submit.php (get free key at resend.com) or check SMTP/cPanel settings.']);
}
} catch (Throwable $e) {
    sendJson(['success' => false, 'message' => 'Server error. Please try again or contact us.']);
}
