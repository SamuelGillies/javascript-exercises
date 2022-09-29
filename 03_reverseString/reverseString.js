const reverseString = function(string) {
    // put string in array 
    let text = string;
    let array = text.split("");

    // reverse array
    array.reverse(); 

    // turn array into string 
    let stringReversed = array.join(""); 

    // return reversed string
    return stringReversed 
};

// Do not edit below this line
module.exports = reverseString;
