(function(){
    'use strict';

    angular.module("CustomFilterApp", [])
    .controller("CustomFilterController", customFilterController)
    .filter("custom", CustomFilterFactory);

    customFilterController.$inject = ["$scope"];

    function customFilterController($scope)
    {
        $scope.likesMessage = function(){
            var msg = "I likes AngularJs Language";
            return msg;
        };

        $scope.lovesMessage = function(){
            var msg = "I likes AngularJs Language";
            return msg;
        };

    };

    function CustomFilterFactory(){
        return function(input, target, result)
        {
            input = input || "";
            input = input.replace(target, result);
            return input;
        }
    }

})();