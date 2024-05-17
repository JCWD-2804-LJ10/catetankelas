let words = "hello world";
// let capitalizedWord = "";
// let capitalizedNext = true;

// for(let i = 0; i < words.length; i++){
//     let char = words[i];
//     if (char === " "){
//         capitalizedNext = true;
//         capitalizedWord += " ";
//     } else {
//         if(capitalizedNext){
//             capitalizedWord += char.toUpperCase();
//             capitalizedNext = false;
//         } else {
//             capitalizedWord += char;
//         }
//     }
// }

// console.log(capitalizedWord);

let capitalizedWord = words
.split(' ')
.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

console.log(capitalizedWord);
