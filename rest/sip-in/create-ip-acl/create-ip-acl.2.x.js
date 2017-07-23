// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
let accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
let authToken = 'your_auth_token';
let client = require('twilio')(accountSid, authToken);

client.sip.ipAccessControlLists.create(
  {
    friendlyName: 'My new acl',
  },
  function(err, ipAccessControlList) {
    process.stdout.write(ipAccessControlList.sid);
  }
);
