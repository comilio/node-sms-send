// Check status of sended message
const SMS = require('../')

const sms = new SMS('nodejs-dev', 'j89w437uu')

sms.status('A95455F7031140769030CCA81E764C5F')
  .then(body => console.log(body)) // returns [ { phone_number: '+393401486484', status: 'Sent' } ]
  .catch(err => console.log(err.message))