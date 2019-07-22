module.controller("nameCtrl", NameCtrl)

function NameCtrl($scope) {
    
    $scope.name = 'Omer Hindy'
    $scope.reverseName = function() {
       let rName = $scope.name
       $scope.name = rName.split('').reverse().join('')
    }

}