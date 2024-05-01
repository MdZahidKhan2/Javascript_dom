let menu = document.querySelector('#menu');
menu.style.color = 'green';  // Style Averting Like CSS
menu.classList.add('zahid', 'moshahid');  // class add  
menu.classList.remove('zahid'); // class remove
menu.classList.replace('moshahid', 'prince'); // class replace

let style = getComputedStyle(menu);
console.log(style.width);

let color = getComputedStyle(menu, '::first-letter');
console.log(color.fontSize);


let menu2 = document.querySelector('.go');
let height = menu2.offsetHeight;
let width = menu2.offsetWidth;

console.log(height,width)

let menu3 = document.querySelector('.go');
let height1 = menu3.clientHeight;
let width1 = menu3.clientWidth;

console.log(height1,width1)


