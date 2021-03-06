<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once '/path/to/vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token = "your_auth_token";

$client = new Client($sid, $token);

$events = $client->monitor->events->read(
    array('resourceSid' => 'PN4aa51b930717ea83c91971b86d99018f')
);

foreach ($events as $event) {
    echo $event->description;
}
