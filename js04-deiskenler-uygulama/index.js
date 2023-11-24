/* 
öğrenci bilgileri

1 - mert demir
    doğum tarihi:2001
    bilgisayar noları : 100, 90, 10
2- eylül demir
    doğumd tarihi : 2002
    bilgisayar notları: 60, 30, 50

geçer not : 45

program şarları:
1-öğrencilerin yaşlarını hesapla
2-öğrencilerin ders ortalaasını hesaplayınız
3-öğrencilerin dersten kalıp klamadığını hesaplayınız

*/
let suankiyil = new Date().getFullYear();
let geçmeNotu = 50;
let ogr1 = "mert demir";
let ogr1DogumYil = 2001;
let ogr1Yas = suankiyil - ogr1DogumYil;
let ogr1DersNot1 = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 10;
let ogr1DersNotOrt = parseInt((ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3);
let ogr1DersDurum = ogr1DersNotOrt > geçmeNotu;

let ogr2 = "eylül demir";
let ogr2DogumYil = 2002;
let ogr2Yas = suankiyil - ogr2DogumYil;
let ogr2DersNot1 = 60;
let ogr2DersNot2 = 30;
let ogr2DersNot3 = 50;
let ogr2DersNotOrt = parseInt((ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3) / 3);
let ogr2DersDurum = ogr2DersNotOrt > geçmeNotu;

console.log(suankiyil);
console.log(ogr1Yas);
console.log(ogr1DersNotOrt);
console.log(ogr1DersDurum);
console.log(ogr2Yas);
console.log(ogr2DersNotOrt);
console.log(ogr2DersDurum);

console.log("1.ogrenci geçme durumu:", ogr1DersDurum);
console.log("2.ogrenci geçme durumu:", ogr2DersDurum);
