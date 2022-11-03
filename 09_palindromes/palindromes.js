const palindromes = function (string) {

let text = string.toLowerCase().split(" ").join("").replaceAll("!", "").replaceAll(",", "").replaceAll(".", ""); 
let palindrome = text.split("").reverse().join(""); 
return (text === palindrome);

};

// Do not edit below this line
module.exports = palindromes;
