function callback(currentType) {
  if (this.type !== currentType) {
    console.log(`${this.type}想：还没排到我`);
    return false;
  }

  console.log(`${this.type}想：排到我了，我去取餐了`);
  return true;
}

class Observer {
  constructor(type, callback) {
    this.type = type;
    this.callback = callback;
  }
  update(type) {
    return this.callback(type)
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  notify(type) {
    let who;
    this.observers.forEach((observer, index) => {
      // 这里判断下是否更新完毕（当前观察者是否拿到餐了）
      const isUpdate = observer.update(type);
      // 若更新完毕，则记录这个观察者
      isUpdate && (who = index);
    });
    // 若有观察者拿到餐了，则将它从观察者集合中移除
    who !== undefined && this.observers.splice(who, 1);
  }
}

var ob1 = new Observer("小明，100号", callback);
var ob2 = new Observer("小红，101号", callback);
var ob3 = new Observer("小花，102号", callback);

// 肯德基
var subject = new Subject();

// 将三个观察者分别加入到排队队列中
subject.addObserver(ob1);
subject.addObserver(ob2);
subject.addObserver(ob3);

// 通知当前号码
subject.notify("小明，100号");

// 通知当前号码
subject.notify("小花，102号");

// 通知当前号码
subject.notify("小红，101号");
