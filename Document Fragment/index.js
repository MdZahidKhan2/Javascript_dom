let menu = document.querySelector('#menu');
let lang = ['python','javaScript','php','java','C++'];

let fragment = document.createDocumentFragment();

lang.forEach((Language)=> {
    let li = document.createElement('li');
    li.textContent = Language;
    fragment.appendChild(li);
})

menu.appendChild(fragment);