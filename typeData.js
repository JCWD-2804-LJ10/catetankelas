let message1 = 1;
let message2 = "1";

let username = "신태용";
let age = 53;
let isActive = true;
let balance = 10000000000000000000n;

let address;
let job = null;

// console.log("address의 결과 : ", address);
// console.log("job의 결과 : ", job);
// console.log("age의 결과 : ", age);
// console.log("username의 결과 : ", username);
// console.log("isActive의 결과 : ", isActive);

// console.log('address의 데이터 종류를 확인해: ', typeof address);
// console.log('job의 데이터 종류를 확인해: ', typeof job);
// console.log('age의 데이터 종류를 확인해: ', typeof age);
// console.log('username의 데이터 종류를 확인해: ', typeof username);
// console.log('isActive의 데이터 종류를 확인해: ', typeof isActive);

// var의 사용
var count1 = 5;
count1 = 10;
//console.log(count1);

//let의 사용
let count2 = 12;
count2 = 15;
//console.log(count2);

//const의 사용
const count3 = 20;
//count3 = 30;
//console.log(count3);

// var randomNumber1 = 7
// function example(){
//     var randomNumber2 = 15;
//     console.log(randomNumber1)
// }
// console.log(randomNumber2);

// let randomNumber3 = 17;
// if(true){
//     let randomNumber4 = 20;
//     console.log(randomNumber3);
//     console.log(randomNumber4);
// }
// console.log(randomNumber4);

let colors = ["빨간", "초록", "파랑"];
let randNumber = [1, 2, 3, 4, 5];
let mixed = ["사과", 5, true];

//console.log(colors.length);
//console.log(randNumber[3]);
//console.log(mixed[0]);

let smartphone = [
  ["Apple", "Samsung"],
  ["Xiaomi", "Infinix"],
  ["Nokia", "Motorola"],
];
//console.log(smartphone[1][0]);
//console.log(smartphone[2][1]);

let smartphoneType = [
  ["Apple", ["iPhone 13", "iPhone 14", "iPhone 15"]],
  ["Samsung", ["S21", "S22", "S23"]],
];

//console.log(smartphoneType[0][0]);

const belahKetupat = {
    nama: '마름모꼴',
    sisi: 4,
    sudut: 4,
    warna: '노란',
};

//console.log(belahKetupat);
//console.log(belahKetupat.warna);
//console.log(typeof belahKetupat.warna);

const person = {
    fullName: 'John Doe',
    age: 30,
    address: {
        street: 'Jln Sudirman',
        city: 'Jakarta',
        zipcode: ['12345', '6789', '101112'],
    }
};

//console.log(person.address.zipcode[1]);

const userData = {
    fullName: 'John Doe',
    age: 30,
    hobbies: ['reading', 'painting', 'coding'],
    address: {
        street: 'Jalan Sudirman',
        city: 'Jakarta',
        zipCode: 12345
    },
    friends: [
        {fullName: 'Alice', age: 28},
        {fullName: 'Bob', age: 32},
    ],
};

// const clonedUserData = {...userData};
// userData.fullName="Bob";
// console.log("hasil cloningan: ", clonedUserData);
// console.log("user data: ", userData);

//console.log(userData.friends[0].age);
//console.log(userData.friends[1].age);

let randomCount = [21,9,7,17,15];
let clonedRandomCount = [...randomCount];
// randomCount[0] = 19;
// console.log(clonedRandomCount);
// console.log(randomCount);

let array1 = ["사과", "바나나", "망고"];
let array2 = ["오렌지", "딸기", "블루베리"];

let combinedArray = [...array1, ...array2];
//console.log("combined array : ", combinedArray);

const animal = {
    petName: "법",
    type: "고양이"
};

Object.freeze(animal);

animal.type = "개";
// console.log(animal);

const gadget = ["스마트폰", "노트북", "헤드셋"];

Object.freeze(gadget);

gadget[0] = "무선 헤드셋";
console.log(gadget);