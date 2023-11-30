// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// console.log(toplam);
// let sayi3 = 20;
// let sayi4 = 20;
// let toplam2 = sayi3 + sayi4;
// console.log(toplam2);

//? basit toplama
// function sayiToplami(sayi1,sayi2){
//     let toplam = sayi1 + sayi2;
//     console.log(toplam);

// }
// sayiToplami(10,20);
// sayiToplami(20,20);

// ? gelişmiş toplama
let toplam = 0;
function sayiToplami(...sayilar) {
  for (let sayi of sayilar) {
    toplam += sayi;
  }
}
sayiToplami(10, 20, 3, 4.5, 3);
console.log(toplam);

//! yas hesaplama
function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}

const hesapla = yasHesapla(1996);
console.log(hesapla);

const TarihSaat = new Date();
console.log(TarihSaat);
