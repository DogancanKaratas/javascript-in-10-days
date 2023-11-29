let customer = {
    "ad" : "Mehmet",
    "soyad" : "Yılmaz",
    "seir" : "İstanbul",
    "yas" : 25,
    "ürünler" : [
        "laptop","araba","telefon"
    ],

}
let customer2 = {
    "ad" : "ahmet",
    "soyad" : "can",
    "seir" : "İstanbul",
    "yas" : 25,
    "ürünler" : 
        {
            "ürün" : "laptop",
            "fiyat" : 5000,
        },
}
let customer3 = {
    "ad" : "ali",
    "soyad" : "zorlu",
    "seir" : "İstanbul",
    "yas" : 25,

}

let müsteriler = [customer,customer2,customer3];

let ürünler = [
    {
        "ürünAdi":"huawei",
        "fiyat":5000,
    },
    {
        "ürünAdi":"samsung",
        "fiyat":6000,
    },
    {
        "ürünAdi":"iphone",
        "fiyat":7000,
    },

]



console.log(ürünler[0]);