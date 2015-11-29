var mongoose = require('mongoose')

var messageSchema = {
  texto : String,
  fecha : Date
}

module.exports = mongoose.model('message', messageSchema)
