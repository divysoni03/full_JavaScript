const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    localStorage.setItem('fname',document.querySelector('input').value);
});