// (function(){
//     'use script';
//     angular.module("MiniModule",[])
//     .controller("MiniController", miniController);

//     function miniController($scope, $filter){
//         $scope.name = "";
//         $scope.lower  = function(){
//             var smallCase = $filter('lowercase');
//             $scope.name = smallCase($scope.name);
//         };
//     };
// })();

//below is the minified code of above source code

// !function(){angular.module("MiniModule",[]).controller("MiniController",function(n,o){n.name="",n.lower=function(){var e=o("lowercase");n.name=e(n.name)}})}();


//the above minified code will not work as reserved words are aslo minified and replace with another single letter. Hence does not retain their functionality and doesnot protect Dependency Injection
//to retain dependency injection, use 
    
    //inline array in controller in original non-minified code

        // (function(){
        //     'use script';
        //     angular.module("MiniModule",[])
        //     .controller("MiniController", ['$scope','$filter',miniController]);

        //     function miniController($scope, $filter){
        //         $scope.name = "";
        //         $scope.lower  = function(){
        //             var smallCase = $filter('lowercase');
        //             $scope.name = smallCase($scope.name);
        //         };
        //     };
        // })();

    //below is the working minified code
        // !function(){angular.module("MiniModule",[]).controller("MiniController",["$scope","$filter",function(n,e){n.name="",n.lower=function(){var o=e("lowercase");n.name=o(n.name)}}])}();

    //Attach inject property to the function object
    //this is the most stylist and preferable way because it increases readability
        // (function(){
        //     'use script';
        //     angular.module("MiniModule",[])
        //     .controller("MiniController", miniController);

        //     miniController.$inject = ['$scope','$filter'];
        
        //     function miniController($scope, $filter){
        //         $scope.name = "";
        //         $scope.lower  = function(){
        //             var smallCase = $filter('lowercase');
        //             $scope.name = smallCase($scope.name);
        //         };
        //     };
        // })();

    //below is the working minified code
    !function(){function n(n,e){n.name="",n.lower=function(){var o=e("lowercase");n.name=o(n.name)}}angular.module("MiniModule",[]).controller("MiniController",n),n.$inject=["$scope","$filter"]}();