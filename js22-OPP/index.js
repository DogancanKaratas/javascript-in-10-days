// let araba = {
//     renk : "kırmızı",
//     hız : 0
// }

// console.log(araba.renk);
// console.log(araba.hız);

//! method

// let araba = {
//   renk: "kırmızı",
//   hız: 0,
//   hizlandır: function (deger) {
//     this.hız += deger;
//   },
// };
// araba.hizlandır(30);
// console.log(araba.hız);

//! constructor
//! es5

// function Araba(renk) {
//   this.renk = renk;
//   this.hız = 0;
// }

// Araba.prototype.hizlandir = function (deger) {
//     this.hız += deger;
// }

// const araba = new Araba("red");

// console.log(araba.renk);
// araba.hizlandir(30);
// console.log(araba.hız);

//! constructor
//! es6

// class Araba {
//     constructor(renk){
//         this.renk = renk;
//         this.hız = 0;
//     }
//     hizlandir(deger){
//         this.hız += deger;
//     }
// }

// let araba = new Araba("black");
// araba.hizlandir(50);
// console.log(araba.renk);
// console.log(araba.hız);

//! Class

// class Araba {
//     constructor(renk){
//         this.renk = renk;
//         this.hız = 0;
//     }
//     hizlandir(deger){
//         this.hız += deger;
//     }
// }

// let araba = new Araba("black");
// araba.hizlandir(50);
// console.log(araba.renk);
// console.log(araba.hız);

//! instantiation
//! inheritance

// class Araba {
//     constructor(renk){
//         this.renk = renk;

//     }

// }
// class MotorluAraba extends Araba {
//     constructor(renk,motor){
//         super(renk);
//         this.motor = motor;
//     }

// }
// let araba = new Araba("red");

// let notorAraba = new MotorluAraba("black","v8");
// console.log(notorAraba.renk);
// console.log(notorAraba.motor);
// console.log(araba.renk);

//! encapsulation

// class Araba {
//     #renk
//     constructor(renk,hız){
//         this.#renk = renk;
//         this.hız = hız;

//     }
//     getRenk(){
//         return this.#renk;
//     }
//     setRenk(renk){
//         this.#renk = renk;
//     }
// }

// const araba = new Araba("siyah",10);
// console.log(araba.getRenk());
// araba.setRenk("kırmızı");
// console.log(araba.getRenk());

//! polymorphism

// class Shape {
//     draw(){
//         console.log("Şekil çiziliyor");
//     }
// }
// class Circle extends Shape {
//     draw(radius){
//         console.log(`Yarıçapı ${radius} olan daire çiziliyor`);
//     }
// }

// let shape = new Shape();
// let circle = new Circle();
// console.log(circle.draw("20"));

//! abstraction

class Database {
  constructor(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  setData(data) {
    this._data = data;
  }
}

class DataController extends Database {
  constructor(data) {
    super(data);
  }
  getData() {
    return "Data:" + super.getData();
  }
}

const database = new Database("deneme");
const dataController = new DataController("karat");
console.log(database._data);
dataController.setData("deneme2");
console.log(dataController.getData());
