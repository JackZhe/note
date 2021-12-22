/**
 * configurable 是否可以删除
 * writable 是否可以修改(赋值)
 * enumerable 是否可以枚举
*/
const obj = {}
var data = 38

// var descriptor = Object.create(null); // 没有继承的属性
// descriptor.value = 'abc'

Object.defineProperty(obj, 'key', {
    get() {
        return data
    },
    set(newValue) { 
        data = newValue
    },
    enumerable : true,
    configurable : false,
})

// obj.key = 40


console.log(data);