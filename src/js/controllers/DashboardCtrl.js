var controllers = require('./_index');

controllers
    .controller('DashboardCtrl', ['$scope', '$interval', function ($scope, $interval) {

        $scope.greeting = 'Hello World';
        $scope.date = new Date();

        $interval(function () {
            $scope.date = new Date();
        }, 500);

    }]);