let arr = [1, 2, 3, 4, 5, 6, 7]


console.log(arr.concat([1,2,3,45]));


Array.prototype.iReduce = function iReduce(fn, initial) {
    let initialArr = this;
    let arr = initialArr.concat();

    if (initial) {
        arr.unshift(initial)
    }
    let index, result;

    while (arr.length > 1) {
        index = initialArr.length - arr.length + 1;
        result = fn.call(null, arr[0], arr[1], index, initialArr)
    }


}


let a = 22;
let arr2 = arr.unshift(a);
console.log(arr.length);
console.log(arr2.length);

