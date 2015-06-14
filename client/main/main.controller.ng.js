'use strict'

angular.module('spacemanApp')
.controller('MainCtrl',['$scope','$meteor','$mdDialog', '$rootScope', function($scope, $meteor, $mdDialog, $rootScope) {
  $scope.loading = true;
  $meteor.call('getMe').then(function(res){
   $scope.imageDetail = JSON.parse(res.result)
   $scope.loading = false;

  })
  $scope.showDialog = function(ev){
    if (!$rootScope.currentUser){ 
      $mdDialog.show({
        controller: 'DialogController',
        templateUrl: 'client/components/popup/login.view.ng.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
    }else{

       console.log('you are allowed to comment or like');
    }

  }
}]);