(function(){
    'use strict';
    angular.module("CustomFilterApp",[])
    .controller("CustomFilterController", customFilterController)
    //Step2 : add our filter to the module with any valid angularJS name e.g. custom
    .filter("custom", CustomFilterFactory);

    //Step3 : now inject our filterName (here we used - custom) into the controller with appending "Filter" at the end of the filter name i.e. here it becomes - "customFilter"
    customFilterController.$inject = ['$scope', 'customFilter'];

    //Step4 : add it to the arguments and use it as we were using inbuilt filter
    function customFilterController($scope, customFilter)
    {

        $scope.likesMessage = function(){
            var msg = "I likes AngularJs Language";
            return msg;
        };

        $scope.lovesMessage = function(){
            var msg = "I likes AngularJs Language";
            //calling a filter function
            msg = customFilter(msg);
            //angularJS treats it as a filter service and it calls the FilterFactory function which returns the functionality for this filter
            return msg;
        };
    };

    //Step1 : creating a factory function which returns one another userdefined/custom filter function
    function CustomFilterFactory()
    {
        return function(input)
        {
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        }
    };

})();