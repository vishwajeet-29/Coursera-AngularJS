(function(){
    'use script';

    angular.module("MyApp",[])
    .controller("MyController", myController);

    // myController.$inject = ['$scope'];

    function myController($scope)
    {
        $scope.deviceName = "";
        $scope.displayLaptop = function()
        {
            $scope.deviceName = "laptop";
        }
        $scope.displayMobile = function()
        {
            $scope.deviceName = "mobile";
        }
    }
})();