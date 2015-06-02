var angular = require('angular');
require('angular-route');
require('./controllers/_index');

var app = angular.module('app', ['ngRoute', 'app.controllers']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .otherwise({
            redirectTo: '/dashboard'
        });
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});