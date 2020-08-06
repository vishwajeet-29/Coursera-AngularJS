(function(){
    'use strict';
    var shoppingList1 = ['Milk', 'Eggs', 'Cheese', 'Honey', 'Oats', 'Bread', 'Butter', 'Yogurt'];

    angular.module("ShoppingApp", [])
    .controller("ShoppingController", shoppingController);

    shoppingController.$inject = ['$scope'];

    function shoppingController($scope)
    {
        $scope.shoppingList1 = shoppingList1;
    };
})();