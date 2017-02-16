var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolio", {
            templateUrl: "/portifolio/docs/partials/book-list.html",
            //controller: "graph"
        })
        .otherwise({
            templateUrl: "/portifolio/docs/partials/header.html"
        });

});


app.controller("HeaderCtrl", function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    };
});
