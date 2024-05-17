// let employee = {
//     name: '신태용',
//     age: 53,
//     position: '축구감독',
//     work: function(){
//         console.log('일하고 있다');
//     },
//     rest: function(){
//         console.log('휴식하고 있다');
//     },
//     sum: function(a,b){
//         return a+b;
//     },
// };

// employee.work();
// employee.rest();
// console.log(employee.sum(10,5)+5);

// function Person(name,age,city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let person1 = new Person('신태용', 53, '서을');
// let person2 = new Person('Daffa', 'N/A', 'Jakarta');
// console.log(person1);
// console.log(person2);

// class Person {
//     constructor(name, age, city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }

// let person1 = new Person('신태용', 53, '서을');

// delete person1.city;
// console.log(person1);

// person1.position = '축구감독';
// console.log(person1);

// console.log(person1["name"]);
// console.log(person1["age"]);
// console.log(person1["city"]);

let person = {
    username: "John Doe",
    age: 25,
    address:{
        city: 'Jakarta',
        zip: 123456,
    },
};

// console.log(person.address?.city);

// let keys = Object.keys(person.age);
// console.log(keys);

// let {username, age, address} = person;
// console.log(username);
// console.log(age);
// console.log(address.city);
// console.log(address.zip);

// let obj1 = {username: 'John Doe', age: 25};
// let obj2 = {email: 'john@example.com', isAdmin: false};
// let mergedObject = {...obj1, ...obj2};
// console.log(mergedObject);

// let objectNumber = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// let entries = Object.entries(objectNumber);
// console.log(entries[1]);

// let x = {a:1, b:2, c:6, d:20};
// let y = {b:4, c:5, d:10};
// let merged = Object.assign(y, x);
// console.log(merged);

// class Car{
//     constructor(brand){
//         this.brand = brand;
//         this._mileage = 0;
//     }

//     drive(distance){
//         this._mileage += distance;
//         return 'Driving ' + distance + 'km ...';
//     }

//     getMileage(){
//         return this._mileage;
//     }
// }

// let myCar = new Car('Honda');
//console.log(myCar.getMileage());
//console.log(myCar.drive(1000));

// let thermostat = {
//     _temperature: 0,
//     get temperature(){
//         console.log("Getting temperature");
//         return this._temperature;
//     },
//     set temperature(value){
//         console.log("Setting temperature");
//         if (value < 0) {
//             console.log("Temperature is too low");
//             return;
//         }
//         this._temperature = value;
//     },
// };

// thermostat.temperature = -25;
// console.log(thermostat.temperature);

// let rectangle = {
//     _width: 0,
//     _height: 0,

    //setter untuk setup nilai lebar
    // set width(value){
    //     if(value < 0){
    //         console.log('Width cannot be negative');
    //         return;
    //     }
    //     this._width = value;
    // },

    //getter untuk mengambil nilai lebar
    // get width(){
    //     return this._width;
    // },

    //setter untuk setup nilai tinggi
    // set height(value){
    //     if(value < 0){
    //         console.log('Height cannot be negative');
    //         return;
    //     }
    //     this._height = value;
    // },

    //getter untuk mengambil nilai tinggi
    // get height(){
    //     return this._height;
    // },
    
    //getter untuk menghitung luas
//     get area(){
//         return this._height * this._width;
//     },
// };

// rectangle.width = -10;
// rectangle.height = -5;
// console.log(rectangle.area);

// class Car {
//     constructor(brand, model){
//         this._brand = brand;
//         this._model = model;
//     }

//     set brand(newBrand){
//         this._brand = newBrand;
//     }

//     set model(newModel){
//         this._model = newModel;
//     }

//     get brand(){
//         return this._brand;
//     }

//     get model(){
//         return this._model;
//     }

//     drive(){
//         console.log('Driving ' + this._brand + " " + this._model);
//     }
// }

// let myCar = new Car('Honda', 'Mobilio');
// myCar.drive();

class Animal {
    constructor(name){
        this._name = name;
    }

    speak(){
        console.log(this._name + "makes a noise");
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this._breed = breed;
    }

    speak(){
        console.log(this._name + " barks");
    }
}

let myDog = new Dog('Roscoe', 'Bulldog')
myDog.speak();