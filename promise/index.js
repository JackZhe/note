function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => callback(script)
    script.onerror = () => callback(new Error(`Script load error for ${src}`))
    document.head.append(script)
}

var objList = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
]

objList.forEach(item => {
    
})