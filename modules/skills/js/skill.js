angular.module('skillsApp.controllers').
    controller('skillController', function($scope, $routeParams, skillsAPIService) {
        $scope.id = $routeParams.id;
        $scope.driver = null;

        skillsAPIService.getSkill($scope.id).success(function (response) {
            $scope.skill = response;
        });
    });
