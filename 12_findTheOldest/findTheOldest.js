const findTheOldest = function(array) {

    const checked = array.map(item => item); 
        // if (item.hasOwnProperty('yearOfDeath') == false) {
        //     item.yearOfDeath = (new Date()).getFullYear();
        // } else {
        //     item = item; 
        // }
    

    console.table(checked); 


    const ordered = checked.sort(function(a, b) {
        return  ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1 
                : ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1
                : 0; 
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
