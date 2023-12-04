const textInputDOM = document.getElementById("todoinput");
const btnaddTodoDOM = document.getElementById("addTodo");
const todosDOM = document.querySelector("#todos");
const clearDOM = document.getElementById("clear");

class Storage {
  static addTodoToStorage(todoArr) {
    let storage = localStorage.setItem("todo", JSON.stringify(todoArr));
    return storage;
  }
  static getStorage() {
    let storage =
      localStorage.getItem("todo") === null
        ? []
        : JSON.parse(localStorage.getItem("todo"));
    return storage;
  }
}

let todoArr = Storage.getStorage();

btnaddTodoDOM.addEventListener("click", function (e) {
  e.preventDefault();
  let id = todoArr.length + 1;
  let title = textInputDOM.value;
  const todo = new Todo(id, title);
  todoArr.push(todo);
  todoArr.reverse();
  UI.alert("Todo Eklendi !");
  UI.clearInput();
  UI.displayTodos();
  Storage.addTodoToStorage(todoArr);
});

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class UI {
  static displayTodos() {
    let result = "";
    if (todoArr.length === 0) {
      todosDOM.innerHTML = "Liste Boş!";
    } else {
      todoArr.forEach((item) => {
        result += `<li class="flex justify-between border px-4 py-3 flex border-2 font-bold item-center">
              <span>${item.title}</span>
              <button class="text-red-400 remove" data-id="${item.id}">Sil</button>
           </li>`;
      });
      todosDOM.innerHTML = result;
    }
  }
  static clearInput() {
    textInputDOM.value = "";
  }

  static removeTodo() {
    todosDOM.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        let btnId = e.target.dataset.id;
        UI.removeArrTodo(btnId);
      }
    });
  }
  static removeArrTodo(id) {
    todoArr = todoArr.filter((item) => item.id !== +id);
    Storage.addTodoToStorage(todoArr);
    UI.alert("Todo Silindi !");
    UI.displayTodos();
  }
  static alert(text) {
    window.alert(text);
  }
  static clearTodos() {
    clearDOM.addEventListener("click", function (e) {
      todoArr = [];
      Storage.addTodoToStorage(todoArr);
      UI.displayTodos();
      UI.alert("Tüm Todolar Silindi !");
    });
  }
}

window.addEventListener("DOMContentLoaded", function () {
  UI.removeTodo();
  UI.clearTodos();
  UI.displayTodos();
});
//!old project

// textInputDOM.addEventListener("change", function (event) {
//   textInputValue = event.target.value;
// });

// btnaddTodoDOM.addEventListener("click", addTodo);
// clearDOM.addEventListener("click", clearTodos);
// function addTodo(e) {
//   e.preventDefault();
//   todos.unshift({ id: todos.length + 1, todoTitle: textInputValue });
//   textInputDOM.value = "";
//   displayTodos();
// }
// function displayTodos() {
//   let result = "";
//   if (todos.length === 0) {
//     todosDOM.innerHTML = "liste boş!";
//   } else {
//     todos.forEach((item) => {
//       result += `
//       <li
//     class="flex justify-between border border-2 px-4 py-3 flex items-center justify-between font-bold"
//   >
//     <span>${item.todoTitle}</span>
//     <button class="text-red-400" onclick="deleteTodo(${item.id})">Sil</button>
//   </li>
//       `;
//     });
//     todosDOM.innerHTML = result;
//   }
// }

// function deleteTodo(id) {
//   let deletedId;
//   for (let index in todos) {
//     if (todos[index].id == id) {
//       deletedId = index;
//     }
//   }
//   todos.splice(deletedId, 1);
//   displayTodos();
// }

// function clearTodos() {
//   todos.splice(0, todos.length);
//   displayTodos();
// }

// displayTodos();
