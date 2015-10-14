/**
 * Created by entrop on 05/10/15.
 */


app.controller('HeaderController', ['$scope', function($scope) {

    $scope.submenu = false;

    $scope.showMenu = function(){
        $scope.submenu = true;
    }
}]);
