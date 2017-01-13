 var mainApp = angular.module("MYAPP");
         mainApp.controller('Controller5', function($scope) {
               

                 $scope.showMe=false;             
               $scope.save = function(){
                 
                       $scope.showMe = !$scope.showMe ;  
                                
               }
               $scope.reset = function()
               {
               $scope.firstName = "";
               $scope.lastName = "";
               $scope.email = "";
               $scope.phone = "";
               }

              
            
               $scope.reset();
              

         });
  