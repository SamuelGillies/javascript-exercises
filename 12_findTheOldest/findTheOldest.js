const findTheOldest = function(array) {

    const ordered = array.sort(function(a, b) {

        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }

        return  ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1 
                : ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1
                : 0; 
    });

    return ordered[0];
};

// (new Date()).getFullYear();

// Do not edit below this line
module.exports = findTheOldest;
