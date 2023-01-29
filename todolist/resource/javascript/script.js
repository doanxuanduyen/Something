let statuses = document.getElementsByClassName("statuses");
let statusItems = document.getElementsByClassName("status");
let choose = document.getElementsByClassName("choose");
let itemToDos = document.getElementById("items");
let itemToDo = document.getElementsByClassName("item");
let input = document.getElementById("input-content");
let add = document.getElementById("btn-add");
let content = document.getElementsByClassName("item__input");
let alert = document.getElementById("alert");

for (let i = 0; i < statusItems.length; i++) {
    statusItems[i].addEventListener("click", function changeTitleStatus() {
        choose[0].className = choose[0].className.replace(" choose", "");
        this.className += " choose";
    });
}

let arrayTodolist = ["learn english", "make money"];
function render() {
    const html = arrayTodolist.map((item) => {
        return `<li class="item">
                    <p class="item__input">${item}</p>
                    <div class="item__icon">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </li>`
    })
    itemToDos.innerHTML = html;
}
window.addEventListener("load", render)

add.addEventListener("click", function addContent(){
    if(input.value == ''){
        alert.classList.add("animation-effect");
        setTimeout(function() {
            alert.classList.remove("animation-effect");
        }, 4000)
    }
    else{
        arrayTodolist.push(input.value);
        input.value = '';
        render()
    }
});

for(let j = 0; j < 2; j++){
    console.log(123);
}
console.log(itemToDo);
console.log(itemToDo.length);
document.addEventListener("DOMContentLoaded", function(e) {
    console.log(itemToDo);
  })



