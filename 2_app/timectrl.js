
module.controller("timeCtrl", TimeCtrl)


function TimeCtrl($scope) {
    
    $scope.time = new Date().toTimeString();
    $scope.showUpdatedTime = function() {
        $scope.time = new Date().toTimeString();
    }

}