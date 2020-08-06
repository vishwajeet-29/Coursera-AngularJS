(function(){
    'use strict';

    var shoppingList1 = ['Milk', 'Eggs', 'Cheese', 'Honey', 'Oats', 'Bread', 'Butter', 'Yogurt'];
    var shoppingList2 = [
        {
            name : 'Milk',
            quantity : 2
        },
        {
            name : 'Eggs',
            quantity : 12
        },
        {
            name : 'Cheese',
            quantity : 4
        },
        {
            name : 'Honey',
            quantity : 1
        },
        {
            name : 'Oats',
            quantity : 1
        },
        {
            name : 'Bread',
            quantity : 2
        },
        {
            name : 'Butter',
            quantity : 2
        },
        {
            name : 'Yogurt',
            quantity : 1
        }

    ];
    angular.module('ShoppingApp',[])
    .controller('ShoppingController', shoppingController);

    //to avoid minification
    shoppingController.$inject = ['$scope'];

    function shoppingController($scope)
    {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addItem = function(){
            var newItem = { 
                name : $scope.newItemName,
                quantity : $scope.itemQuantity
            };
            shoppingList1.push($scope.newItemName);
            shoppingList2.push(newItem);
        };

        $scope.changeQuantity = function(){
            var flag = 0;
            var oldQuantity = 0;
            
            for(var item = 0; item < ($scope.shoppingList2).length ; item++){
                if(angular.equals($scope.shoppingList2[item].name, $scope.itemName))
                {
                    oldQuantity = $scope.shoppingList2[item].quantity;
                    $scope.shoppingList2[item].quantity = $scope.newItemQuantity;
                    flag = 1;
                    break;
                }
               
            };
            if(flag == 0){
                alert("Item is not found in List");
            }
            else{
                alert("Quantity is changed for "+$scope.itemName+" from "+ oldQuantity + " to "+ $scope.newItemQuantity);
            }
        };
    }
})();