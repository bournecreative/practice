var expect = function(val) {

 
    return {
        "toBe": (val2) => val === val2 ? true : Error("Not Equal"),
        "notToBe": (val2) => val !== val2 ? true : Error("Equal")
    
    }
    
   
};

const toBeValid = expect(5).toBe(5)
const toBeNotValid = expect(5).toBe(0)

const notToBeValid = expect(5).notToBe(-5)
const notToBeNotValid = expect(5).notToBe(5)

console.log(toBeValid)
console.log(toBeNotValid)

console.log(notToBeValid)
console.log(notToBeNotValid)