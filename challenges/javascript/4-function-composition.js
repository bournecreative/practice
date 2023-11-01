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


const result = compose(funcs)
console.log(result(4))