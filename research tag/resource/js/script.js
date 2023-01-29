let input   = document.querySelector('.box-content input');
let tags    = document.querySelector('.tags');
let btnRemoveAll    = document.querySelector('.btn__remove');

let tagsRender = ["ReactJs"];

function showTags(){
    tags.innerHTML = '';
    for (let index = 0; index < tagsRender.length; index++) {
        const tag = tagsRender[index];
        tags.innerHTML += `<li class="tag">
                            ${tag}
                            <i class="fa-solid fa-x" onclick="removeTag(${index})"></i>
                        </li>`    
    }
}
showTags();

input.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        tagsRender.push(input.value.trim());
        showTags();
        input.value = ""
    }
})

function removeTag(index){
    tagsRender.splice(index, 1);
    showTags();
}

btnRemoveAll.addEventListener('click', function(){
    tagsRender = [];
    showTags();
})
