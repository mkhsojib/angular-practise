var myApp = angular.module('myModule', []);


myApp.controller('myCtrl', function ($scope) {

    $scope.msg = "Hello Angular....";

    var project = {
        client: "kamrul",
        budget: 85
    }

    $scope.project = project;



    var employees = [

        { name:'aziam', salary: '4000', position:'IT', status:1 },
        { name:'kamal', salary: '600430', position:'ITs', status:1 },
        { name:'hasan', salary: '64000', position:'ITd', status:2 },
        { name:'zia', salary: '69000', position:'ITd', status:3 },
        { name:'rajib', salary: '40400', position:'ITd', status:1 },

    ];

    $scope.employees = employees;



});




