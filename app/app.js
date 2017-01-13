var app = angular.module("MYAPP", ["ngRoute"]);
    app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/Assignment1", {
        templateUrl : "Assignment1.html"
       
    })
     .when("/Assignment2", {
         templateUrl : "Assignment2.html",
          controller : "Controller2"
     })
    .when("/Assignment3", {
        templateUrl : "Assignment3.html",
        controller : "Controller3"
    })
    .when("/Assignment4", {
        templateUrl : "Assignment4.html",
        controller : "Controller4"
    })
    .when("/Assignment5", {
         templateUrl : "Assignment5.html",
        controller : "Controller5"
     })
     .when("/Assignment6", {
         templateUrl : "Assignment6.html",
         controller : "Controller6"
     });
    }]);