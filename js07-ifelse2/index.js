// const yas = 17;

// if(yas>=18){
//     console.log("ehliyeT alabilirsin");
// }else{
//     console.log("EHLİYET ALAMAZSIN");
// }

let yas = 17;
let mezuniyet = "üni";

if (yas >= 18 && (mezuniyet == "üni" || mezuniyet == "lise")) {
  console.log("ehliyet alabilirsin");
} else if (yas === 17) {
  console.log("az kaldı");
} else {
  console.log("alamazsın");
}
