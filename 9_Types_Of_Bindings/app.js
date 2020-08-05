(function(){
    'use strict';
    angular.module('BindingTypesApp',[])
    .controller('BindingController', bindingcontroller);

    bindingcontroller.$inject = ['$scope'];

    function bindingcontroller($scope){
        
        $scope.firstName = "";
        $scope.noOfWatchers = 0;
        //function to set the full name with predefined sirname
        $scope.setFullName = function(){
            $scope.fullName = $scope.firstName+" "+"Kamble";
            //once this function called, full name will be set/initialised and then watcher for the fullName property get removed from watcher list
            //Hence if we update the firstname after fullname initialised, then the full name will be updated but the updated value in case of 1-time binding is not shown in UI
            //but in 1-way binding, it shows updated value of fullName in UI
        };
        //function to print updated first name on console
        $scope.logFirstName = function(){
            console.log("FirstName = "+$scope.firstName);
        };
        //function to print updated full name on console
        $scope.logFullName = function(){
            console.log("FullName = "+$scope.fullName);
        };
        //function to print updated watchers count on console
        $scope.getWatchersCount = function(){
            $scope.noOfWatchers = $scope.$$watchersCount;
            console.log("No. Of Watchers = "+ $scope.$$watchersCount);
        };
    }
})();