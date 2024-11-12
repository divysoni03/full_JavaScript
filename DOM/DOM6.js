const btn = document.querySelector('button');
const div = document.querySelector('div');

//event
// btn.onclick = function(){
//     div.style.backgroundColor = "coral";
// }

// btn.onmouseover = function(){
//     div.style.fontSize = "48px";
// }


// btn.addEventListener('event','function');

// btn.addEventListener('click',function(){
//     div.style.backgroundColor = "coral";
// });
// btn.addEventListener('click',function(){
//     div.style.fontSize = "48px";
// });

// btn.onclick = function(){
//     console.log(btn.innerHTML);
// }

div.addEventListener('click',function(event){
    console.log(event.target.innerHTML);
});