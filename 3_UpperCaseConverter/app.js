//IFEE function
(function(){
    'use strict';
    angular.module("UpperCaseConverter", [])
    .controller("UpperCaseController", UpperCaseController);

    function UpperCaseController($scope, $filter){
        $scope.name = "";
        $scope.upper = function(){
            var fun = $filter('uppercase');
            $scope.name = fun($scope.name);
        }
    };
})();