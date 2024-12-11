const btn1 = document.querySelector('#btn1');

btn1.onclick = function(){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function (data){
        document.querySelector('#dv1').innerHTML = `<pre>${data.target.response}</pre>`;       
    }
    xhttp.open('GET',"JavaScript.txt");
    xhttp.send();
}


const btn2 = document.querySelector('#btn2');

btn2.onclick = function(data){
    var msg = prompt("Enter your MSG : ");
    var xhttp = new XMLHttpRequest();

    console.log(JSON.parse(data.target.response));    

    xhttp.onload = function (data){
        document.querySelector('#dv2').innerHTML = `<pre>${data.target.response}</pre>`;       
        console.log(data.target);
        if(data.target.response.includes(msg)){
            document.querySelector('#dv2').innerHTML = `<pre>Data Exist</pre>`;
        }else{
            document.querySelector('#dv2').innerHTML = `<pre>Data Doesn't Exist!!</pre>`;

        }
    }
    xhttp.open('GET',"example_1.json");
    xhttp.send();
}