//! fonkiyonlar kendi scope alanlarını oluştururlar.
//! var ile if blck içirisinde scope sıkıntı çıkarabilir.
//! let ve const ile block içi scope oluşumu sağlayabiliriz.

let kullanici = "global scope 2";
const isim = "doğancan";

function İsimYazdir() {
  var kullanici = "function scope 1";
  console.log(kullanici);
}

function İsimYazdir2() {
  console.log(kullanici);
}

if (true) {
  let kullanici = "if scope 3";
  console.log(kullanici);
}


console.log(kullanici);
İsimYazdir();

