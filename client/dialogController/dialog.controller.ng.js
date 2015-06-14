angular.module('spacemanApp')
.controller('DialogController',['$scope', '$mdDialog', '$meteor', '$rootScope','$mdToast',function($scope, $mdDialog, $meteor, $rootScope, $mdToast){
    $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
      };
    $scope.openSignup = function(){
        $scope.showLogin = false;
        $scope.showRegister = true;

    }
    $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
          .filter(function(pos) { return $scope.toastPosition[pos]; })
          .join(' ');
      };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.showError = function(content){

        $mdToast.show(
              $mdToast.simple()
                .content(content)
                .position($scope.getToastPosition())
                .hideDelay(3000)
            );
    }
    $scope.registerUser = function(user,validity){

           var id = Accounts.createUser(user);
           $scope.showError('Registration completed! Please login');
           $scope.showLoginRegister = true;
    }
    $scope.loginUser = function(user, validity){

        if (validity){

            Meteor.loginWithPassword(user.email, user.password, function(err) {
                if (err) {
               
                  $scope.showError(err.reason)
                } else {
                  $scope.showError('Login success!')
                }
              });
        }else{

           if ($scope.login.email.$error.required){

              $scope.showError('Please enter your email');
           }else if ($scope.login.email.$error.email){

            $scope.showError('Pleae enter valid email.')
           }else if ($scope.login.pass.$error.required){

             $scope.showError('Pleas enter your password');
           }

        }
    }

}])