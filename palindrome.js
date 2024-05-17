let str = "hannah";
let isPalindrome = true;

for(i=0; i<str.length/2; i++){
    if(str[i]!== str[str.length-i-1]){
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? str + ' is a palindrome' : str + ' is not a palindrome');