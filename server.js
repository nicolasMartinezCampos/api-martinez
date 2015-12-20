var express = require('express');
    bodyParser = require('body-parser')
    app = express();
    router = express.Router();
    mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/api-martinez");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var Message = require('./models/messages.js');

router.route('/messages')
    .get(function(req, res){
        Message.find(function(err, messages){
          if(err) res.send(err);
          res.send(messages);
        })
    })
    .post(function(req,res){
        var message = new Message(req.body);
        console.log(message);
        message.save(function(err, message){
            if(err) res.send(err);
            res.send(message);
        });
    });

app.use('/api', router);

app.use(express.static('public'))

app.listen(3000, function(){
  console.log("empezando la magia");
});
