let outputSize = document.querySelector('.output__size');
let changeUp = document.querySelector('.up');
let changeDown = document.querySelector('.down');

let valueDefaultSize = 35;
document.getElementById("output__size").innerHTML = valueDefaultSize;

function changeUpValue(){
    valueDefaultSize = valueDefaultSize + 1;
    document.getElementById("output__size").innerHTML = valueDefaultSize;
}
changeUp.addEventListener('click', changeUpValue);

function changeDownValue(){
    valueDefaultSize = valueDefaultSize - 1;
    document.getElementById("output__size").innerHTML = valueDefaultSize;
}
changeDown.addEventListener('click', changeDownValue);
