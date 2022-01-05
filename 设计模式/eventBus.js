/**
 * 
 */ 

class Vue {
  constructor(){
    // 用来存储事件
    this.subs = []
  }

  $on(type, fn) {
    if(!this.subs[type]){
      this.subs[type] = []
    }
    this.subs[type].push(fn)
  }

  $emit(type){
    if(this.subs[type]){
      const args = Array.prototype.slice.call(arguments, 1)
      
      this.subs[type].forEach(fn => {
        fn(...args)
      });

    }
  }
  
}

const eventBus = new Vue()

eventBus.$on('sum', function() {
  let count = [...arguments].reduce((x, y) => x + y)
  console.log(count)
})
eventBus.$emit('sum', 1,2,3)
