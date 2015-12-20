angular.module("messageApp")
.factory("messageSrvc", function($http){
  var message = {}

  message.getAll = function(){
    return $http.get('/api/messages')
  }

  return message
})
