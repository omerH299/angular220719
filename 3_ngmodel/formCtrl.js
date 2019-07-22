
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {

    
    $scope.person = new Person('')
    

}

class Person
{
    constructor(name, age, password, gender, car, bike=false) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.car = car;
        this.bike = bike;
    }
}