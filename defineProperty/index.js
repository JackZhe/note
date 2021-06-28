let list = [1,2,3]
list.map((ele, index) => {
  Object.defineProperty(list, index, {
    get: function () {
      console.log('get index' + index);
      return ele
    },
    set: function (value) {
      console.log('set index' + index);
      return value;
    }
  })
})

list.push(4)

list[3] = 5

// console.log(list);