var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


a/*pp.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolio", {
            templateUrl: "/portifolio/docs/partials/about.html",
            //controller: "graph"
        })
        .otherwise({
            templateUrl: "/portifolio/docs/partials/header.html"
        });

});
*/

app.config(function($routeProvider) {
    $routeProvider
        .when("/projects", {
            templateUrl: "partials/header.html",
            //controller: "BookListCtrl"
        })
        .when("/kart", {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/projects"
        });
});


app.controller("HeaderCtrl", function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    };
});
