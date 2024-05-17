let bodymassindex;

function bmi (weight, height){
    bodymassindex = weight / (height**2);
    if (bodymassindex<18.5){return "Less Weight";}
    else if (bodymassindex>=18.5 && bodymassindex<25.0){return "Ideal";}
    else if (bodymassindex>=25.0 && bodymassindex<30.0){return "Overweight";}
    else if (bodymassindex>=30.0 && bodymassindex<=39.9){return "Very Overweight";}
    else if (bodymassindex>39.9){return "Obesity";}
}

console.log(bmi(76, 1.74));