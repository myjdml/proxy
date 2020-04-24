let arr = [1, 2, 3, 4, 5]

//第一版
Array.prototype.iiReduce = function iiReduce(fn, initial) {
    //判断fn是否是函数，不是则报错
    if (typeof fn !== "function") {
        throw new TypeError("arguments[0] is not a function");
    }

    let initialArr = this;//复制当前数组
    let arr = initialArr.concat();//拷贝一份当前的数组用于操作

    if (initial) {
        arr.unshift(initial) //若有初始值，将其插入数组的首端
    }
    let index, result;
    //循环，直到数组只剩下一个元素（累加器）
    while (arr.length > 1) {
        index = initialArr.length - arr.length + 1;//添加索引值
        result = fn.call(null, arr[0], arr[1], index, initialArr)//执行函数

        arr.splice(0, 2, result)//将数组前两项换成一次操作后的返回值
    }

    return result;//返回结果
}

//递归版
const reduceFun = function(fn, acc, index, array) {
    if (array.length === 0) {
        return acc;
    }

    const [head,...tail] = array
    index++;
    return reduceFun(fn, fn(acc, head, index, array), index, array)
}

Array.prototype.iReduce = function iReduce(fn, initial) {
    const arr = this;
    const [head,...tail] = arr;
    const firstIndex = initial ? -1 : 0;
    return initial ? reduceFun(fn, initial, firstIndex, arr) : reduceFun(fn, head, firstIndex, tail)
}

//实例
let sum = arr.iReduce((prev, cur, index, arr) => {
    console.log(prev, cur, index, arr);
    return prev * cur;
});

console.log(sum);
