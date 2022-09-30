const sumAll = function(...args) {

    // sort arguments from lowest to highest values 
    let array = args.sort(function(a, b){return a - b});

    // assign arguments to independent variables
    let int1 = array[0];
    let int2 = array[1];

    // set sum variable
    let sum = 0; 

    // check that int1 and int2 and numbers above 0
    if  ((int1 < 0) || (int2 < 0) || (typeof int1 != 'number') || (typeof int2 != 'number')) {
                return 'ERROR';                         // if int1 or int2 <0 or NaN return ERROR
            } else {                                    // if int1 and int2 >=0 initiate loop
                for (i = int1; i < (int2 + 1); i++) {   // start loop at lowest number, increment to stop once highest value is reached
                    sum = sum + i;                      // add each increment of the loop to the sum var
                }
        }

    // return the final sum value once the loop has ended
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
