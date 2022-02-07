document.addEventListener('mousemove', (e)=>{
    // e.target.click()
})

let b = document.getElementsByTagName('body')[0]
b.addEventListener('click', (e)=>{
    console.log(123);
})
function test(){
    console.log('test');
}