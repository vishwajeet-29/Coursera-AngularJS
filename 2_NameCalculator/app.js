//IFEE function
(function(){
    //avoid global scope conflict
    'use strict';
    //create object
    angular.module("NameCalculatorApp",[])
    .controller("FirstController", function($scope){
        //variable for input name
        // $scope is neccessart so that var with it will be visible to view/html file
        $scope.name = "";
        $scope.totalLength = 0;

        //function to display calculated length of name
        $scope.displayNameLength = function(){
            var nameLength = getNameLength($scope.name);
            $scope.totalLength = nameLength;
        };

        //function to calculate length of name
        function getNameLength(n){
            return n.length;
        };
    });

})();