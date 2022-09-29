const removeFromArray = function(...args) {
    
    let inputs = [...args]; 

    // place array in one var 
    let array = inputs.slice(0,1); 

    // place all other arguments in another var
    let filter = inputs.slice(1); 

    // create include arrays for storage of filtered values  
    let include = []; 

    // test each item of array against each item of arguments

    for (let item of array) {               // iterate over array 
        for (let argument of filter) {   // iterate over arguments
            if (item != argument) {         // test if array value matches argument value
                include.push(item);         // if no, add to include array
            }
        }
    }

    // return final list of included items
    return include;

};

// Do not edit below this line
module.exports = removeFromArray;
