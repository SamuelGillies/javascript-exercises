const removeFromArray = function(...args) {
    
    let inputs = [...args]; 

    // place array in one var 
    let items = inputs[0]; 

    // place all other arguments in another var
    let toRemove = inputs.slice(1); 

    // create include arrays for storage of filtered values  
    let finalArray = []; 

    // test each item to see if it is included in toRemove
    // use of ! means that if the result is false, the item is pushed to finalArray
    finalArray = items.filter(val => !toRemove.includes(val)); 

    // return final list of included items
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
