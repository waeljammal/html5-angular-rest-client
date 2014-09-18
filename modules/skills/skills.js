angular.module('skillsApp', [
        'skillsApp.services',
        'skillsApp.controllers',
        'ngRoute'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when("/skills", {templateUrl: "modules/skills/views/skills.html", controller: "skillsController"}).
            when("/skill/:id", {templateUrl: "modules/skills/views/skill-detail.html", controller: "skillController"}).
            otherwise({redirectTo: '/skills'});
    }]);