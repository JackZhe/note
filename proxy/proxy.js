var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false
});

var p = new Proxy(obj, {
  get: function(target, prop) {
    return 10;
  }
});

p.a; //会抛出TypeError
