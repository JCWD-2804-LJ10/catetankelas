let str = "An apple a day keeps the doctor away";
let modified = "";

for(i=0; i<str.length; i++){
    let char = str[i];
    if(char ==='A' || char ==='a'){
        modified += "*";
    } else {
        modified += char;
    }
}

console.log(modified);