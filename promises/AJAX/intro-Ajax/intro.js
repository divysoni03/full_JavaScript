const btn = document.querySelector('button');

btn.onclick = function(){
                // obj
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);

    xhttp.onload = function (data){
        // console.log(data.target.response);
        // document.querySelector('div').innerHTML = data.target.response;
        document.querySelector('div').innerHTML = `<pre>${data.target.response}</pre>`;
        
    }

    xhttp.open('GET',"javaScript.txt");
    xhttp.send();
}