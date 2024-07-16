let todotext = document.querySelector("#todotext");
let tododes = document.querySelector("#tododes");
let btn = document.querySelector("#btn");
let todo_box = document.querySelector(".todo-box");
let form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let todo_list = document.createElement("div");
  todo_list.classList.add("todolist");
  todo_box.appendChild(todo_list);

  let msg = document.createElement("h3");
  msg.innerText = todotext.value;
  todo_list.appendChild(msg);

  let des = document.createElement("p");
  des.innerText = tododes.value;
  todo_list.appendChild(des);

  var del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("btn", "btn-primary", "delbtn");
  todo_list.appendChild(del);


  // const removeButtons = document.getElementsByClassName("delbtn");

  // Array.from(removeButtons).forEach((removeButton) => {
  //   removeButton.addEventListener("click", () => {
  //     removeButton.parentNode.remove();
  //   });
  // });
  todotext.value="";
  tododes.value="";

});
todo_box.addEventListener("click",function(evt){
  if(evt.target.nodeName=="BUTTON"){
    let delitem=evt.target.parentElement;
    delitem.remove();
    console.log(delitem);
  }
})