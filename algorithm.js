// function isPalindrome(input){
//     const cleanedInput = removeSpecialChar(input).toLowerCase();
//     const reversedInput = reverseString(cleanedInput);
//     console.log('cleaned : ', cleanedInput);
//     console.log('reversed : ', reversedInput);
//     return cleanedInput === reversedInput;
// }

// function removeSpecialChar(input){
//     const regex = /[^\w\s]/g;
//     return input.replace(regex, "");
// }

// function reverseString(input){
//     const characters = input.split("");
//     const reversedCharacters = characters.reverse();
//     return reversedCharacters.join("");
// }

// const input = 'Katak'
// console.time('isPalindrome');
// console.log(isPalindrome(input));
// console.timeEnd('isPalindrome');

// function containDuplicate(nums){
//     let operations = 0;
//     let space = 0;

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             operations++;
//             if(nums[i] === nums[j]){
//                 space++;
//                 return {
//                     isDuplicate: true,
//                     operations: operations,
//                     space: space,
//                 };
//             }
//         }
//     }
//     return {
//         isDuplicate: false,
//         operations: operations,
//         space: space,
//     };
// }

// const input1 = [1,2,3,4,5,6,7,8,9,21,19,18];
// const input2 = [1,2,3,4,1,3,7,7,9,10,11,12,13,13];

// console.log(containDuplicate(input1));
// console.log(containDuplicate(input2));

// function findMatchingItems(shoppingList, money){
//     for(let i = 0; i < shoppingList.length; i++){
//         for(let j = i + 1; j < shoppingList.length; j++){
//             if(shoppingList[i].price + shoppingList[j].price === money){
//                 return [shoppingList[i], shoppingList[j]];
//             }
//         }
//     }
//     return 'No matching items found';
// }

// const shoppingList = [
//     {name: 'Milk', price: 2},
//     {name: 'Bread', price: 3},
//     {name: 'Eggs', price: 1},
//     {name: 'Butter', price: 4},
// ];

// const money = 5;
// console.log(findMatchingItems(shoppingList, money));

// function findMatchingItems(shoppingList, money) {
//     const priceMap = {};
//     for(let i = 0; i < shoppingList.length; i++){
//         const item = shoppingList[i];
//         const complement = money - item.price;
//         if(priceMap[complement]){
//             return [priceMap[complement], item];
//         }
//         priceMap[item.price] = item;
//     }
//     return 'No matching items found';
// }

// const shoppingList = [
//     {name: 'Milk', price: 2},
//     {name: 'Bread', price: 3},
//     {name: 'Eggs', price: 1},
//     {name: 'Butter', price: 4},
// ];

// const money = 5;

// console.time("findMatchingItems");
// console.log(findMatchingItems(shoppingList, money));
// console.timeEnd("findMatchingItems");

// function findFavoriteClothes(resource, target){
//     for(let i = 0; i <resource.length; i++){
//         if(resource[i] === target){
//             return `Favorite clothes found at position ${i+1} in the resource`;
//         }
//     }
//     return `Favorite clothes not found in the resource`;
// }

// const resource = ['Shirt', 'Jeans', 'T-Shirt', 'Pants', 'Jacket'];
// const target = 'T-Shirt';

// console.log(findFavoriteClothes(resource, target));

// Binary Search: found exam score
// function binarySearchExamScore(resource, target){
//     let start = 0;
//     let end = resource.length - 1;

//     while (start <= end){
//         let mid = Math.floor((start+end) / 2);
//         if(resource[mid] === target){
//             return `Nilai ${target} ditemukan pada posisi ke-${mid+1}`;
//         } else if (resource[mid] < target){
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return `Nilai ${target} tidak ditemukan dalam daftar`;
// }

// const resource = [70,75,80,85,90,95,100];
// const target = 80;
// console.time('binarySearchExamScore');
// console.log(binarySearchExamScore(resource,target));
// console.timeEnd('binarySearchExamScore');

function bubbleSort(bookStack){
    let swapped = true;
    while (swapped){
        swapped = false;
        for(let i = 0; i < bookStack.length - 1; i++){
            if(bookStack[i].height > bookStack[i+1].height){
                let temp = bookStack[i];
                bookStack[i] = bookStack[i+1];
                bookStack[i+1] = temp;
                swapped = true;
            }
        }
    }
    return bookStack;
}

const bookStack = [
    {title: 'Harry Potter', height: 15},
    {title: 'Lord of the Rings', height: 18},
    {title: 'The Hobbit', height: 12},
    {title: 'Game of Thrones', height: 20}
];

console.log('Sebelum diurutkan: ');
console.log(bookStack);

console.log('Sesudah diurutkan: ');
console.time('bubbleSort');
console.log(bubbleSort(bookStack));
console.timeEnd('bubbleSort');

function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const arr = [64,25,12,22,11];
console.log('Array sebelum diurutkan:');
console.log(arr);
console.log('Array setelah diurutkan:');
console.log(selectionSort(arr));