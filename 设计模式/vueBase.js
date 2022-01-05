let data = {
  name: 'jack',
  age: 20
}


let vm = {}

function proxyData(data) {
  Object.keys(data).forEach(key => {

    Object.defineProperty(vm, key, {
      get(){
        return data[key]
      },
      set(newValue){
        if(newValue === data[key]){
          return
        }
        data[key] = newValue
        
        document.querySelector('#app').textContent = data[key]
      }
    })

  })
}


proxyData(data)

vm.age = 21
