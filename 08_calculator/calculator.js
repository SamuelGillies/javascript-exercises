const add = function(a, b) {
	return a + b; 
};

const subtract = function(a, b) {
	return a - b; 
};

const sum = function([...array]) {
	return array.reduce((a, b) => a + b, 0); 
};

const multiply = function([...array]) {
  return array.reduce((a, b) => a * b, 1); 
};

const power = function(a, b) {
  return Math.pow(a, b); 
};

const factorial = function(a) {

  let result = a; 
  if (a === 0 || a === 1) {return 1}; 

  while (a > 1) {
    a--; 
    result = result * a; 
  }

  return result; 

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
