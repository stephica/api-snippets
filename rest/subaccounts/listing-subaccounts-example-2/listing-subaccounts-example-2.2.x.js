// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
let accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
let authToken = 'your_auth_token';
let client = require('twilio')(accountSid, authToken);

client.accounts.list({ friendlyName: 'MySubaccount' }, function(err, data) {
  data.accounts.forEach(function(account) {
    console.log(account.Status);
  });
});
