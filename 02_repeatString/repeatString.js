const repeatString = function(string, num) {
    let stringIterated = '';                // initialise with blank string to ensure that a num of 0 returns no value

    if (num < 0) {                          // test if negative numbers are used
            return 'ERROR';                 // if negative numbers are present, return string 'ERROR'
        } else {                            // if negative numbers are not present, continue
            for (i = 0; i < num; i++) {     // loop through function num times, adding the string to stringIterated each time
            stringIterated += string; 
        }
        return stringIterated;              // return resulting string
    }
};

// Do not edit below this line
module.exports = repeatString;
