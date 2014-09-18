angular.module('skillsApp.services', [])
    .factory('skillsAPIService', function($http) {

        var skillsAPI = {};

        skillsAPI.getSkills = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/allSkills.json'
            });
        }

        skillsAPI.getSkill = function(id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/skill.json?id=' + id
            });
        }

        return skillsAPI;
    });