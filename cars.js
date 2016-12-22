<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<div ng-app="myApp" ng-controller="myCtrl">
<p>Select a car:</p>
<select ng-model="selectedCar" ng-options="x for (x, y) in cars">
</select>
<h1>You selected: {{selectedCar}}</h1>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.cars = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    }
});
</script>