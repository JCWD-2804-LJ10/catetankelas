let amount = 1000
let formattedAmount = 'Rp. '+amount.toLocaleString('id-ID')+",00";
let formattedAmount2 = '₩'+amount.toLocaleString('ko-KR');
console.log(formattedAmount);
console.log(formattedAmount2);