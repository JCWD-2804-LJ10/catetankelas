let i, j, counter = 1;

function triangle(height){
for(i=1; i<=height; i++){
    let row = "";
    for(j=1; j<=i; j++){
        row += counter.toString().padStart(2, "0") + " ";
        counter++;
    }
    console.log(row);
}
}

triangle(4);