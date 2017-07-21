/****************************
****************************
******** APP SCRIPT *******
****************************
****************************/

var app = angular.module('challengeApp', ['ngRoute']);





app.controller('challengeAppCtrl', function ($http, $scope) {

    //API

    $http({
        method: 'GET',
        url: 'https://api.github.com/users'
    }).then(function successCallback(response) {
        console.log("success!");
        $scope.users = response.data;

    }, function errorCallback(response) {
        console.log("FAILED!");
    });



    // users data

    $scope.selectedIndex = null;
    $scope.selectedPerson = null;
    $scope.person = null;
    $scope.selectPerson = function (url) {

        //API to get selected user data

        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            console.log("user success!");
            console.log(url);
            $scope.person = response.data;
            console.log($scope.person);

        }, function errorCallback(response) {
            console.log("FAILED!");
        });


//        $scope.selectedPerson = $scope.person;



    };



});



//routes
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "../../views/home.html",
        controller : "challengeAppCtrl"
    })
        .when("/home", {
        templateUrl : "../../views/home.html",
        controller : "challengeAppCtrl"
    })
        .when("/about", {
        templateUrl : "../../views/about.html",
        controller : "challengeAppCtrl"
    })
        .when("/users", {
        templateUrl : "../../views/users.html",
        controller : "challengeAppCtrl"
    });
});




