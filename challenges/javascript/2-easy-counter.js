/*
Given an integer n, return a counter function. This counter function initially returns n and then returns
1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/


// intial solution 
var createCounterOne = function(n) {
    let i = -1
    return function () {
        i = i + 1
        console.log(n + i)
        return n + i
    }
};

const counterOne = createCounterOne(10)
counterOne() // 10
counterOne() // 11
counterOne() // 12

/*
I think the i++ is a neat trick. With this we can avoid setting our counter with an initial state of -1. This is because
with i++ it will return i's initial value the first time and increment i subsequently 
*/
var createCounter = function(n) {
    let i = 0
    return () => n + i++
};

 
//  const counter = createCounter(10)
//  counter() // 10
//  counter() // 11
//  counter() // 12
 