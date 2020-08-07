// first part
// (function(){
//     'use strict';

//     angular.module("ControllerAsApp",[])
//     .controller("ParentController1", ParentController1)
//     .controller("ChildController1", ChildController1)

//     ParentController1.$inject = ['$scope'];
//     function ParentController1($scope)
//     {
//         $scope.parentValue = 2;
//         $scope.ParentController1Object = this;  //here ParentController behaves as Contructor function and hence we can point it out using this keyword
//         $scope.ParentController1Object.parentValue = 3;
//     };
//     ChildController1.$inject = ['$scope'];
//     function ChildController1($scope)
//     {
//         console.log("ParentValue = ", $scope.parentValue);
//         console.log("Child $scope => ",$scope);

//         console.log("****Changing the value****");
//         $scope.ParentController1Object.parentValue = 4;
//         console.log("$scope.parentValue = ", $scope.parentValue);
//         console.log("$scope.ParentController1Object.parentValue = ", $scope.ParentController1Object.parentValue);
//         console.log("Child $scope => ",$scope);
//     }
// })();

// updated and recommended first part

(function(){
        'use strict';
    
        angular.module("ControllerAsApp",[])
        .controller("ParentController2", ParentController2)
        .controller("ChildController2", ChildController2);

        
        function ParentController2()    //no need to use $inject and $scope, angular automatically does for us
        {
            var parent = this;
            //We don't really need to use $scope because the scope is provided, 
            //we're just not using it anywhere because we're attaching the properties 
            //directly to the instance of the controller itself. 
            //And it's AngularJS that it's taking the instances in this controller and 
            //assigning it to the $scope for us behind the scene. 
            parent.value = 11;
        };

        ChildController2.$inject = ['$scope'];
        //here in child controller, i'm using a $scope directly, therefore need to inject explicitely
        function ChildController2($scope)
        {
            var child = this;       //$scope.child = new ChildController();
            child.value = 56;        //$scope.child.value = 5;
            console.log($scope);
        }
})();