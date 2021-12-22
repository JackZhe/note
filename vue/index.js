function cb() {
    // 渲染视图
    console.log("视图更新了");
  }
  
  // function reactiveGetter (){}
  // function reactiveSetter (){}
  
  function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        return val;
      },
      set: function reactiveSetter(newValue) {
        if (newValue === val) {
          return;
        }
        cb(newValue);
      },
    });
  }
  
  function observer(value) {
    if (!value || typeof value !== "object") {
      return;
    }
  
    Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key]);
    });
  }
  
  class Vue {
    constructor(options) {
      this._data = options.data;
      observer(this._data);
    }
  }
  
  let o = new Vue({
    data: {
      test: "aaaa",
    },
  });
  
  o._data.test = "123";
  