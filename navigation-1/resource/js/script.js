// navigation 1
const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) => 
            item.classList.remove('list-active'));
            this.classList.add('list-active');
        }
        list.forEach((item) => 
        item.addEventListener('click', activeLink));