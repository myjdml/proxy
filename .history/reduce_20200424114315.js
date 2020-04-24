let arr = [1, 2, 3, 4, 5, 6, 7]

let res = arr.reduce((acc, v) => {
    
    return acc*v
}, 999)
console.log(res);

Array.prototype.iReduce = function iReduce(fn, initial) {
    let result = fn()
}

