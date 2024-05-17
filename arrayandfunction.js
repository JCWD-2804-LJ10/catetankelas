let students = [
    {
        name: 'John Doe',
        age: 25,
        subjects: ['Math', 'Science', 'History'],
    },
    {
        name: 'Jane Doe',
        age: 22,
        subjects: ['English', 'Art',]
    },
];

// let subjectFromStudentMap = students.map((item) => item.subjects);
// console.log(subjectFromStudentMap);

// let subjectFromStudentForEach = students.forEach((item) => {
//     console.log(typeof item);
// });

let person = {
    name: "John Doe",
    age: 25,
    city: "Jakarta",
};

// for(let key in person){
//     if (typeof person[key] !== "string"){
//     console.log(person[key]);
//     }
// }

let colors = ['red', 'green', 'green', 'yellow', 'pink', 'red', 'blue'];

// for (let color of colors){
//     if (color !== 'green' && color !== 'red') {
//         console.log(color);
//     }
// }

let array = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArray = [];
// for (let i = 0; i < array.length; i++) {
//     if(uniqueArray.indexOf(array[i]) === -1) {
//         console.log(uniqueArray.indexOf(array[i]));
//         // console.log("before:", uniqueArray);
//         // uniqueArray.push(array[i]);
//         // console.log("after:", uniqueArray);
//     }
// }

// let uniqueArray = array.filter(
//     (value, index, self) => self.indexOf(value) === index
// );

// let uniqueArray = Array.from(new Set(array));
// console.log(uniqueArray);

function checkEvenOdd(number){
    if (number % 2 === 0){
        return "Bilangan Genap";
    } else {
        return "Bilangan Ganjil";
    }
}

// console.log(checkEvenOdd(5));
// console.log(checkEvenOdd(10));
// console.log(checkEvenOdd(2));
// console.log(checkEvenOdd(30));

// function square(number){
//     const result = number**2;
//     return result;
// }

// const sum = square(18) + 2
// console.log(typeof square(18));

// function reminderTime(time){
//     if(time < 12){
//         return "Selamat pagi";
//     } else if (time < 18){
//         return "Selamat siang";
//     } else {
//         return "Selamat malam";
//     }
// }

// console.log(reminderTime(9));
// console.log(reminderTime(22));

// function calculate(num1, num2, operation){
//     return operation(num1, num2);
// }

// function sum(a,b){
//     return a+b;
// }

// function decrease(a,b){
//     return a-b;
// }

// console.log(calculate('5','3',sum));

function createPerson(name, age){
    let person = {
        name: name,
        age: age,
    };

    function changeName(newName){
        person.name = newName;
    }

    function increaseAge(){
        person.age++;
    }

    function getPersonalInfo(){
        return 'Name : ' + person.name + ', age : ' + person.age;
    }

    return {
        changeName,
        increaseAge,
        getPersonalInfo,
    };
}

let person1 = createPerson("John Doe", 30);
Object.freeze(person1);
person1.changeName
console.log(person1.getPersonalInfo());
