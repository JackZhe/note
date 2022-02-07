class Point {
  constructor(name, age, func) {
    this.name = name;
    this.age = age;
    func('123')
  }
}
let p = new Point('A', 20, (a)=> {
    console.log(a);
});
console.log(p);