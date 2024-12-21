const btn = document.querySelector("button");
const marks = document.querySelector('input');

btn.addEventListener('click',function(event){
    event.preventDefault();
    if(!marks.checkValidity()){
        document.querySelector('span').innerHTML = marks.validationMessage;
    }
    else{
        document.querySelector('span').innerHTML = "Marks Correct!!";
    }
});