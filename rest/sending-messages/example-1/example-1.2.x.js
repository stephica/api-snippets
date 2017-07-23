// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
let accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
let authToken = 'your_auth_token';
let client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    body: 'Jenny please?! I love you <3',
    to: '+15558675309',
    from: '+14158141829',
    mediaUrl: 'http://www.example.com/hearts.png',
  },
  function(err, message) {
    process.stdout.write(message.sid);
  }
);
