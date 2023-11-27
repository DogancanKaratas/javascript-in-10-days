let url = " https://www.bigisayargenetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

// ! karakter sayısı bul.

result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length;

// ! youtube kaç karakterden oluşuyor

result = youtube.split(" ").length;
result = url.split(".").length;

// ! kanal adı başlangıç kotrol

result = youtube.startsWith("Bilgisayar");
result = url.startsWith("https");
if (result) {
  console.log("yapılacaklar");
} else {
  console.log("false döndü");
}

// ! kelime kontrolü

if (youtube.indexOf("Genetiği") > -1) {
  console.log("çalıştı");
} else {
  console.log("çalışmadı");
}

// ! url ve youtube değişken birleştir

youtube = youtube.toLowerCase().replace(" ", "-");
url = url.replace("com", "com/");

let newurl = url.replace(url, url + youtube);
newurl = `${url}/${youtube}`;

console.log(newurl);
