let express = require('express');
let router = express.Router();
let twilio = require('twilio');

// POST: '/voice/handle-gather'
router.post('/handle-gather', twilio.webhook({ validate: false }), function(
  request,
  response
) {
  let selectedOption = request.body.Digits;
  let twiml = new twilio.TwimlResponse();

  if (selectedOption == '1') {
    // Dial a new person
    twiml.dial('+13105551212');
    twiml.say('The call failed or the remote party hung up. Goodbye.');
    response.send(twiml);
  } else if (selectedOption == '2') {
    // Record your message
    twiml.say('Record your message after the tone.');
    twiml.record({
      action: '/voice/handle-record',
      maxLength: '30',
    });
    response.send(twiml);
  }
  response.send(redirectWelcome());
});

function redirectWelcome() {
  let twiml = new twilio.TwimlResponse();
  twiml.say('Returning to the main menu', {
    voice: 'alice',
    language: 'en-GB',
  });
  twiml.redirect('/voice');
  return twiml;
}

module.exports = router;
