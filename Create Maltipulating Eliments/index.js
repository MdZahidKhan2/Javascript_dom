let menu = document.querySelector('#menu');

function CreateMenu(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


menu.appendChild(CreateMenu('Zahid'));
menu.appendChild(CreateMenu('Moshahid'));
menu.appendChild(CreateMenu('Khan'));

let container = document.querySelector('.container');

container.innerHTML = "<h2>This is form innerHTML</h2>"