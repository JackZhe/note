/**
    1. 订阅者和发布者之间本身是没有关系的，唯一把他们关联到一块的就是 事件调度中心 提供的发布和订阅事件
    就好像是两个完全不相干的人一样，他们只是借助了这个事件调度中心 去完成一些事情，
    事件调度中心 在其中就相当于中介的影子
    2. 低耦合，适用于总线模块（如 EventBus ）
 */

class PubSub {
  // 订阅者集合
  // 集合的每个对象里都包含了订阅者类型 type，及要做的事情 callback
  constructor() {
    this.subscribes = {};
  }
  /**
   * 订阅事件
   * @param {string} type
   * @param {function} callback
   */
  subscribeEvent(type, callback) {
    this.subscribes[type] = callback;
  }
  /**
   * 发布事件
   * @param {string} type
   * @param {string} message
   */
  publish(type, message) {
    const callback = this.subscribes[type];
    callback(`${type}，${message}`);
  }
}

var ps = new PubSub();

ps.subscribeEvent("200", (msg) => {
  console.log("微信通知：", msg);
});

// 小红在微信点餐了
ps.subscribeEvent("201", (msg) => {
  console.log("微信通知：", msg);
});

// 肯德基做好了小明的食物
ps.publish('200', '您的餐好了')

// 肯德基做好了小红的食物
ps.publish('201', '您的餐好了')