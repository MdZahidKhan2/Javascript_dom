let message = document.querySelector('#message');

function EventKey(a){
    console.log(a.key)
}

message.addEventListener('keypress', EventKey);






// function EventName(e) {
//     console.log(e.type)
// }

// message.addEventListener('keyup',EventName);
// message.addEventListener('keydown', EventName);
// message.addEventListener('keypress',EventName);

