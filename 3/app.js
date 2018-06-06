var myApp = angular.module('myModule', []);


myApp.controller('myCtrl', function ($scope) {

    $scope.msg = "Hello Angular....";

    var project = {
        client: "kamrul",
        budget: 85
    }

    $scope.project = project;


    var fruits = ['apple', 'banana', 'orange', 'pears', 'melon'];


    $scope.fruits = fruits;


    var countries = [

        {
            name: 'bangladesh',
            cities: [
                {name: 'dhaka'},
                {name: 'ctg'},
                {name: 'nokh'}
            ]

        },{
            name: 'india',
            cities: [
                {name: '1'},
                {name: '2'},
                {name: '3'}
            ]

        }
    ];

    $scope.countries = countries;



});




