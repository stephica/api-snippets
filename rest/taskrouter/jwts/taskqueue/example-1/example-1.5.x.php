<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once '/path/to/vendor/autoload.php'; // Loads the library
use Twilio\Jwt\TaskRouter\TaskQueueCapability;

// Your Account Sid and Auth Token from twilio.com/user/account
$accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$authToken = "your_auth_token";
$workspaceSid = "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$taskQueueSid = "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

$capability = new TaskQueueCapability($accountSid, $authToken, $workspaceSid, $taskQueueSid);
$capability->allowFetchSubresources();
$capability->allowUpdates();
$token = $capability->generateToken();
// By default, tokens are good for one hour.
// Override this default timeout by specifiying a new value (in seconds).
// For example, to generate a token good for 8 hours:
$workerToken = $capability->generateToken(28800);  // 60 * 60 * 8
