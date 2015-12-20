angular.module("messageApp", ["ngRoute"])

.controller("mainCtrl", function($scope, messageSrvc){
  $scope.messages = [];

  messageSrvc.getAll().success(function(data){
    $scope.messages = data;
  })
})
