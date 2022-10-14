// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filte) {
    
    $scope.name = "John"
    $scope.formattedname = $filter('uppercase')($scope.name);
    $log.info($scope.name)
    $log.info($scope.formattedname);
});


var searchPeople =  function ($scope, lastname, height, age, occupation)
{
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));
// var searchPeopleString = searchPeople.toString(); 

// var person = function(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// function logPerson(person) {
//     console.log(person);
// }

// var john = new Person('John', 'Doe');
// logPerson(john);