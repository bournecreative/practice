/*
* We start with a function that takes an array of functions. Each function taking an argument and returning a value - pure functions.
*  We will return a function that will accept an integer. This integer will be passed through each function within the array - its return value being updated to a result which is 
* the value returned.
*/
var compose = function(functions) {
    
	return function(x) {
        let result = x
        for (let i=functions.length-1; i >= 0; i--) {
           result = functions[i](result)
        }
        return result
    }
};


const funcs = [x => x + 1, x => x * x, x => 2 * x]

const result = compose(funcs) // result will not yeild a value. Result must be invoked with integer value.

console.log(result(4))