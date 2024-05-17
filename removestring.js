let string = "Hello World";
let searchString = "ell";
let index = string.indexOf(searchString);
let result = string.slice(0, index) + string.slice(index + searchString.length);
console.log(result);