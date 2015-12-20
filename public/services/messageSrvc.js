angular.module("messageApp")
.factory("messageSrvc", function($http){
  var message = {}

  message.getAll = function(){
    return $http.get('/api/messages')
  }
  message.save = function(message){
    return $http.post('/api/messages', message)
  }

  return message
})
