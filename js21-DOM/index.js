// const title = document.querySelector("h1")
// const title2 = document.getElementById("title")
// title.style.color = "red"
// title2.style.color = "blue"
//! tekli seçiciler
document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.backgroundColor = "red";
document.querySelector("h1").style.width = "500px";
document.querySelector("h1").style.height = "100px";
const title = document.querySelector("h1");
title.innerText = "Dom";
title.innerHTML = "<button>Click</button>";
// const list = document.querySelector("ul");
// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(3)").style.color = "purple";
// document.querySelector("li:nth-child(2)").style.color = "black";
// document.querySelector("li:nth-child(4)").style.color = "green";


//! çoklu seçiciler
// const listItem = document.getElementsByClassName("listItem");
// const listItem = document.querySelectorAll(".listItem");
// const list1 = document.querySelector(".list2");
// const listItem = list1.getElementsByTagName("li");
const listItems = document.querySelectorAll(".list1 li");
// listItem.style.color = "red";   //! hata verir
// listItem[0].style.color = "red";  //! doğru 

// for (let i = 0; i < listItem.length; i++) {
//     console.log(listItem[i]);
//     listItem[i].style.color = "red";
// }

for (let item of listItems) {
    item.style.color = "blue";
}
console.log(listItems);