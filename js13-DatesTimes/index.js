let tarih = new Date();

let result;

result = tarih.getDate();
result = tarih.getDay(); //! 0 = pazar 6 = cumartesi
result = tarih.getFullYear();
result = tarih.getHours();
result = tarih.getTime();

// !tarihi güncelleme metodları set metod

// tarih.setFullYear(2023);
// tarih.setMonth(2);
// tarih.setDate(15);
// result = tarih;

// !Doğum tarihi

let dogumTarihi = new Date(1996, 8, 14);

result =tarih.getFullYear() - dogumTarihi.getFullYear()

console.log(result);
