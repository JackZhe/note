var a = 10;
var fn;
var bar = function(x) {
    console.log(b);
    var b = 5
    fn(x+b)
}
fn = function(y) {
    var c = 5
    console.log(y+c);
}
bar(10)