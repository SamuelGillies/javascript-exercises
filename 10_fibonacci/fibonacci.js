const fibonacci = function(num) {

let finalResult = 1; 
let previousResult = 0; 
let currentResult = 1;

if (num < 0) {
    return 'OOPS'; 
} else if (num == 0 || num == 1) {
    return 1; 
} else {
    for (let i = 2; i <= num; i++) {

        finalResult = currentResult + previousResult;   //  1 + 0   1 + 1   2 + 1   3 + 2   5 + 3     
        previousResult = currentResult;                 //  1       1       2       3       5
        currentResult = finalResult;                    //  1       2       3       5       8
                                                        //  1       2       3       5       8
    }
        return finalResult; 
    }
};

// 0 + 1, 1 + 2, 3 + 3
// 1, 1, 2, 3, 5, 8,

// Do not edit below this line
module.exports = fibonacci;
