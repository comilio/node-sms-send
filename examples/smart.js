// Send sms with Smart or SmartPro type
const SMS = require('../')

const sms = new SMS('nodejs-dev', 'j89w437uu')

sms.send('+393401486484', 'Hello!', 'Smart', 'Sender')
  .then(body => console.log(body)) // returns { message_id: 'string' }
  .catch(err => console.log(err.message))