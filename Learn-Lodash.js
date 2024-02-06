// According to the lodash documentation, _.compact creates
//  an array with all falsey values removed.
//  The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. 
// You will write a function that receives an array and removes all falsey values.


// Examples

// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]


function compact(arr) {
	return arr.filter(e => e > 0)
}
compact([0, 1, false, 2, "", 3])
console.log(compact([0, 1, false,"cabo", 2, "", 3]))


console.log(Boolean("cabo"))





function compact(arr) {
    return arr.filter(value => Boolean(value));
}

// Example usage:
const result = compact([0, 1, false, 2, "", 3]);
console.log(result); // Outputs [1, 2, 3]





// The Boolean function in JavaScript is a built-in function that converts a value 
// to a boolean. When used as a function, it returns true for
//  truthy values and false for falsy values. Here's a simple explanation:

// Boolean(true) returns true
// Boolean(false) returns false
// Boolean(0) returns false
// Boolean(1) returns true
// Boolean('hello') returns true
// Boolean('') returns false
