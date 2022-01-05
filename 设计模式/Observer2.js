/**
 * 观察者模式
 * 发布者与订阅者[观察者]是相互依赖的，必须要求观察者订阅内容改变事件
 * 而发布订阅者是由调度中心进行调度
 */

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObs(obs) {
    this.observerList.push(obs);
  }

  notify() {
    this.observerList.forEach((obs) => {
      obs.update();
    });
  }

  deleteObs() {
    this.observerLists = [];
  }
}

class Observer {
  update() {
    console.log("目标更新了");
  }
}


const sub = new Subject()

const obs1 = new Observer()
const obs2 = new Observer()

sub.addObs(obs1)
sub.addObs(obs2)

sub.notify()