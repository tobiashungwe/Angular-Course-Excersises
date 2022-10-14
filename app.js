// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope,$log, $filter) {
 
    $scope.name = "main";
      
    

    
    
}]);
//second controller
angularApp.controller('secondController', ['$scope', '$log', '$filter', function ($scope,$log, $filter) {
 
    $scope.name = "Second";
     
    

    
    
}]);

window.addEventListener('hashchange', function ()
{
    switch (window.location.hash) {
        case '#/bookmark/1':
            console.log('Page 1 is cool')
            break;
        case '#/bookmark/2':
            console.log('Page 2 is cool')
            break;
        case '#/bookmark/3':
            console.log('Page 3 is cool')
            break;

        default:
            console.log('Strange page, something went wrong')
            break;
    }


}); 




