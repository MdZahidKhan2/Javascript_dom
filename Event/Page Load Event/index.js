// let btn = document.querySelector('#btn'); 

// btn.addEventListener('click', function(){
//     alert('Button was Clicked');
// })

function Clicked (){
    alert('The Button was Clicked');
}

let a = document.querySelector('#Clicked');
a.onclick = function() {
    alert("This Message From Dom 0 label Handler");
} // Dom 0 label Handler


let b =  document.querySelector('#DomTwo');
b.addEventListener('click', function(){
    alert('Dom 2 label Handler') // Dom 2 label Handler
})