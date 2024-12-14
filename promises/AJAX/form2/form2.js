const btn = document.querySelector('button');
btn.addEventListener('click',function(event){
    event.preventDefault();

    var fname = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var msg = document.querySelector('#message').value;

    // sent value
    localStorage.setItem("fname",fname);
    localStorage.setItem("email",email);
    localStorage.setItem("msg",msg);

    location.href = "submited.html"; // changes location
});
