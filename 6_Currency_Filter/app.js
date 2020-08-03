(function(){
    'use strict';
    angular.module("CurrencyApp",[])
    .controller("CurrencyController", currencyController);

    currencyController.$inject = ['$scope', '$filter'];

    function currencyController($scope, $filter)
    {
        $scope.msg = "This is your Bank balance";
        $scope.currency_expression = 2500000;
        // $scope.msg = $filter('uppercase')($scope.msg);  //this is the way of using filter in js
        // $scope.currency_expression = $filter('currency')(2500000,"Rs.",4);
    };
})();