let arr = [1, 2, 3, 4, 5, 6, 7]


console.log(arr.concat([1,2,3,45]));


Array.prototype.iReduce = function iReduce(fn, initial) {
    let initialArr = this;
    let arr = initialArr.concat();

    if (initial) {
        arr.unshift(initial)
    }




    let result = fn(result, this[i], i, this)
}


