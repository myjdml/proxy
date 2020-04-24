let arr = [1, 2, 3, 4, 5]

//第一版
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

        arr.splice(0, 2, result)
    }

    return result;
}


let sum = arr.iReduce((prev, cur, index, arr) => {
    console.log(prev, cur, index, arr);
    return prev * cur;
  }, 100);
  
  console.log(sum);
