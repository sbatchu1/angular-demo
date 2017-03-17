console.log(angular);

var MainController = function($scope){
    $scope.time = new Date();
    $scope.refresh = function(){
         console.log("clicked refresh");
         $scope.time = new Date();
    }
}



var myApp = angular.module("myApp", []); //creates a new module, need to register all the functions with this module
myApp.controller("MainController", MainController);// registering the MainController function with a name 