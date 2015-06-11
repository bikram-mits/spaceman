'use strict'

angular.module('spacemanApp')
.controller('MainCtrl', function($scope, $meteor) {
  $scope.loading = true;
  $meteor.call('getMe').then(function(res){
   $scope.imageDetail = JSON.parse(res.result)
   console.log(res)
   $scope.loading = false;

  })
});