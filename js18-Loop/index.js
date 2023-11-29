let meyve = ["elema","armut","muz","portakal","karpuz"]


// console.log(meyve[0]);
// console.log(meyve[1]);
// console.log(meyve[2]);
// console.log(meyve[3]);
// console.log(meyve[4]);

// for döngüsü ile yukarıdaki işlemi tek satırda yapabiliriz.

// for (let i = 0; i < meyve.length; i++) {
//     console.log(meyve[i]);
    
// } // for tek tek döngüye sokar ve meyve.length ile meyve dizisinin uzunluğunu alırız. i++ ile de 1 er 1 er arttırırız.  meyve.length yerine 5 yazsaydık da aynı işlemi yapardı.

// 0 dan 100 e kadar sayıları yazdıralım.
// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
    
// }

// sayı toplama

// let sayılar = [10,20,5,50,100,200]
// let toplam = 0;
// for (let i = 0; i < sayılar.length; i++) {
    
//     console.log(toplam = toplam + sayılar[i]);
    
// }

// kısayol index
// let sayılar = [10,20,5,50,100,200]
// let toplam = 0;
// for( let i in sayılar){
//     console.log(toplam+=sayılar[i]);
// }

// direk sayılar alma
// let sayılar = [10,20,5,50,100,200]
// let toplam = 0;
// for(let sayi of sayılar){
//     console.log(toplam +=sayi);
    
// }

// object ile döngü
const user = {
    "ad":"Mustafa",
    "soyad":"Kara",
    "email":"dgncn@gmail.com",
    "yas":25
}
for (let key in user) {
   console.log(user[key]);
    
}

// çoklu kullanıcı

let users = [
    {
        "id":1, 
        "ad":"Mustafa",
        "soyad":"Kara",
        "email":"dgncn@gmail.com",
        "yas":25
    },
    {
        "id":2,
        "ad":"ahmet",
        "soyad":"deneme",
        "email":"dgncn@gmail.com",
        "yas":25
    },
    {
        "id":3,
        "ad":"ali",
        "soyad":"can",
        "email":"asdasdasd"
    }
]

// console.log(users[0].ad);
// console.log(users[1].ad);
// console.log(users[2].ad);

for (let i = 0; i < users.length; i++) {
    console.log(users[i].ad);
    
}