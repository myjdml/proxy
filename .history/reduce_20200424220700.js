let arr = [1, 2, 3, 4, 5]

//第一版
Array.prototype.iReduce = function iReduce(fn, initial) {
    let initialArr = this;//复制当前数组
    let arr = initialArr.concat();//拷贝一份当前的数组用于操作

    if (initial) {
        arr.unshift(initial) //若有初始值，将其插入数组的首端
    }
    let index, result;
    //循环，直到数组只剩下一个元素（累加器）
    while (arr.length > 1) {
        index = initialArr.length - arr.length + 1;//添加索引值
        result = fn.call(null, arr[0], arr[1], index, initialArr)//将传入函数指向全局对象

        arr.splice(0, 2, result)//将数组前两项换成一次操作后的返回值
    }

    return result;//返回结果
}

//实例
let sum = arr.iReduce((prev, cur, index, arr) => {
    console.log(prev, cur, index, arr);
    return prev * cur;
  });
  
  console.log(sum);
