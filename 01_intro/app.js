(function(){
    //'use strict' is used to avoid global scope conflict
    'use strict';
    // x=10;
    // var x=10;

    //"angular" is the global scope object of AngularJS
    //"module(_,_)" takes 2 arguments
        //1.Name of our main Application e.g. here 'myFirstApp'
        //2.An array which is list of dependencies that our application is going to be need.
    //here we declared an empty array because our app dont need any dependencies right now.
    angular.module('myFirstApp',[])
    // now we are chaining it by adding controller to it
    // controller is the ViewModel that bounded with piece of 
    // html code to define its functionality and binding is done by the 'data binder'.
    //to share data between our viewModel i.e. controller and our view(html page),
    //AngularJs provides us an special object called "$scope"
    // in AngularJS, variable with preceeding $ is a reserved keyword
    //we can also use with user defined var names but it doesn't contain functionality like reserved keywords has.
    .controller('myFirstController', function($scope){
        $scope.name = "vishwajeet";
        $scope.sayHello = function(){
            return "Hello Vishwajeet Kamble";
        };
    });
})();