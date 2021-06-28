window.location.hash = 'hash1'; // 用于设置 hash 值

let hash = window.location.hash; // 获取当前 hash 值


// 监听hash变化，点击浏览器的前进后退会触发
window.addEventListener('hashchange', function(event){ 
    let newURL = event.newURL; // hash 改变后的新 url
    let oldURL = event.oldURL; // hash 改变前的旧 url
    console.log(newURL);
    console.log(oldURL);
},false)
