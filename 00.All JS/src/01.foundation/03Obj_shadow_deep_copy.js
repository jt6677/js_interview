/* eslint-disable */
const a = {
  name: 'bai',
  love: ['hi', 'bb', ['tb', 'bb']],
}
// 赋值,共享内存地址
const b = a

// 浅拷贝
//! !! 第一层不关联
/// nested object 还是指向内存地址， referrence
const shadowCopy = (obj) => {
  const target = {}
  for (const i in obj) {
    // console.log(i)
    // 基本数值复制
    // array object 共享内存地址
    target[i] = obj[i]
  }
  return target
}

// 浅拷贝
// const k = Object.assign({}, b)

// 深拷贝
// Date Reg outlier
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  const cloneObj = new obj.constructor()
  // @eslint-ignore
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      cloneObj[i] = deepClone(obj[i])
    }
  }
  return cloneObj
}
// 深拷贝
// but Date Reg function will be messed up
// var p1=JSON.parse(JSON.stringify(p))
const deepC = deepClone(a)
b.name = 'String'
b.love[0] = 'hey'
// console.log(a)
// console.log(b)
console.log(shadowCopy(a))
console.log(deepC)

// { name: 'String', love: [ 'hey', 'bb', [ 'tb', 'bb' ] ] }
// { name: 'String', love: [ 'hey', 'bb', [ 'tb', 'bb' ] ] }
// true
// 赋值assign

// let c = 0
// let t = c
// t = 2
// console.log(c)
// console.log(t)
