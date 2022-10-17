// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',

    })


    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',

    })
        

})

//SERVICES
angularApp.service('nameService', function() {
    var self = this;    
    this.name = "John Doe";
    this.nameLength = function() {
        return self.name.length; 
    }
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService',  function ($scope,$log, nameService) {

$scope.people = [{
    name: 'John Doe',
    address: '123 Main Street Suite',
    city: 'New york',
    state: 'NY',
    zip: '1111'
},
{
    name: 'Jane Doe',
    address: '123 Main Street Suite',
    city: 'Los angels',
    state: 'LA',
    zip: '1111'
},
{
    name: 'Example Doe',
    address: '123 Example Street Suite',
    city: 'Manhatten',
    state: 'NY',
    zip: '1111'
},
{
    name: 'Someone Doe',
    address: '123 Main Street Suite',
    city: 'Oostende',
    state: 'West-Flanders',
    zip: '1111'
}]

$scope.formattedAddress = function(person) {
    return  person.address + ',' + person.city + ',' + person.state + ' ' + person.zip;
}
    
    
}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope,$log, $routeParams, nameService) {



}]);


angularApp.directive("searchResult", function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'directives/searchresult.html',
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {
            console.log("Compiling ...");
            console.log(elem); 

            return {
                post: function (scope, elements, attrs) {
                    

                    if(scope.personObject.name == 'Jane Doe')
                    {
                        elements.removeAttr('class')
                    }

                    console.log('Post-linking....');
                    console.log(elements);
                },
                

            }  
        }
    }
    

});



