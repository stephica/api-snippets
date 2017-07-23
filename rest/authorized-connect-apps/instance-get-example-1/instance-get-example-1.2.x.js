// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
let accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
let authToken = 'your_auth_token';
let client = require('twilio')(accountSid, authToken);

client
  .authorizedConnectApps('CN47260e643654388faabe8aaa18ea6756')
  .get(function(err, authorizedApp) {
    console.log(authorizedApp.connectAppHomepageUrl);
  });
