
class Person {
    constructor(name, age, password, gender, car, bike) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.car = car;
        this.bike = bike;
        this.toString = () => {
            const { name, age , password , gender , car , bike} = this
            return `name : ${name}, age :  ${age}, password : ${password}, gender : ${gender}, car: ${car}, have bike? : ${bike}`;
        }
    }
    
}
