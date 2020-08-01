(function(){
    'use script';
    angular.module("LunchCheck",[])
    .controller("LunchCheckController", lunchCheckController);
    lunchCheckController.$inject = ['$scope'];

    function lunchCheckController($scope)
    {
        $scope.list = "";
        $scope.message = "";
        $scope.totalLength = 0;
        $scope.printMessage = function(){
            $scope.totalLength = getLength(); 
            if($scope.totalLength == 0)
            {
                $scope.message = "Please enter data first";
                $scope.myStyle = {"color":"red", "border":"1px solid red", "padding":"5px"};
            }
            else if($scope.totalLength <= 3)
            {
                $scope.message = "Enjoy!";
                $scope.myStyle = {"color":"green", "border":"1px solid green", "padding":"5px"};
            }
            else if($scope.totalLength > 3)
            {
                $scope.message = "Too much!";
            }
        };
        
        var getLength = function()
        {
            var checkList = $scope.list.split(',');
            var len = 0;
            for( var i=0 ; i<checkList.length; i++)
            {
                checkList[i] = checkList[i].replace(/\s/g,"");
                if(checkList[i] != "")
                {
                    len = len+1;
                }
            }
            return len;
        }
    };
})();
