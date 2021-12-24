function cb() {
    // 渲染视图
    console.log("视图更新了");
  }
  
  // function reactiveGetter (){}
  // function reactiveSetter (){}
  
  function defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        dep.addSub(Dep.target);
        return val;
      },
      set: function reactiveSetter(newValue) {
        if (newValue === val) {
          return;
        }
        dep.notify();
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
      new Watcher()
      console.log('render~', this._data.a);
    }
  }
  
  let o = new Vue({
    data: {
      a: "A",
      b: "B"
    },
  });
  
  // o._data.a = '123'