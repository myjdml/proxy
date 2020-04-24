// 双向绑定特点：在页面中操作，会改变数据；改变数据，变化会体现在页面中
let inputEle = document.querySelector('#input')
let showEle = document.querySelector('.show-panel')
inputEle.addEventListener('input', (e) => {
    // 在页面中操作，会改变数据
    proxy.value = e.target.value
})
// let obj = {}
// let proxy = new Proxy(obj, {
//   get: (target, key) => {
//     return target[key]
//   },
//   set: (target, key, value, receiver) => {
//     target[key] = value
//     inputEle.value = value
//     showEle.innerHTML = value
//   } 
// })
// proxy.value = 'code_master'
