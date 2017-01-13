
angular.module('MYAPP').controller('Controller3', function($scope) {
    $scope.id = [
        {id:'13',tech:'Frontend'},
        {id:'2',tech:'Database'},
        {id:'8',tech:'JAVA'},
        {id:'3',tech:'C#'},
        {id:'1',tech:'Frontend'},
        {id:'4',tech:'JAVA'},
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
