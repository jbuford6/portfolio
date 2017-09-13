var app = angular.module('myApp', ['ngRoute', 'controllers'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/home.html"
    })
    .when("/about", {
        templateUrl : "../views/about.html"
    })
    .when("/skills", {
        templateUrl : "../views/skills.html"
    })
    .when("/contact", {
        templateUrl : "../views/contact.html"
    })
    .when("/projects", {
        templateUrl : "../views/projects.html"
    })
});

angular.module('controllers', [])
.controller('navController', function() {
    $(".button-collapse").sideNav();
});
app.controller('parrallaxController', function(){
    $('.parallax').parallax();
});
