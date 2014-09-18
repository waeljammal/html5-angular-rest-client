angular.module('skillsApp.controllers', []).
    /* Drivers controller */
    controller('skillsController', function($scope, skillsAPIService) {
        $scope.nameFilter = null;
        $scope.driversList = [];
        $scope.searchFilter = function (skill) {
            var re = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || re.test(skill.title);
        };

        skillsAPIService.getSkills().success(function (response) {
            //Digging into the response to get the relevant data
            $scope.skillsList = response.skills;
        });
    });