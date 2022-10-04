const ftoc = function(degree) {

  // (0°F − 32) × 5/9 = -17.78°C
let celcius = (degree - 32) * (5/9);
return Math.round(celcius * 10) / 10; 

};

const ctof = function(degree) {

//  (0°C × 9/5) + 32 = 32°F
let farenheight = (degree * (9/5)) + 32; 
return Math.round(farenheight * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
