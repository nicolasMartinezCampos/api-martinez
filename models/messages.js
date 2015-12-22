var mongoose = require('mongoose')

var messageSchema = {
  texto : String,
  fecha : Date,
  id    : String
}

module.exports = mongoose.model('message', messageSchema)
