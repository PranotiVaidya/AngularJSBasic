
var app = angular.module('MYAPP');
app.controller('Controller6', ['$scope', invoice]);

function invoice($scope) {
    $scope.items = [{
        select:false,
        name: 'Product1',
        quantity: 13,
        price: 5
    },
    
     {
        select:false,
        name: 'Product2',
        quantity: 2,
        price: 100
    },
    
     {
        select:false,
        name: 'Product3',
        quantity: 4,
        price: 20
    }];
    
    $scope.invoiceCount = 0;
    $scope.invoiceTotal = 0;
    
    $scope.setTotals = function(item){
        if (item.select){
            item.total = item.quantity * item.price;
            $scope.invoiceCount += item.quantity;
            $scope.invoiceTotal += item.total;
        }
        else 
        {
            item.total = item.quantity * item.price;
            $scope.invoiceCount -= item.quantity;
            $scope.invoiceTotal -= item.total;
        }
      
        
    }
  //  $scope.setTotals();
}