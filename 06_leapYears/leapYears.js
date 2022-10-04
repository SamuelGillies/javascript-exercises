const leapYears = function(year) {

    if ((year % 4) == 0) {          // test if year is divisible by 4. if yes proceed to next test, if not then false
        if ((year % 100) == 0) {      // test if year is divisible by 100. if yes proceed to next test, if not then true
            if (year % 400 == 0) {  // test if year is divisible by 400. if yes then true, if not then false
                return true; 
            } else {
                return false; 
            }
        } else {
            return true;
        }
    } else {
        return false; 
    }
};

// Do not edit below this line
module.exports = leapYears;
