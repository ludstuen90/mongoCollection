var dogcity = angular.module('dogcity', []);

dogcity.controller('dogpound', ['$scope', '$http', function($scope, $http){
  $scope.addDog = function(){
    console.log("Yes, we made it to addDog!");
    var dogToSend = {
      name: $scope.name,
      breed: $scope.breed
    };

    $http({
      method: 'POST',
      url: '/createDog',
      data: dogToSend
    });
    console.log(dogToSend);
    $scope.name='';
    $scope.breed='';
  };



}]);

console.log("Sourced in correctly");
