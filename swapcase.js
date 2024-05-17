let str = "The QuiCk BrOwN Fox";
let swapped = "";

for(i=0; i<str.length; i++){
    let char = str[i];
    if(char >='A' && char <='Z'){
        swapped += char.toLowerCase()
    } else if (char >= 'a' && char <= 'z'){
        swapped += char.toUpperCase()
    } else {
        swapped += char;
    }
}

console.log(swapped);