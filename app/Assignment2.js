var app = angular.module('MYAPP');

app.service('calculator',function(){
this.Square=function(x){return x*x};
this.Cube=function(x){return x*x*x};
this.Fact=function(x){
if(x<0){return -1;}
else if(x==0){return 1;}
else{return (x*this.Fact(x-1));}

}
});


app.controller('Controller2', function($scope,calculator) {
    $scope.number=13;
    $scope.Square=function()
    {$scope.result=calculator.Square($scope.number); }
$scope.Cube=function()
{$scope.result=calculator.Cube($scope.number);}
$scope.Fac=function()
{$scope.result=calculator.Fact($scope.number);}

});