// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope,$log, $filter) {
    $scope.handle = "";

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }; 

    $scope.characters = 5;
    

    
    

    
    
}]);



