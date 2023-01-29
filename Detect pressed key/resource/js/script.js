let eKey = document.querySelector('.box-result.key p:last-child');
let eLocation = document.querySelector('.box-result.location p:last-child');
let eWhich = document.querySelector('.box-result.which p:last-child');
let eCode = document.querySelector('.box-result.code p:last-child');
let eResult = document.querySelector('.result p');
let nav = document.querySelector('.nav');
let box = document.querySelector('.box')

document.addEventListener('keydown', e =>{
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    eResult.innerText = e.which;

    nav.classList.add('hide');
    box.classList.remove('hide');
})

