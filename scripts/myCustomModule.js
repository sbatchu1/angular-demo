

var helloWorldController = function(){
    this.sayHello = "Hello I am from custom Module";
}

var customModule = angular.module("customModule", []);
customModule.controller("helloWorldController", helloWorldController);