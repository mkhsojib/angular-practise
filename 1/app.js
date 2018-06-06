// module create..
// controller
// register a contoller with module
// mvc

var myApp = angular.module('myModule', []);
// var myContoller = function($scope){

//   $scope.msg = "Hello Angular....";

// };

// register

myApp.controller('myCtrl', function($scope){

  $scope.msg = "Hello Angular....";

  var student = {
    name: "kamrul",
    score:85
  }

  $scope.student = student;



});




