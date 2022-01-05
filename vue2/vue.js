/**
 * 
 */
class Vue {
  constructor(option) {
    // 获取到传入的对象 没有默认为空对象
    this.$options = option || {};

    // 获取el
    this.$el =
      typeof option.el === "string"
        ? document.querySelector(option.el)
        : option.el;

    // 获取data
    this.$data = option.data || {}

    // 处理 data 中的属性
    this._proxyData(this.$data)
  }

  // 把 data 中的属性注册到 Vue实例中 vm.name 或者 vm.age
  _proxyData (data){
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        // 设置可以枚举
        enumerable: true,
        // 设置可以配置
        configurable: true,

        get() {
          return data[key]
        },
        // 设置数据
        set(newValue) {
          // 判断新值和旧值是否相等
          if (newValue === data[key]) return
          // 设置新值
          data[key] = newValue
        },
      })
    })
  }

}
