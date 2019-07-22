function personCtor()
{
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const password = document.getElementById("password").value
    let gender = "not selected"
    const genderRadio = document.getElementsByName('gender');
    
    for (let i = 0, length = genderRadio.length; i < length; i++)
    {
        if (genderRadio[i].checked)
            {
                gender = genderRadio[i].value
                break;
            }
    }
    const car = document.getElementById("car").value
    const bike = document.getElementById("bike").checked

    let person = new PersonFunc(name,age,password,gender,car,bike);
    console.log(person.toString());
}

function personClass()
{
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const password = document.getElementById("password").value
    let gender = "not selected"
    const genderRadio = document.getElementsByName('gender');
    
    for (let i = 0, length = genderRadio.length; i < length; i++)
    {
        if (genderRadio[i].checked)
            {
                gender = genderRadio[i].value
                break;
            }
    }
    const car = document.getElementById("car").value
    const bike = document.getElementById("bike").checked

    let person = new Person(name,age,password,gender,car,bike);
    console.log(person.toString());
}
