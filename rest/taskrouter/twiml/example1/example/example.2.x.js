// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
let twilio = require('twilio');
let express = require('express');
let app = express();

app.post('/enqueue_call', function(request, response) {
  let resp = new twilio.TwimlResponse();
  resp.enqueue({ workflowSid: 'WW0123456789abcdef0123456789abcdef' });

  response.setHeader('Content-Type', 'application/xml');
  response.write(resp.toString());
  response.end();
});

app.listen(8080);
