// var funcs = [];
// for (var i = 0; i < 10; i++) {
//     funcs.push(
//         (function(value) {
//             return function() {
//                 console.log(value);
//             }
//         })(i)
//     )
// }
// console.log(funcs);
// funcs.forEach((item)=>{
//     item()
// })

// var funcs = [];
// var object = {
//     a: true,
//     b: true,
//     c: true,
// }
// for (const key in object) {
//     funcs.push(
//         () => {
//             console.log(key);
//         }
//     )
// }

// funcs.forEach((item) => {
//     item()
// })

var person = 'Mike';
var age = 28;
var output = myTag`that ${ person } is a ${ age }`;
function myTag(strings, ...vars) {
    let str;
    if (vars[1] > 10) {
        str = 'A' 
    } else {
        str = 'B'
    }
    return strings[0] + vars[0] + strings[1] + str
}

console.log(output);