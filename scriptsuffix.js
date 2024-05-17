let jcwds = ["Daffa", "Dhavi", "Nia", "Lukas", "Gama", "Fayash", "Christov", "Bagas"];

let jcwdsWithScript = jcwds.map(jcwd => jcwd + "script");

let i = 0;
function call(){
    if (jcwds[i] === "Bagas"){
        console.log("Not today, thank you");
    } else {
    console.log(jcwdsWithScript[i]);}
}

function thenextone(){
    return i = i+1;
}

for(let j=0; j<jcwds.length; j++){
call();
thenextone();
}