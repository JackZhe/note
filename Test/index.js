let n = null
function Vue() {
    n = new Watcher()
}

function Watcher() {
    Dep.target = this;
    console.log('2', this);
}
function Dep() {
    console.log();
}
Dep.prototype.add = function (obj) {
    console.log(obj);
}

let o = new Vue()

let d = new Dep()
d.add(Dep.target === n)