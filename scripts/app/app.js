/****************************
****************************
******** APP SCRIPT *******
****************************
****************************/

var app = angular.module('challengeApp', ['ngRoute']);





app.controller('challengeAppCtrl', function ($http, $scope) {

    //API to get all users

    $http({
        method: 'GET',
        url: 'https://api.github.com/users'
    }).then(function successCallback(response) {
        console.log("success!");
        $scope.users = response.data;

    }, function errorCallback(response) {
        console.log("FAILED!");
    });

    ////////////************************************************////////////


    
    $scope.person = null;
    $scope.limit = 10;

    // function to get selected user data
    $scope.selectPerson = function (url, index) {
        
        //API to get selected user data

        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            console.log("user success!");
            console.log(url);
            $scope.person = response.data;
            

        }, function errorCallback(response) {
            console.log("FAILED!");
        });




    };
    
    $scope.selectedPerson = $scope.person;

    
    ////////////************************************************////////////



});



//routes
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "../../views/home.html",
        controller : "challengeAppCtrl",
        activetab : "home"
    })
        .when("/home", {
        templateUrl : "../../views/home.html",
        controller : "challengeAppCtrl",
        activetab : "home"
    })
        .when("/about", {
        templateUrl : "../../views/about.html",
        controller : "challengeAppCtrl",
        activetab : "about"
    })
        .when("/users", {
        templateUrl : "../../views/users.html",
        controller : "challengeAppCtrl",
        activetab : "users"
    }).otherwise({ redirectTo: '/home', activetab: "home"});;

}).run(function ($rootScope, $route) {
    $rootScope.$route = $route;
});;




