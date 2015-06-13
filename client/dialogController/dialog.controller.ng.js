angular.module('spacemanApp')
.controller('DialogController',['$scope','$mdDialog',function($scope,$mdDialog){
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

}])