var myApp = angular.module('myModule', []);


myApp.controller('myCtrl', function ($scope) {

    $scope.msg = "Hello Angular....";

    var project = {
        client: "kamrul",
        budget: 85
    }

    $scope.project = project;

    $scope.msg1 = "Hello Universe";
    $scope.msg2 = "name";
    $scope.var1 = 0;
    $scope.var2 = 1;


});




