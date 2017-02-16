var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);




app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/header.html",
            //templateUrl: "/portifolio/docs/partials/header.html",
            //controller: "BookListCtrl"
        })
        .when("/projects", {
            templateUrl: "partials/projects.html",
            //templateUrl: "/portifolio/docs/partials/projects.html",
            //controller: "BookListCtrl"
        })
        .when("/about", {
            templateUrl: "portifolio/partials/about.html",
            //templateUrl: "/portifolio/docs/partials/about.html",
            //controller: "KartListCtrl"
        })
        .when("/contact", {
            templateUrl: "portifolio/partials/contact.html"
            //templateUrl: "/portifolio/docs/partials/contact.html",
            //controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});


app.controller("HeaderCtrl", function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    };
});
