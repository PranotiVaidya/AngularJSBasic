
         var mainApp = angular.module("MYAPP");
         
         mainApp.controller('Controller4', function($scope) {
            $scope.student = {
               firstName: "Pranoti",
               lastName: "Vaidya",
               fees:13000,
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });